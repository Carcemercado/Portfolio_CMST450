/**
 * Created by Carlos Arce for UMUC CMST 450
 * Project title: Portfolio website
 * Using HTML, CSS, JavaScript
 */
//Toggle hamburger menu icon and links
function myToggle(){
    let myLinks = document.getElementsByClass("topnav");
    if (myLinks.className === "topnav"){
        myLinks.className += " responsive";
    } else {
        myLinks.className = "topnav";
    }
}