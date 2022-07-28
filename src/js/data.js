const firebaseConfig = {
    apiKey: "AIzaSyAVz0TmtgIiquensHqAFYrqCwGwV6gSpmA",
    authDomain: "onlib-5d78a.firebaseapp.com",
    projectId: "onlib-5d78a",
    storageBucket: "onlib-5d78a.appspot.com",
    messagingSenderId: "152162448792",
    appId: "1:152162448792:web:b4f2f79d8ed548781ea7ed",
    measurementId: "G-29527S2T5B"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('senha').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('senha').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
