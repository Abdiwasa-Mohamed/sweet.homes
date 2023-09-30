const background =[ 
    /images/hero-bg.jpg,
    /images/hero-bg2.jpg
]
let currentindex=0;
function changebackgroundimage() { 
document.body.style.hero_area=='url(${background[currentindex}})'};
changebackgroundimage()
setinterval(changebackgroundimage, 5000);