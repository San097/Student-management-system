
// const sign_up_btn = document.getElementById('sign_up_btn');
// const sign_in_btn = document.getElementById('sign_in_btn');
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signUp');

// sign_up_btn.addEventListener('click',function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// })
// sign_in_btn.addEventListener('click', function(){
//     signInForm.style.display="block";
//     signUpForm.style.display="none";
// })



// const sign_up_btn = document.getElementById('sign-up-btn');
// const sign_in_btn = document.getElementById('sign-in-btn');
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signUp');

// sign_up_btn.addEventListener('click',function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// })
// sign_in_btn.addEventListener('click', function(){
//     signInForm.style.display="block";
//     signUpForm.style.display="none";
// })



const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});



// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener('click', () =>{
//     container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener('click', () =>{
//     container.classList.remove("sign-up-mode");
// });
