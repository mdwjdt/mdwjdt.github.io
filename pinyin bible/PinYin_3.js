suspendcode="<DIV id='backi' style='right:10px;POSITION:absolute;TOP:50px;'><img border=0 src='HidePinYin.gif' name='DisplayPinYin' onclick=\"setClassProperty('py', 'display')\"></div>" 
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