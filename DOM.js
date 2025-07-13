console.log("Hello World")


let heading = document.getElementById("heading")

document.getElementById("demo").innerHTML = "Thanks for welcoming me on board!"

heading.style.color="pink";

heading.onclick = ()=>{
    heading.innerHTML="Thanks for clicking on the text.";
    heading.style.color = "green";
    heading.style.fontSize = "50px";
    heading.style.backgroundColor = "pink"
}

document.getElementById("btn").onclick = () =>{
    document.write(Date());
}


document.getElementById("heading1").onclick = () =>{
    document.getElementById("heading1").style.color = "green";
}

document.querySelector("h1").style.color = "yellow"

let name = document.querySelector(".name")
name.style.color = "orange"


console.dir(name);

// Query 01: Know the differnce among these three ways of changing the html content
name.innerHTML = "I am Shah Jahan"

name.innerText = "I am an undergrade student"

name.textContent = "Computer Science with soecialization in AI"


let emptyH1 = document.querySelector(".emptyH1")

emptyH1.innerHTML = "My brother <span> Abbas </span> has recently completed his matriculation..."

let emptyH2 = document.querySelector(".emptyH2")
emptyH2.innerText = "<span> Abbas </span> is now admitted in Degree College doing Pre-Engineering";


let textH4 = document.querySelector(".textH4");

textH4.innerText = "Shah Nawaz"
// textH4.innerHTML = "Shah Nawaz"

let img = document.querySelector(".img");

document.querySelector(".img-btn").onclick = () => {
    // img.src = "profile.jpeg"
    img.setAttribute("alt", "An image")
    img.setAttribute("id" , "profile")
    img.setAttribute("src" , "profile.jpeg")
    console.log(img.getAttribute("src"))
};

textH4.removeAttribute("class")

let depart = document.createElement("h1")
depart.innerHTML = "CS"
document.body.append(depart)

// get it solved later
let moreText = document.createElement("span")
moreText.innerHTML =  "<span> CS </span> is a good department"
document.depart.append(moreText)

let four = document.createElement("h1");
four.innerHTML = "Hey Brother Four";

document.querySelector("div").appendChild(four);



