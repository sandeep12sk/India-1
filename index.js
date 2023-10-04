function login(){
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
   if(email.value ==="admin@admin.com" && pass.value === "123456"){
       alert("Login successful");
   }else{
       alert("Incorrect email or password");
   }

}