document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById("firstName").value;
    if (firstName.trim() === "") {
      isValid = false;
      document.getElementById("firstNameError").style.display = "inline";
    } else {
      document.getElementById("firstNameError").style.display = "none";
    }

    // Validate Last Name
    const lastName = document.getElementById("lastName").value;
    if (lastName.trim() === "") {
      isValid = false;
      document.getElementById("lastNameError").style.display = "inline";
    } else {
      document.getElementById("lastNameError").style.display = "none";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById("emailError").style.display = "inline";
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password.trim() === "") {
      isValid = false;
      document.getElementById("passwordError").style.display = "inline";
    } else {
      document.getElementById("passwordError").style.display = "none";
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password || confirmPassword.trim() === "") {
      isValid = false;
      document.getElementById("confirmPasswordError").style.display = "inline";
    } else {
      document.getElementById("confirmPasswordError").style.display = "none";
    }

    // Validate Age
    const age = document.getElementById("age").value;
    if (isNaN(age) || age.trim() === "") {
      isValid = false;
      document.getElementById("ageError").style.display = "inline";
    } else {
      document.getElementById("ageError").style.display = "none";
    }

    // Validate Phone Number
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      isValid = false;
      document.getElementById("phoneNumberError").style.display = "inline";
    } else {
      document.getElementById("phoneNumberError").style.display = "none";
    }

    // Validate Address
    const address = document.getElementById("address").value;
    if (address.trim() === "") {
      isValid = false;
      document.getElementById("addressError").style.display = "inline";
    } else {
      document.getElementById("addressError").style.display = "none";
    }

    // Validate State
    const state = document.getElementById("state").value;
    if (state.trim() === "") {
      isValid = false;
      document.getElementById("stateError").style.display = "inline";
    } else {
      document.getElementById("stateError").style.display = "none";
    }

    // If the form is valid, submit it
    if (isValid) {
      alert("Form submitted successfully!");
      // You can add code here to submit the form data to the server
    }
  });
