var myFirebaseRef = new Firebase("https://boiling-fire-9536.firebaseio.com/");
	 myFirebaseRef.child("Lorem Ipsum").on("value", function(snapshot) {
  document.getElementById("div1").innerHTML=snapshot.val();  
  document.getElementById("head1").innerHTML=snapshot.name();  
    
  });
 
  myFirebaseRef.child("Lorem Ipsum 1").on("value", function(snapshot) {
  document.getElementById("div2").innerHTML=snapshot.val(); 
  document.getElementById("head2").innerHTML=snapshot.name(); 
  
  });
  myFirebaseRef.child("Lorem Ipsum 2").on("value", function(snapshot) {
  document.getElementById("div3").innerHTML=snapshot.val(); 
  document.getElementById("head3").innerHTML=snapshot.name(); 
 
  });
  myFirebaseRef.child("Lorem Ipsum 3").on("value", function(snapshot) {
  document.getElementById("div4").innerHTML=snapshot.val(); 
  document.getElementById("head4").innerHTML=snapshot.name(); 

});