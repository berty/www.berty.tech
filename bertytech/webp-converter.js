const webp = require('webp-converter');
const glob = require('glob');
const fs = require('fs');
const path = require('path')
const cheerio = require('cheerio');

const baseUrl = process.env.CONTEXT == 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL;
const publicDir = `${__dirname}/public`;
const extensions = ['.jpg', '.jpeg', '.png'];

function main() {
    glob(`${publicDir}/**/*.html`, {}, (err, files) => {
        const _images = [];
    
        // -- Find and replace image src paths
        // 1. Loop over all HTML files
        // 2. Find all 'amp-img' and 'img' elements where attribute '[to-webp]="true' 
        // 3. Check if file extension is in convertable list
        // 4. Push image 'src' attibute to _images array
        // 5. Replace image 'src' attibute to .webp file extension
        files.forEach(file => {
            const $ = cheerio.load(fs.readFileSync(file));
    
            $('amp-img._to-webp').each(function() {
                const imageSrc = $(this).attr('src');
                const imageExt = path.extname(imageSrc);
                const imageSrcset = $(this).attr('srcset');

                if (imageSrc.startsWith('http') && !imageSrc.startsWith(baseUrl)) {
                    return;
                }
                
                if (imageSrcset) {
                    const srcsetUrls = getUrlsFromSrcset(imageSrcset);
                    const webpSrcset = srcsetUrls.map(set => `${toWebpPath(set.path)} ${set.size}`);
                    srcsetUrls
                        .map(set => getAbsolutePath(file, set.path))
                        .forEach(url => _images.push(url))
    
                    $(this).attr('srcset', webpSrcset);
                }
    
                if (extensions.indexOf(imageExt) > -1) {
                    const absPath = getAbsolutePath(file, imageSrc);
                    $(this).attr('src', toWebpPath(imageSrc));
                    _images.push(absPath);  
                }               
            });

            $('picture._to-webp').each(function() {
                const img = $(this).find('img').first()
                const imageSrc = img.attr('data-src');
                const imageExt = path.extname(imageSrc);

                if (extensions.indexOf(imageExt) > -1) {
                    const absPath = getAbsolutePath(file, imageSrc);
                    $(this).prepend(`<source data-srcset="${toWebpPath(imageSrc)}" type="image/webp">`)
                    _images.push(absPath);  
                }       
                
                
            });
    
            fs.writeFileSync(file, $.html());
        })
    
        // -- Convert images
        // 1. Remove duplicate paths from _images array
        // 2. Loop over _images array
        // 3. Convert image to webp
        const imagesWithoutDups = [...new Set(_images)];
        imagesWithoutDups.forEach((image) => {
            const imageExt = path.extname(image);
            const webpPath = image.replace(imageExt, '.webp');
            webp.cwebp(image, webpPath,"-q 100" , function(status, error) {
                if (error) {
                    console.log(`WARN: Something is wrong with source image. File: ${image}`)
                    console.log(error);
                    process.exit(1);
                    throw 'FAILED convert image';
                }	
            });
        })
    });
}

function getUrlsFromSrcset(srcset) {
    return srcset.split(',')
        .map(set => {
            const splitted = set.split(' ').filter(set => set && set != '\n');
            return { path: splitted[0], size: splitted[1] };
        });
}

function toWebpPath(imagePath) {
    const imageExt = path.extname(imagePath);
    return (extensions.indexOf(imageExt) > -1)
        ? imagePath.replace(imageExt, '.webp')
        : imagePath;
}

function getAbsolutePath(htmlPath, imageSrc) {
    const dirname = path.dirname(htmlPath);
    const imageSrcWithoutBaseUrl = imageSrc.replace(baseUrl, '');
    const isAbsolutePath = imageSrcWithoutBaseUrl.startsWith('/');
    return isAbsolutePath
        ? path.join(publicDir, imageSrcWithoutBaseUrl)
        : path.join(dirname, imageSrcWithoutBaseUrl);
}


main();