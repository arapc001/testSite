function hideElements() {
  var x = $("#topnav")
  var childWidths = 0;
  for(var i = 0; i<x.children.length; i++){
    childWidths = childWidths + x.children[i].width;
  }
  while(x.firstChild.display != "none"){
      if(screen.width < childWidths){
          x.lastChild.style.display = "none";
      }
  }
  childWidths=0;
}

  //while topnav width > view-width
    //hide lastchild