function hideShow(idElem,typ){
 el=document.getElementById(idElem).style;
 switch (typ) { 
  case 6:
   $('#'+idElem).animate({
    width: 'hide'
   }, 0, function() {
    el.display='none';
  });
   break;
  case 7:
    $('#'+idElem).animate({
    width: 'show'
   }, 0, function() {
    el.display='block';
  });
   break;
  case 8:
   if (el.display=='block') {
     hideShow(idElem,6);
   }
   else hideShow(idElem,7);
   break;
 }
}