document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

// document.querySelector('.pop-image').addEventListener("click",() => {
//     document.querySelector('.pop-image').style.display = 'none';
// });

document.getElementById("form1").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Get the values of the password fields
    var password1 = document.getElementById("exampleInputPassword1").value;
    var password2 = document.getElementById("exampleInputPassword2").value;
  
    // Check if passwords match
    if (password1 !== password2) {
      // If passwords don't match, show an alert
      alert("Passwords do not match");
    } else {
      // If passwords match, proceed with form submission
      // Here you can submit the form using AJAX or simply let it proceed with its default action
      this.submit();
    }
  });
  document.getElementById("donationForm").addEventListener("submit", function(event) {
    console.log("e");
    // Prevent the form from submitting to another page
    event.preventDefault();

    // Update the content to display "Thanks for Contribution"
    var contactSection = document.getElementById("contact");
    contactSection.innerHTML = `
        <div class="container">
            <div class="heading">
                <h2>Thanks for Contribution</h2>
                <p>Your contribution has been received. Thank you for your generosity!</p>
            </div>
        </div>
    `;
    this.submit();
});