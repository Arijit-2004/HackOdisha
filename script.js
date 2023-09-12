// document.addEventListener("DOMContentLoaded", function() {
//     const dropdownBtn = document.querySelector(".btn");
//     const dropdownContent = document.querySelector(".dropdown-content");

//     // Show/hide dropdown content when the button is clicked
//     dropdownBtn.addEventListener("click", function() {
//         dropdownContent.classList.toggle("show");
//     });

//     // Close the dropdown if the user clicks outside of it
//     window.addEventListener("click", function(event) {
//         if (!event.target.matches(".dropbtn")) {
//             if (dropdownContent.classList.contains("show")) {
//                 dropdownContent.classList.remove("show");
//             }
//         }
//     });
// });
const locations = ["origin","hemis", "jim", "kazi", "peri", "satpur", "sundar", "tado"];
let i = 0;
function previous()
{
    display(--i);

}
function next()
{
    display(++i);
}
function display( pos)
{
if(i<0)
i = locations.length -1;
else if(i==locations.length)
i=0;

let place = locations[i];
const currentImg = document.querySelector("#bgImg");
const locText = document.querySelector(".btn");
const guideText = document.querySelector("#guide");
const link = document.querySelector(".tag");
if(place === "origin")
{
locText.innerText = "The adventure begins here!"
currentImg.src = "pexels-irina-iriser-1379636.jpg";
guideText.style.color = "#d5213a";
link.href = "#";
}
else if(place === "hemis" )
{
currentImg.src = "https://www.mountainhomestays.com/wp-content/uploads/2019/11/Wild8-1.jpg";
locText.innerText="Hermis National Park, Jammu & Kashmir" ;
guideText.style.color = "white";
link.href = "/parkPages/hemis.html";
}
else if(place ==="jim")
{

    currentImg.src = "https://www.swantour.com/sites/default/files/Jim-corbett-national-park.jpg";
    locText.innerText="Jim Corbett National Park, Uttarakhand" ;
    guideText.style.color = "cyan";
    link.href = "/parkPages/jim-corbett.html";
}
else if(place ==="kazi")
{

    currentImg.src = "https://w0.peakpx.com/wallpaper/468/842/HD-wallpaper-indian-rhinoceros-kaziranga-national-park-2021-bing.jpg";
    locText.innerText= "Kaziranga National Park, Assam";
    guideText.style.color = "#ffa535";
    link.href = "/parkPages/kaziranga";
}

else if(place ==="peri"){
currentImg.src = "https://unstumbled.com/uploads/2020/06/trison-thomas-XJapZPU5o68-unsplash-scaled.jpg";
locText.innerText= "Periyar National Park, Kerala";
guideText.style.color ="#bad940";
link.href = "/parkPages/periyar.html";
}

else if(place ==="satpur"){
currentImg.src = "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2016/08/Sere.jpg";
locText.innerText= "Satpura National Park, Madhya Pradesh";
guideText.style.color ="rgb(125 253 109)";
link.href = "/parkPages/satpura.html";
}

else if(place ==="sundar"){
currentImg.src = "https://wallpaperaccess.com/full/2109467.jpg";
locText.innerText= "Sundarbans, West Bengal";
guideText.style.color ="#a3ffff";
link.href = "/parkPages/sundarbans.html";
}

else if(place ==="tado")
{
currentImg.src = "https://assets.cntraveller.in/photos/60ba22608c5b530e12127b04/16:9/w_1360,h_765,c_limit/india-national-parks-1366x768.jpg";
locText.innerText= "Tadoba Tiger Reserve, Maharashtra";
guideText.style.color = "rgb(255 197 125)";
link.href = "/parkPages/tadoba.html";
}

console.log(`displaying ${place}`);
}
