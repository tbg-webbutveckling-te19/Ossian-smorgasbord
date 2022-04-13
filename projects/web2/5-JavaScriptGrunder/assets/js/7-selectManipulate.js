// select an element and then manipulate it

// // select
// var h1 = document.querySelector("h1")

// // manipulate
// h1.style.color = "red";

// toggle background color

// // select
// var bg = document.getElementsByTagName("body")[0];
// var isGreen = false;

// // manipulate
// var interval = setInterval(function() {
//     if(isGreen) {
//         bg.style.backgroundColor = "white";
//     } else {
//         bg.style.backgroundColor = "green";
//     }
//     isGreen = !isGreen;
// }, 20000)

// // clear interval
// bg.addEventListener("dblclick", function(){
//     clearInterval(interval);
// })

// select by ID
var element = document.getElementById("highlight");
console.log(element);
console.dir(element);

// select by ClassName
var elements = document.getElementsByClassName("bolded"); //nodelist
console.log(elements);
console.dir(elements);

// select by Tag
var eles = document.getElementsByTagName("li"); // nodelist
console.log(eles);
console.dir(eles);

// select by querySelector
// Takes a string argument and returns the first element that
// matches a given CSS.style selector
var queryTag = document.querySelector('#highlight') //only returns the first element
console.log(queryTag);
console.dir(queryTag);

// slect by querySelectorAll
// takes a strign argumen and returns a list of elements that
// matches a given CSS-style selector
var queryTagAll = document.querySelectorAll('h1'); //nodelist
console.log(queryTagAll);
console.dir(queryTagAll);

// 5 ways to find <p id="first" class="special">Hello p</p>
var queryTagAllP = document.querySelectorAll('p')
console.log(queryTagAllP);
var queryTagP = document.querySelector('#first')
console.log(queryTagP);
var elementP = document.getElementById("first");
console.log(elementP);
var p = document.querySelector("p")
console.log(p);
var elementssP = document.getElementsByClassName("special")[0];
console.log(elementssP);

// Select
var element = document.querySelector('#highlight');

// // Manipulate with WET CODE
// element.style.color = "blue";
// element.style.border = "10px solid black"
// element.style.fontSize = "55px";
// element.style.backgroundColor = "#eee";

// select
var tag = document.querySelector("h1")


element.classList.add("some-class");

// add a class
queryTag.classList.add("another-class");

// remove a class
tag.classList.remove("another-class");

// toggle a class 
tag.classList.toggle("another-class");


// Select
var pEle = document.querySelector("test")

// pEle.textContent = "This is an <strong>awesome</strong> paragrapth";
// pEle.innerHTML = "This is an <strong>awesome</strong> paragrapth";

// chaining methods
document.getElementsByTagName("h1")[0].textContent = "Chaning Methods";
document.getElementsByTagName("h1")[0].innerHTML = "<i>Chaning Methods</i>";

// Manipulating atridbuds
var link = document.querySelector("a");

// get attr of link, href
console.log(link.getAttribute("href")) // https://google.com

// change href attr
link.setAttribute("href", "http://tannbersskolan.nu")

//change img src
var img = document.getElementsByTagName("img")[0];
img.setAttribute("src", "assets/images/separation-of-concerns.JPG")
img.setAttribute("alt", "sepration-of-concerns")
img.setAttribute("title", "SoC")

// Select
var btn = document.querySelector("button");

// Manipulate
btn.addEventListener("click", () => {
    document.querySelector("button + p").innerHTML = "YAY! I've been clicked!";

})

// Select
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        // this.style.textDecoration = "line-through"
        this.classList.toggle("todo");
    })
}