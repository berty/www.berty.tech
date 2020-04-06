var randomness = 90;
var threshold = 285;
var anim_duration = 900; //1000 = 1s

var randomness2 = 320;
var threshold2 = 700;
var anim_duration2 = 900; //1000 = 1s

var randomness3 = 320;
var threshold3 = 700;
var anim_duration3 = 900; //1000 = 1s

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

animate = function(){
  var randomNumRed = Math.round(Math.random()*25) + 25;
  var randomNumGreen = Math.round(Math.random()*25) + 125;
    var randomNumBlue = Math.round(Math.random()*25) + 25;
  var randomNumOrange = Math.round(Math.random()*25) + 500;
      var randomNumBlack = Math.round(Math.random()*25) + 25;
  var randomNumGrey = Math.round(Math.random()*25) + 800;
  $('.fluid').animate({
      borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
      borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
      borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
      borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
    backgroundColor: rgb2hex('rgba(' + randomNumRed + ',' + randomNumGreen + ', 215)') 
    },anim_duration,animate);
  $('.fluidbig').animate({
      borderTopLeftRadius: String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
      borderTopRightRadius:  String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
      borderBottomLeftRadius:  String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
      borderBottomRightRadius:  String(Math.round((Math.random()*randomness2 + threshold2)) + 'px'),
    backgroundColor: rgb2hex('rgba(' + randomNumBlue + ',' + randomNumOrange + ', 215)') 
    },anim_duration2,animate);
  $('.fluiddark').animate({
      borderTopLeftRadius: String(Math.round((Math.random()*randomness3 + threshold3)) + 'px'),
      borderTopRightRadius:  String(Math.round((Math.random()*randomness3 + threshold3)) + 'px'),
      borderBottomLeftRadius:  String(Math.round((Math.random()*randomness3 + threshold3)) + 'px'),
      borderBottomRightRadius:  String(Math.round((Math.random()*randomness3 + threshold3)) + 'px'),
    backgroundColor: rgb2hex('rgba(' + randomNumBlack + ',' + randomNumGrey + ', 215)') 
    },anim_duration3,animate);
};