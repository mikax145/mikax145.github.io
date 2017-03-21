/** jQuery DrawSVG for home cherry blossm nav **/

/** Initialize the plugin on the <svg> element you want to animate and store in a variable **/
var bio = $('#bio').drawsvg({
    stagger: 250
});

/** Run the animation **/
bio.drawsvg('animate');

var cv = $('#cv').drawsvg({
    stagger: 250
}).drawsvg('animate');

var work = $('#work').drawsvg({
    stagger: 250
}).drawsvg('animate');

var bottomleft = $('#bottomleft').drawsvg({
    stagger: 250
}).drawsvg('animate');

var bottomright = $('#bottomright').drawsvg({
    stagger: 250
}).drawsvg('animate');




/** for the mini nav **/

var bioS = $('#bio-s').drawsvg({
    stagger: 250
}).drawsvg('animate');

var cvS = $('#cv-s').drawsvg({
    stagger: 250
}).drawsvg('animate');

var workS = $('#work-s').drawsvg({
    stagger: 250
}).drawsvg('animate');

var bottomleftS = $('#bottomleft-s').drawsvg({
    stagger: 250
}).drawsvg('animate');

var bottomrightS = $('#bottomright-s').drawsvg({
    stagger: 250
}).drawsvg('animate');
