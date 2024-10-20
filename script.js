//your JS code here. If required.
// Get references to form elements
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');

    // Check if user data is saved in local storage on page load
    window.onload = function () {
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        existingButton.style.display = 'block'; // Show the 'Login as existing user' button
      }
    };

    // Handle form submission
    loginForm.onsubmit = function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      const username = usernameInput.value;
      const password = passwordInput.value;
      const rememberMe = rememberMeCheckbox.checked;

      // If 'Remember me' checkbox is checked, save details in localStorage
      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Remove any saved details from localStorage if checkbox is unchecked
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      // Display alert with login information
      alert(`Logged in as ${username}`);

      // Check if details are saved and show 'Login as existing user' button
      if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'block';
      }
    };

    // Handle login as existing user
    existingButton.onclick = function () {
      const savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
    };