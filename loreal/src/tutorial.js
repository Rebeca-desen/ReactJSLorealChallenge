import React from 'react'
import './App.js';

function tutorial (){
    const buttonTutorial = document.querySelector('.button-tutorial')

    buttonTutorial.addEventListener("click", function(){
        buttonTutorial.action = "/tutorial"
        buttonTutorial.method = "GET"
    })

}
