fetch("../common/header.html")
  .then((Response)=>Response.text())
  .then((data)=>{
	document.getElementById("header").innerHTML=data;
  });

  fetch("../common/footer.html")
  .then((Response)=>Response.text())
  .then((data)=>{
	document.getElementById("footer").innerHTML=data;
  });

  fetch("../common/home.html")
  .then((Response)=>Response.text())
  .then((data)=>{
	document.getElementById("home").innerHTML=data;
  });
  fetch("../common/featured-product.html")
  .then((Response)=>Response.text())
  .then((data)=>{
	document.getElementById("featured-product").innerHTML=data;
  });
 
   