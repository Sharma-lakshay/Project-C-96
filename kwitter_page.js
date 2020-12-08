//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCdCMK1a5tgoe2DgAXDFcD9ZjHDlkXbTK0",
    authDomain: "kwitter-1909f.firebaseapp.com",
    databaseURL: "https://kwitter-1909f.firebaseio.com",
    projectId: "kwitter-1909f",
    storageBucket: "kwitter-1909f.appspot.com",
    messagingSenderId: "633791471377",
    appId: "1:633791471377:web:3160d6fbfb46db3afb76b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
msg= document.getElementById("msg").value; 
firebase.database().ref(room_name).push({ 
      name:user_name, 
      message:msg, 
      like:0 });
document.getElementById("msg").value= "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}
