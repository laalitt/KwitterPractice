// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUommWN1u5oY-wBa15uHt-lkE-Zep-jAA",
    authDomain: "kwitterpractice-c41ca.firebaseapp.com",
    databaseURL: "https://kwitterpractice-c41ca-default-rtdb.firebaseio.com",
    projectId: "kwitterpractice-c41ca",
    storageBucket: "kwitterpractice-c41ca.appspot.com",
    messagingSenderId: "731726941229",
    appId: "1:731726941229:web:28a9d6304975451182fca4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
}