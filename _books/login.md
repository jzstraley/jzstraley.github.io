---
title: Login
author: J. Austin Straley, DO
date: 2022-12-23
layout: post
lesson: 1.0
---

<html>
<head>
    {% include head.html %}
    {% include guide-font.html %}
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        h1 {
            z-index: 2;
        }
        .banner {
            background: var(--light-element);
            position: fixed;
            left: -300px;
            height: 600px; 
            width: 150%;
            z-index: 0;    
            }
        .color-theme-1 .banner {
            background: var(--warm-element);
            position: fixed;
            left: -300px;
            height: 600px; 
            width: 150%;
            z-index: 0;    
            }
        .color-theme-2 .banner {
            background: var(--dark-element);
            position: fixed;
            left: -300px;
            height: 600px; 
            width: 150%;
            z-index: 0;    
            }
        .boxed.col{
            padding:blue 10px !important;
            top:100px;
            height:400px;
            background: white;
            position:relative;
            z-index: 2;    
        }
        </style>
    </head>
<body>
    <div class="banner">
        </div>
    <div class="container-fluid">
      <div class="row align-text-center">
        <div class="col" style="z-index:1;color:white; position:center;">
            <p>Placeholder Text</p>
            </div>
        <div class="boxed col">
            <div id="login">
                <form>
                    <div class="group">
                        <input id="txtEmail" type="email">
                        <label>Email</label>
                        </div>
                    <div class="group">
                        <input id="txtPassword" type="current-password">
                        <label>Password</label>
                        <i class="fa fa-eye" onclick="show()"></i> 
                        </div>
                    <div id="divLoginError" class="group">
                        <div id="lblLoginErrorMessage" class="errorlabel">Error message</div>
                        </div>
                    <button id="btnLogin" type="button" class="button buttonBlue">Log in</button>
                    </form>
                </div>
            <div id="app">
                <form>
                    <div class="group">
                        <div id="lblAuthState" class="authlabel"></div>
                        </div>
                    <button id="btnLogout" type="button" class="button buttonBlue">Log out</button>
                    </form>
                </div>
            </div>
            </div>
                </div>
    <script>
        function show(){
            var password = document.getElementById("txtpassword");
            var icon = document.querySelector(".fas")
            // ========== Checking type of password ===========
            if(password.type === "password"){
                password.type = "text";
            }
            else {
                password.type = "password";
            }
            };
        </script>
</body>
</html>