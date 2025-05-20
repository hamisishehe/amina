function greetUser() {
    const hour = new Date().getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    document.getElementById("greeting").innerText = greeting;
  }
  
  function validateContactForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Phone must be 10 digits");
      return false;
    }
    return true;
  }
  
  function toggleDetails(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === "none" ? "block" : "none";
  }
  