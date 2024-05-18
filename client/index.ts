import { ADanger } from "./buttons.js";

function petitionWeb() {
    let div = document.createElement('div');
    div.classList.add("d-flex");
    div.style.position = "flex";
    div.style.top =  `${0}`;
    div.style.zIndex = `${1}`;
    div.style.backgroundColor = "#2C2E6B";
    div.style.marginLeft = `auto`;
    
    let img = document.createElement('img');
    img.classList.add('me-auto', 'my-auto');
    img.src = "/appicon.webp";
    img.style.width = `${CSS.rem(3)}`;
    img.style.height = "max-content";
 
    let innerDiv = document.createElement('div');
    innerDiv.className = "my-2";
    innerDiv.style.marginLeft = "auto";
 
    let p = new ADanger('Petitions', '/petitions');
    p.style.marginRight = `${CSS.rem(1)}`;
    let w = new ADanger('Web App', '/home');
    w.style.marginRight = `${CSS.rem(1)}`;

    let d = document.body;
    d.appendChild(div);
    div.appendChild(innerDiv);
    innerDiv.appendChild(p);
    innerDiv.appendChild(w);
}

class User {
    username: string;
    password: string;
    comfirmPassword: string;
}

function forms() {
    let div = document.createElement('div');
    div.style.backgroundColor = '#2B5678';

    let img = document.createElement('img');
    img.src = "redfordlogo.png";
    img.classList.add('d-flex', 'm-auto');
    img.style.width = "auto !important";

    let innerDiv = document.createElement('div');
    innerDiv.classList.add('d-flex', 'px-4');

    let divForm = document.createElement('div');
    divForm.style.width = `${CSS.vw((50))}`;
    divForm.style.margin = `auto ${CSS.rem(4)} !important`;

    if(window.matchMedia('(max-width: 919px)')) {
        img.style.width = `${CSS.vw(100)} !important'`;
        innerDiv.style.flexDirection = 'column-reverse';
        divForm.style.width = 'initial';
    }

    let registerForm = document.createElement('form');
        registerForm.ariaPlaceholder = "Username";
        registerForm.submit = function() {

    };

    let registerUser = document.createElement('input');

    let d = document.body;
    d.appendChild(registerUser);
}

window.onload = function() {
    petitionWeb();
    forms();
}