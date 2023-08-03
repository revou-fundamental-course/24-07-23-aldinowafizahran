function validateForm() {
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("interestError").innerText = "";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const interest = document.getElementById("interest").value;

  if (name == "") {
    document.getElementById("nameError").innerText = "Name is required.";
    return false;
  }

  if (email == "") {
    document.getElementById("emailError").innerText = "Email is required.";
    return false;
  }

  if (interest == "") {
    document.getElementById("interestError").innerText = "Please select an option.";
    return false;
  }
  return true;
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}
