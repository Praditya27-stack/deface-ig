
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.getElementById('showPassword');
    
    showPasswordButton.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.textContent = 'Hide';
      } else {
        passwordInput.type = 'password';
        showPasswordButton.textContent = 'Show';
      }
      
     
      passwordInput.focus();
    });
    
   
    passwordInput.addEventListener('input', () => {
      if (passwordInput.value.length > 0) {
        showPasswordButton.style.display = 'block';
      } else {
        showPasswordButton.style.display = 'none';
      }
    });
    
    if (passwordInput.value.length === 0) {
      showPasswordButton.style.display = 'none';
    }
  });