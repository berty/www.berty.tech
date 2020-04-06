#!/bin/bash

domain="berty.tech"
rootdir="public"

create_package() {
    project_name="$1"
    project_url="$2"

    echo "$project_name" >> $rootdir/go-packages.txt
    echo "/$project_name/* go-get=1 /$project_name/index.html 200!" >> $rootdir/_redirects
    echo "/$project_name/ $project_url 301!" >> $rootdir/_redirects
    echo "/$project_name/* $project_url 301!" >> $rootdir/_redirects

    mkdir -p $rootdir/$project_name
    cat > $rootdir/$project_name/index.html <<EOF
<html><head>
    <meta name="go-import" content="$domain/$project_name git $project_url">
    <meta name="go-source" content="$domain/$project_name     $project_url $project_url/tree/master{/dir} $project_url/tree/master{/dir}/{file}#L{line}">
</head></html>
EOF
}

while read line; do
    if echo $line | grep --silent -E '^#'; then continue; fi

    project_name=$(echo $line | awk '{print $1}')
    project_url=$(echo $line | awk '{print $2}')
    create_package "$project_name" "$project_url"
done < go-get.csv

cat $rootdir/go-packages.txt | sort -u > $rootdir/go-packages-sorted.txt
mv $rootdir/go-packages-sorted.txt $rootdir/go-packages.txt
