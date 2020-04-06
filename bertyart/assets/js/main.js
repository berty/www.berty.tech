//for first param in URL (after #)
$.urlParam1 = function(name){
    var results = new RegExp('[\?#]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
//for other params in URL (after &)
$.urlParam2 = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
function capitalizeWords(str){
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(function() {
  $('.slick-carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//Check if there is QRCode to display on page
if($('#id-qrcode').length){
    var key = decodeURIComponent($.urlParam1('key'));
    var name = decodeURIComponent($.urlParam2('name'));
    if(key && name){
      var name_cleaned = capitalizeWords(name.split('-').join(' '));
      var initials = name.replace(' ', '').substring(0, 2).toLocaleUpperCase()
      var url_verified = "https://berty.tech/id#key=" + encodeURIComponent(key) + "&name=" + encodeURIComponent(name);
      $('#id-initials').text(initials);
      $('.c-name').text(name_cleaned);
      var qrcode = new QRCode("id-qrcode", {
        text: url_verified,
        width: 290,
        height: 290,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.L
      });
      $('#id-block-loader').remove();
      $('#id-title').removeClass('display-none');
      $('#id-block-id').removeClass('display-none');
    }
    else {
      $('#id-block-loader').remove();
      $('#id-block-error').removeClass('display-none');
    }
  }
});
