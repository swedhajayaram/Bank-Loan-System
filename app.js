function register(){
let user={
name:name.value,
email:email.value,
password:password.value
};
localStorage.setItem("user",JSON.stringify(user));
alert("Registration Successful");
location.href="login.html";
}

function login(){
let u=JSON.parse(localStorage.getItem("user"));
if(loginEmail.value===u.email && loginPassword.value===u.password){
let otp=Math.floor(1000+Math.random()*9000);
sessionStorage.setItem("otp",otp);
alert("OTP: "+otp);
location.href="otp.html";
}else alert("Invalid Login");
}

function verifyOTP(){
if(otpInput.value===sessionStorage.getItem("otp")){
sessionStorage.setItem("login","true");
location.href="dashboard.html";
}else alert("Wrong OTP");
}

function logout(){
sessionStorage.clear();
location.href="login.html";
}

function applyLoan(type){
sessionStorage.setItem("loanType",type);
location.href="loan.html";
}

window.onload=function(){
let title=document.getElementById("loanTitle");
if(title){
title.innerText="Apply for "+sessionStorage.getItem("loanType");
}
}

function submitLoan(){
alert("Loan Application Submitted Successfully!");
location.href="dashboard.html";
}
