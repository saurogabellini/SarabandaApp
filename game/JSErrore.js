var IndErrore = -105;
var myStartErrore = 0;

function ErroreDelete()
{
       var d = document.getElementById('iderror').parentNode;
      var d2 = document.getElementById('iderror');
      d.removeChild(d2);
}

function ErroAbbassalo()
 {
   if (IndErrore >= myStartErrore) {     
     Timer1= setTimeout("ErroreDelete()", 1000); 
     return
   }
   IndErrore = IndErrore +4;
   div = document.getElementById('iderror');


   div.style.top = IndErrore + 'px';

      
   Timer1= setTimeout("ErroAbbassalo()", 20);
 }
function ErroVis(msg)
 {
  //IndErrore = -105;
  var newdiv = document.createElement('div');  
  document.createElement('div');
  newdiv.style.width = "90%"; 
  newdiv.style.height = "100px"; 
  newdiv.style.position = "absolute"; 
  newdiv.style.left = "5%";   
  myposition = (myStartErrore - 105);
  IndErrore = myposition;
  newdiv.style.top = myposition + "px";
  newdiv.style.background =  "#00FF00"; 
  newdiv.setAttribute('id', 'iderror'); 
  newdiv.innerHTML = '<table width="100%" style="height: 100px; text-align:center;"><tr><td style="background-image: url(assets/images/tick.png); background-repeat: no-repeat; text-align:center;" ><b><font size="2" color="blue">' + msg + '</font></b></td></tr></table>'; 
  newdiv.style.border = "4px solid #000"; 
  document.body.appendChild(newdiv);
  
  Timer1= setTimeout("ErroAbbassalo()", 100);  
}	


 function VisualizzaErrore(msg)
 { 
    myStartErrore= getPosY();    
    Timer = setTimeout("ErroVis('" + msg +"')", 10);
 }
 
function getPosY2(obj) {
var curtop = 0;
if (obj.offsetParent) {
while (obj.offsetParent) {
curtop += obj.offsetTop
obj = obj.offsetParent;
}
}
else if (obj.y)
curtop += obj.y;
return curtop;
}

function getPosY() {
var ns = (navigator.appName.indexOf("Netscape") != -1);
var pY = ns ? pageYOffset : document.body.scrollTop;
return pY;
}