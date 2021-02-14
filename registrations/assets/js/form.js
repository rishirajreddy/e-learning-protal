  var firebaseConfig = {
    apiKey: "AIzaSyA4r_qr_jWsqjicZOuAqW79xgn1ToQjstg",
    authDomain: "e-learning-auth-ea96a.firebaseapp.com",
    projectId: "e-learning-auth-ea96a",
    storageBucket: "e-learning-auth-ea96a.appspot.com",
    messagingSenderId: "532082121631",
    appId: "1:532082121631:web:cf4189c3fe78c218d33baa",
    measurementId: "G-L4E8ZTECS7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
 
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
 
  alert("Signed Up"+" "+"as "+email.value);
  if(document.querySelector("#signup-student")){
    window.location = "/registrations/main-pages/s-courses.html";
  }
  if(document.querySelector("#fac-signup")){
    window.location = "/registrations/main-pages/dashboards/faculty/profile.html";
  }
 }


 function signIn(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  // const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  // promise.then((userCredentials) => {
  //   var user = userCredentials.user;
    alert("LoggedIn"+" "+email.value)
    if(document.querySelector("#login-btn-student")){
      window.location = "/registrations/main-pages/s-courses.html"
    }
    else if(document.querySelector("#login-btn-faculty")) {
      window.location = "/registrations/main-pages/dashboards/faculty/profile.html"
    }
  // });
  
  promise.catch(e => alert(e.message));
  // alert("LoggedIn"+" "+ email.value);
  
 }

 function signOut(){
  var email = document.getElementById("email");
  // auth.signOut();
  alert("Signed Out"+" "+email.value);
  window.location = "/index.html";  
 }

 auth.onAuthStateChanged(function(user){
  
  if(user){
   var email = user.email;
   alert("Active User " + email);
   //Take user to a different or home page

   //is signed in
   
  }else{
   
   alert("No Active User");
   //no user is signed in
  }
 
 });