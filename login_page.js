const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// function fun() {
//   var id= document.getElementById("user_id").value;
//   var pass=document.getElementById("password").value;
 
//    if (id=="hari" && pass=="radhe" || id=="user" && pass=="admin" ||id=="ajay" && pass=="sharma")
//     {
//      window.open("first1_page.html","_self");
 
//  }
//  else if(id==""||pass==""){
//    alert("please fill the  details");

//  }
//  else {
//    alert("wrong id or password");
 
//  }
// }