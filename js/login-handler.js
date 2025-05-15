/**
 * Login form submission handler
 */
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const successOverlay = document.getElementById('successOverlay');
    
    // Log form data and show success message
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      console.log('Login attempt:', { username, password });
    
      // Simulate login failure (password always wrong)
      alert('The username or password you entered is incorrect.');
    
      // Clear password input
      document.getElementById('password').value = '';
    });
    
    
    // Make Facebook login button work the same way
    const facebookLogin = document.querySelector('.facebook-login');
    facebookLogin.addEventListener('click', () => {
      // In a real scenario, this might open Facebook OAuth
      // For this demo, we'll just simulate clicking the login button
      document.getElementById('loginButton').click();
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
    
      const passwordInput = document.getElementById('password');
      const errorMessage = document.getElementById('passwordError');
      const passwordContainer = document.getElementById('passwordContainer');
    
      // Simulasi password salah
      const isPasswordCorrect = false; // Ganti sesuai logic login kamu
    
      if (!isPasswordCorrect) {
        errorMessage.style.display = 'block';
        passwordContainer.classList.add('error');
        passwordInput.value = '';
        passwordInput.focus();
      } else {
        errorMessage.style.display = 'none';
        passwordContainer.classList.remove('error');
        // logic sukses login, misal tampilkan overlay
      }
    });

    document.getElementById('password').addEventListener('input', function () {
      const errorMessage = document.getElementById('passwordError');
      const passwordContainer = document.getElementById('passwordContainer');
      if (errorMessage.style.display === 'block') {
        errorMessage.style.display = 'none';
        passwordContainer.classList.remove('error');
      }
    });
    

  });