console.log('Loaded!');
var im=document.getElementById('img');
var marginLeft=0;
function move(){
    marginLeft=marginLeft+2;
    img.style.marginLeft=marginLeft+'px';
}
im.onclick=function(){
    var int=setInterval(move,100);
};