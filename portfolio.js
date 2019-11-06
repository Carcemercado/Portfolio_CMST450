/**
 * Created by Carlos Arce for UMUC CMST 450
 * Project title: Portfolio website
 * Using HTML, CSS, JavaScript
 */
"use strict";
//Toggle hamburger menu icon and links for mobile devices
function myToggle(){
    let myLinks = document.getElementById("mytopnav");
    if (myLinks.className === "topnav"){
        myLinks.className += " responsive";
    } else {
        myLinks.className = "topnav";
    }
}
//On windowload update copyright year
window.onload = function myDate(){
    let myDate = new Date();
    let dateYear = myDate.getFullYear();
        document.getElementById('dateYear').innerHTML = `&copy; 2019 - ${dateYear} Carlos Arce. All rights reserved.`;
    if (dateYear === 2019){
        document.getElementById('dateYear').innerHTML = `&copy; ${dateYear} Carlos Arce. All rights reserved.`;
    }
}