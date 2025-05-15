/**
 * Form validation functionality
 */
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    
    // Function to validate form and enable/disable login button
    function validateForm() {
      const usernameValue = usernameInput.value.trim();
      const passwordValue = passwordInput.value.trim();
      
      // Basic validation - both fields must have a value
      if (usernameValue.length > 0 && passwordValue.length > 0) {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    }
    
    // Add focus class to input container when input is focused
    const addFocusClass = (input) => {
      const container = input.closest('.input-container');
      container.style.border = '1px solid #a8a8a8';
    };
    
    // Remove focus class from input container when input loses focus
    const removeFocusClass = (input) => {
      const container = input.closest('.input-container');
      container.style.border = '1px solid #dbdbdb';
    };
    
    // Event listeners for form validation
    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    
    // Event listeners for input focus
    usernameInput.addEventListener('focus', () => addFocusClass(usernameInput));
    usernameInput.addEventListener('blur', () => removeFocusClass(usernameInput));
    passwordInput.addEventListener('focus', () => addFocusClass(passwordInput));
    passwordInput.addEventListener('blur', () => removeFocusClass(passwordInput));
    
    // Initial validation
    validateForm();
  });