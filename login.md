---
title: Login
layout: home
permalink: /login
---

<html>
<head>
    {%- include login-code.html -%}
    {%- include status.html -%}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/sign-in/">
<style>   
Body {  
  font-family: Calibri, Helvetica, sans-serif;  
  background-color: pink;  
}  
button {   
       background-color: #4CAF50;   
       width: 100%;  
        color: orange;   
        padding: 15px;   
        margin: 10px 0px;   
        border: none;   
        cursor: pointer;   
         }   
 form {   
        border: 3px solid #f1f1f1;   
    }   
 input[type=text], input[type=password] {   
        width: 100%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;   
        border: 2px solid green;   
        box-sizing: border-box;   
    }  
 button:hover {   
        opacity: 0.7;   
    }   
  .cancelbtn {   
        width: auto;   
        padding: 10px 18px;  
        margin: 10px 5px;  
    }   
 .container {   
        padding: 25px;   
        background-color: lightblue;  
    }   
</style>   
</head>     
  <body class="text-center">
    <div class="forms-out">
        <div class="forms-in">
          <div id="registration-page" class="hide">
            <button id="show-login">Sign In</button>
            <h3>Sign Up</h3>
            Email <br />
            <input type="email" id="registration-email" /><br />
            Confirm Email <br />
            <input
            type="email"
            id="registration-reemail"
            autocomplete="disable"
            /><br />
            Password <br />
            <input type="password" id="registration-password" /><br />
            <center><button id="register">Sign Up</button></center>
          </div>
          <div id="login-page">
            <button id="show-register">Sign Up</button>
            <h3>Sign In</h3>
            Email <br />
            <input type="email" id="login-email" /><br />
            Password <br />
            <input type="password" id="login-password" /><br />
            <p id="forgot-password">Forgot Password</p>
            <center><button id="login">Sign In</button></center>
          </div>
          <div id="homepage" class="hide">
            <button id="signout">Sign Out</button>
            <h3>Logged In</h3>
          </div>
        </div>
    </div>
      <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebase/8.10.1/firebase-app.js"></script>
      <!-- TODO: Add SDKs for Firebase products that you want to use-->
    <script src="https://www.gstatic.com/firebase/8.10.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebase/8.10.1/firebase-firestore.js"></script>
    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
        apiKey: "AIzaSyBLEuS73i5lhIARRCbD_MkDp-DPXoMoJGQ",
        authDomain: "imteched-f4f40.firebaseapp.com",
        databaseURL: "https://imteched-f4f40-default-rtdb.firebaseio.com",
        projectId: "imteched-f4f40",
        storageBucket: "imteched-f4f40.appspot.com",
        messagingSenderId: "40812159280",
        appId: "1:40812159280:web:d4aeeebd2b847f891528f5",
        measurementId: "G-0ZX5STFS60"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    </script>
    <script src="https://github.com/jzstraley/jzstraley.github.io/blob/firebasejs.js"></script>
  </body>  
</html>  