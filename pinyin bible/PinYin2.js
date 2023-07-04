suspendcode="<DIV id='backi' style='right:50px;POSITION:absolute;TOP:100px;'><img border=0 src='zhufu.gif'></div>" 
document.write(suspendcode); 
lastScrollY=0; 
function heartBeat(){ 
diffY=document.body.scrollTop; 
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.all.backi.style.pixelTop+=percent; 
lastScrollY=lastScrollY+percent;} 
window.setInterval("heartBeat()",1); 