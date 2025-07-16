let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");



form.addEventListener("submit", (event)=>{
    event.preventDefault();

   console.log(inputs);
    
    console.log(event);
    
    let card = document.createElement("div");
    card.classList.add("card")


    let profile = document.createElement("div");
    profile.classList.add("profile");
   

    let img = document.createElement("img");
    img.setAttribute("src" , inputs[0].value);
    profile.appendChild(img);
    card.appendChild(profile);


    let occupation = document.createElement("h2");
    occupation.textContent = inputs[1].value;
    card.appendChild(occupation);


    let bio = document.createElement("p");
    bio.textContent = inputs[2].value;
    card.appendChild(bio);



    
    document.body.appendChild(card);


    inputs.forEach((data)=>{
        if (data.type !== "submit") {
            data.value = ""
        }
    })
})


