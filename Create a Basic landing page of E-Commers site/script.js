/* These lines select the HTML elements with the respective IDs (cloths, reviews, contacts, blogs, electronics) and store them in variables.*/
let cloths = document.getElementById("cloths");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let blogs = document.getElementById("blogs");
let electronics = document.getElementById("electronics")

/* This adds a click event listener to the cloths element. When the element is clicked, its text color changes to white, and the text color of the other elements (reviews, contacts, blogs, electronics) changes to black.*/
    /*Similar event listeners are added for reviews, contacts, blogs, and electronics: */
cloths.addEventListener("click",function(){
    cloths.style.color="white";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";
    electronics.style.color ="black";
})
reviews.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="white";
    contacts.style.color="black";
    blogs.style.color="black";
    electronics.style.color ="black";
})
contacts.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="white";
    blogs.style.color="black";
    electronics.style.color ="black";
})
blogs.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="white";
    electronics.style.color ="black";
})
electronics.addEventListener("click",function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";
    electronics.style.color ="white";
})

/*Selects the element with the ID login. When this element is clicked, it sets the display style of the element with the class loginPage to block, making it visible. */

let login = document.getElementById("login");

login.addEventListener("click",function(){
    let loginPage = document.querySelector(".loginPage").style.display="block";
    
})

/*Selects the element with the ID loged. When this element is clicked, it checks if the email and password fields are empty. If either is empty, it shows an alert. If both fields are filled, it shows a "You Logged In" alert and hides the login page by setting its display style to none. */

let loged = document.getElementById("loged");
loged.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass  = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password");
    }else{
        alert("You Loged In");
        loginPage = document.querySelector(".loginPage").style.display="none";
    }
})

/*Selects the element with the ID submit. When this element is clicked, it retrieves the values of the name and password fields. If either field is empty, it shows an alert. If both fields are filled, it shows a "Thanks for connecting" alert. */
let submit = document.getElementById("submit");

submit.addEventListener("click",function(){
  let names = document.getElementById("name");
  let Password = document.getElementById("pass");
  console.log(names.value);

  if(names.value == "" || Password == ""){
    alert("Please Enter Name And Password")
  }else{
    alert("Thanks for connecting")
    
  }

})

/*
Selects all image elements within the .banner ul using querySelectorAll and stores them in the imgs variable.
Selects the previous and next buttons using their respective classes.
Initializes a variable n to 1, which keeps track of the current slide index.
Defines a function changeSlide that hides all images and then displays the image at index n.
Calls changeSlide to set the initial slide.
Adds click event listeners to the previous and next buttons. When clicked, these listeners update the slide index n and call changeSlide to show the appropriate slide.
*/
let imgs = document.querySelectorAll(".banner ul img");
let prev_btn = document.querySelector(".control_prev");
let next_btn = document.querySelector(".control_next");

let n = 1;
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";     

    }
    imgs[n].style.display = "block"; 

}
changeSlide();


prev_btn.addEventListener("click",(e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener("click",(e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

















