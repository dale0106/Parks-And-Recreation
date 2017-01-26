document.addEventListener("DOMContentLoaded", init);


//var navigation = document.getElementsByClassName("link");
//let hammer = new Hammer(navigation);
function init(ev){
    
  var pl = document.querySelectorAll(".link"); // Adding event listeners to buttons (links)
    
  [].forEach.call(pl, function(obj, index){ // create array- call forEach method and pass our variable pl
      //obj is the method's variable which contains the ACTUAL data. Index is index number.
  
        obj.addEventListener("touchend",function(ev){ 
     
            obj.preventDefault(); //stop default 
            ev.currentTarget.preventDefault();
            this.preventDefault();
            this.click();
        });
      
      obj.addEventListener("click", navigate); //tells obj to go to run navigate function
   
      
  });
  //add listeners to pages
  var pages = document.querySelectorAll("[data-role=page]"); // grab all the data-role pages
  [].forEach.call(pages, function(obj, index){
   obj.className = "inactive-page";    // iterate through each one and give them a class of "inactive-page"
      // this inactive page will contain an animation which will move the page off the display
      // @keyframe moveOff {transform: translate3d(100%,0,0);}
      
  });
}

function navigate(ev){
  ev.preventDefault(); // stops default action
  var href = ev.target.href; // gets the link
  var id = href.split("#")[1]; // splits the link at '#' 
  
  var pages = document.querySelectorAll("[data-role=page]"); // grab every data-role with name page
  [].forEach.call(pages, function(obj, index){ 
    if(obj.id == id){ // if the current object's id is exactly equal to the "id" var then...
      if(obj.className != "active-page"){
        obj.className = "active-page";  // give it the class of "activate-page" 
      }
    }else{
      if(obj.className != "inactive-page"){
        obj.className = "inactive-page";  
      }
    }
      
  });
}