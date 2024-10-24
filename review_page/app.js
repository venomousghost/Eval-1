function previewProfileImage(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function() {
          const output = document.getElementById('profileImage');
          output.src = reader.result;
          output.style.width = '150px';
          output.style.height = '150px'; 
          output.style.objectFit = 'cover'; 
      };
      reader.readAsDataURL(file);
  } else {
      console.error("No file selected or file is invalid.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const age = document.getElementById("age").value.trim();
      const email = document.getElementById("email").value.trim();
      const achievements = document.getElementById("achievements").value.trim();
      const favoriteGame = document.getElementById("favoriteGame").value.trim();

      // Basic validation
      if (!firstName || !lastName || !email) {
          alert("Please fill out all required fields.");
          return;
      }

      // Update display
      document.querySelector(".gamer-name").innerText = `${firstName} ${lastName}`;
      document.querySelector(".gamer-email").innerText = email;

      // Log data
      console.log(`Age: ${age}`);
      console.log(`Achievements: ${achievements}`);
      console.log(`Favorite Game: ${favoriteGame}`);

      // Clear input fields
      form.reset();
  });
});
