let header = document.querySelector(".header");
let str = "Frequently Asked Questions"

let sec = 0;
let interVal = setInterval(()=>{
    header.textContent+=str[sec];
    sec++;
},30)


setTimeout(() => {
    clearInterval(interVal)
}, 750);


let nameShah = document.getElementById("nameShah");
let btnShah = document.querySelector(".btnShah");


// btnShah.addEventListener("click", ()=>{
//     nameShah.textContent = "Shah Jahan Brohi Ccomputer Science";
//     nameShah.style.color = "yellow";
//     nameShah.style.fontSize = "5rem";
//     nameShah.style.backgroundColor = "red";
//     nameShah.style.textAlign = "center" ;
// });

let myEvents = () =>{
    nameShah.textContent = "Shah Jahan Brohi Ccomputer Science";
    nameShah.style.color = "yellow";
    nameShah.style.fontSize = "5rem";
    nameShah.style.backgroundColor = "red";
    nameShah.style.textAlign = "center" ;
}


let arr = ["Shah Nawaz","Shah Jahan","Abbas"]

let unorderedList = document.createElement("ul");
for (const name of arr) {
    let list = document.createElement("li");
    list.textContent = name;
    unorderedList.appendChild(list);
}
document.body.append(unorderedList);




let sum = (n1,n2) => {
    return n1+n2;
}

console.log(sum(12,5));



console.log(this); // refers to the window object



