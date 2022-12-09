---
title: Caclulators
author: J. Austin Straley, DO
date: 2022-12-09
layout: post
lesson: 0
---

<html>
<style>
    .containter-fluid {
    }
    .row {
        text-align: center;
      display: flex;
      flex-wrap: wrap;
    }
    .row > [class*='col-'] {
      display: flex;
      flex-direction: column;
    }
    </style>
    <body>
        <h4>Labs</h4>
        <div class="container-fluid">
            <div class="row no-gutters mb-4">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <label>Sodium</label>
                    </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>
                    <input id="inputSodium" type="number" placeholder="sodium..." oninput="converter(this.value)" onchange="converter(this.value)">
                    </p>
                    </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <p>cSodium (Hillier)</p>
                    </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <span id="outputSodium"></span>
                    </div>
                </div>
            <div class="row no-gutters mb-4">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <label>Glucose</label>
                    </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>
                    <input id="inputGlucose" type="number" placeholder="glucose..." oninput="converter(this.value)" onchange="converter(this.value)">
                    </p>
                    </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <p>Glucose</p>
                    </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <span id="outputGlucose"></span>
                    </div>
                </div>
            </div>
            <div class="row no-gutters">
                <button>Submit</button>
            </div>
        <script>
            function converter() {
                let inputNa = document.getElementById("inputSodium").value;
                let inputGlu = document.getElementById("inputGlucose").value;
                outputNa = inputNa + (0.024*(inputGlu-100));
                document.getElementById("outputSodium").value=outputNa;
                document.getElementById("outputGlucose").value=outputGlu;
            }
        </script>
    </body>
</html>
