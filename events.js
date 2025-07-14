let nameShah= document.querySelector("#nameHeading")

nameShah.addEventListener("click" ,() => {
    nameShah.style.color = "green";
})


let inp = document.querySelector("input");

inp.addEventListener("input" , (data)=>{
    if (data.data != null) {
        console.log(data.data);
        
    }
})

let phone = document.querySelector(".phone");

document.querySelector("select").addEventListener("change" , (data)=>{
    let selectedPhone = data.target.value;
    phone.innerHTML = `You selected : ${selectedPhone}`
    console.log(data);
    
});

let txt = document.querySelector(".typedText");

window.addEventListener("keydown" , (data)=> {
    if (data.key === "") {
        txt.textContent = "SPC"
    } else {
        txt.textContent = data.key
    }
    //  console.log(data.key);
    
});



// let fileInp = document.querySelector("#fileInp");

// let btnInp = document.querySelector("#btnInp");

// btnInp.addEventListener("click", ()=>{
//     fileInp.click();
//     // btnInp.textContent = "Uploaded"
// });

// fileInp.addEventListener("change", (data)=>{
//     console.log(data);
//     // btnInp.textContent = data.target.files[0].name // '?' for optional chaining, if you cancel uploading any file, it won't throw any error...

//     let file = data.target.files[0]
//     if(file){
//     btnInp.textContent = file.name
//     }
// });

let cardHeading = document.querySelector(".cardHeading");
let nameHeading = document.querySelector(".nameHeading");
let ageHeading = document.querySelector(".ageHeading");
let emailHeading = document.querySelector(".emailHeading");
let userImg = document.querySelector(".userImg");
//  userImg.src="profile.jpeg"


let form = document.querySelector("form")

form.addEventListener("change", (data)=>{
    // console.log(data.target.value);
    // cardHeading.textContent = data.value
    // console.log(data.srcElement.attributes.type.value);
    console.log(data);
    
});

let inputs = document.querySelectorAll("input");

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    console.log(inputs);
    
    console.log(inputs[0].value);
    
    let name  = inputs[0].value
    let age = inputs[1].value
    let email = inputs[2].value
    let img = inputs[3].value

    console.log(name);
    console.log(age);
    console.log(email);
    console.log(`Image Link : ${img}`);
    

    nameHeading.textContent = `Name : ${name}`
    ageHeading.textContent =`Age : ${age}`
    emailHeading.textContent = `Email : ${email}`
    userImg.src = `Profile : ${img}`
});


