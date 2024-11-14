function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    // Regular expression for validating email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    // Check if fields are empty
    if (!name || !email) {
      errorMessage.textContent = "Please fill out all fields.";
      return false;
    }
  
    // Check if email format is valid
    if (!email.match(emailPattern)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return false;
    }
  
    // Clear the error message if everything is valid
    errorMessage.textContent = "";
    alert("Subscription successful!");
    return true;
  }
  