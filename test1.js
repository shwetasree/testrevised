var myFirebaseRef = new Firebase("https://boiling-fire-9536.firebaseio.com/");
   var x=window.location.hash.substring(1);
   if(x=="text1"){
	 myFirebaseRef.child("Lorem Ipsum").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val(); 
  document.getElementById("head11").innerHTML=snapshot.name(); 
  });}
  else if(x=="text2"){
  myFirebaseRef.child("Lorem Ipsum 1").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();
  document.getElementById("head11").innerHTML=snapshot.name();   
  });}
  else if(x=="text3"){
  myFirebaseRef.child("Lorem Ipsum 2").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();
  document.getElementById("head11").innerHTML=snapshot.name();    
  });}
  else if(x=="text4"){
  myFirebaseRef.child("Lorem Ipsum 3").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();  
  document.getElementById("head11").innerHTML=snapshot.name();  
});}