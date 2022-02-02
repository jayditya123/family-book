var nameofmembers=["jay","bob","alex","heeheee"];
var imagesofmembers=["boy1.jpg","dad.jpg","mom.png","girl1.jpg"]
var i=0
function next()
{ 

 document.getElementById("names").innerHTML=nameofmembers[i]
 document.getElementById("images").src=imagesofmembers[i]
 i=i+1
if(i==4){
    i=0
}
  } 
  function sorting(){
      nameofthestudent.sort()
      document.getElementById("output").innerHTML=nameofthestudent
  }