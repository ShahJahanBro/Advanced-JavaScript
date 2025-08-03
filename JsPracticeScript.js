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

// NOTE: this refers to the object that is executing the current function.

console.log(this); // refers to the window object


let personalInfo = {
    name: "Shah Jahan",
    age: 23,
    broz:function(){
        console.log(this.name);
    }
}

personalInfo.broz();

let shahjan = {
    bhai: "Abbas",
    age: 15,
    bhaiKaName: ()=>{
        console.log(this.bhai);
    }
}

shahjan.bhaiKaName();


let czn = "Yaseen";
let std = {
    czn: "Abdul Ahad",

    arrowFunc: ()=>{
        console.log(`This is arrow function : ${this.czn}`);
    },

    regFunc: function(){
        console.log(`This is regular function : ${this.czn}`);
    },


}



std.regFunc();
std.arrowFunc();


let annonymousFunc = function(){
    return "Shah Jahan"
};

console.log(annonymousFunc());

document.writeln("<h1> Shah Jahan Brohi </h1>");

let numArr = [1,2,3,4,5,6,7,8,9,10];

let tableFunc = () =>{
    document.writeln("<table border = '2px'> <tbody> ");


    numArr.forEach((val,key)=>{
        document.writeln("<tr> <td>" + val + "</td>" + "<td>" + key + "</td> </tr>" );
    })

    document.writeln("</table> </tbody>");
}

tableFunc();


let myName = "Shah Jahan Brohi Computer Science";

let cont = document.createElement("h1");
    document.writeln(myName);
    cont.style.backgroundColor = "yellow";
    cont.style.color = "red";
    cont.textContent = myName;
    document.body.appendChild(cont);

for (const char of myName) {
    document.writeln(char);
}


let array = [1,2,3,4,5,6,7,8,9,10];

document.writeln("<br> <br>For Each Loop <br><br>");

array.forEach((val,idx)=>{
    document.writeln(`Value : ${val} at Index : ${idx} `,"<br>");
});

document.writeln("<br> <br>For Each <br><br>");

for (const key of array) {
    document.writeln(`Value :  ${key} `,"<br>");
}

let mappedArr = array.map((ele)=>{
    return ele += 10;
})


document.writeln("<br> <br>Map <br><br>");

mappedArr.forEach((val,idx)=>{
    document.writeln(`Value : ${val} at Index : ${idx} `,"<br>");
});

let filteredArr = array.filter((ele)=>{
    return ele >= 5;
})


document.writeln("<br> <br>Filter <br><br>");

filteredArr.forEach((val,idx)=>{
    document.writeln(`Value : ${val} at Index : ${idx} `,"<br>");
});


document.writeln("<br> <br>Find <br><br>");

let foundFirstElement = array.find((ele)=>{
    return ele > 5; // will return the element that it gets for the first time, works from left to right
});

document.writeln(`I found this element : ${foundFirstElement}`);


document.writeln("<br> <br>Findlast <br><br>");
let foundLastElement = array.findLast((ele)=>{
    return ele > 5; // will return the element that it gets for the first time, works from right to left
});

document.writeln(`I found this element : ${foundLastElement}`);



document.writeln("<br> <br>Find Index <br><br>");
let foundFirstElementIdx = array.findIndex((ele)=>{
    return ele > 5; 
});

document.writeln(`I found this index : ${foundFirstElementIdx}`);


document.writeln("<br><br> Reduce <br><br>");

let sumOfArray = array.reduce((acc, curr)=>{
    return acc+curr;
},10)

document.writeln("Sum of the Array is : ", sumOfArray)


let headingCollection = document.getElementsByClassName("heading"); 

let headingNodelist = document.querySelectorAll(".heading"); 

let boxCollection = document.getElementsByClassName("box");

const balls = Array.from(boxCollection);

balls.forEach((ball)=>{
    ball.style.backgroundColor = "red"
});


let para = document.createElement("p");
let paraText = document.createTextNode("I am a newly created Paragraph using DOM...");
para.appendChild(paraText);
document.body.append(para)
