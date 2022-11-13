var div1 = document.createElement("div");
div1.className = "card";

var div2 = document.createElement("div");
div2.className = "top";
div1.appendChild(div2);
var div3 = document.createElement("div");
div3.className = "userDetails";
div2.appendChild(div3);
var div4 = document.createElement("div");
div4.className = "profilepic";
div3.appendChild(div4);
var div5 = document.createElement("div");
div5.className = "profile_img";
div4.appendChild(div5);
var div6 = document.createElement("div");
div6.className = "image";
div5.appendChild(div6);
var imgg = document.createElement("img");
imgg.src = "data:image/jpeg;base64,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";
imgg.alt = "img9";
div6.appendChild(imgg);
var h31 = document.createElement("h3");
h31.innerHTML += "name";
div3.appendChild(h31);
var div7 = document.createElement("div");///dot

var sp1 = document.createElement("span");///dot
sp1.className = "dot";
var i1 = document.createElement("i");///dot
i1.className = "fas fa-ellipsis-h";

div7.appendChild(sp1);
sp1.appendChild(i1);
div2.appendChild(div7);


var div8 = document.createElement("div");
div8.className = "imgBx";
var img2 = document.createElement("img");
img2.src = "https://media.geeksforgeeks.org/wp-content/uploads/20220609090119/gfg2-300x297.jpeg";
img2.alt = "post-1";
img2.className = "cover";
div8.appendChild(img2);
div1.appendChild(div8);

var div9 = document.createElement("div");
div9.className = "bottom";
div1.appendChild(div9);

var div10 = document.createElement("div");
div10.className = "actionBtns";
div9.appendChild(div10);

var div11 = document.createElement("div");
div11.className = "left";
div10.appendChild(div11);
// var sp2=document.createElement("span"); 
// sp2.className="heart";
// sp2.onclick="addlike";
// var svg1=document.createElement("");
var ab1=document.createElement("a");
ab1.href="#";
var p1=document.createElement("p");
p1.className="likes";
ab1.appendChild(p1);
div9.appendChild(ab1);
var ab2=document.createElement("a");
ab2.href="#";
var h2 = document.createElement(h4);
h2.className="comments";

var fin = document.getElementById("plswork");
fin.append(div1);

