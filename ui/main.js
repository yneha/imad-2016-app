console.log('Loaded!');
var im=document.getElementById('img');
var lft=0;
function move(){
    lft=lft+2;
    img.style.lft=lft+'px';
}
im.onclick=function(){
    var int=setInterval(move,100);
}