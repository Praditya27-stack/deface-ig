// login-handler.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) {
    console.error("Form dengan ID 'loginForm' tidak ditemukan.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await window.db.collection("users").add({
        username,
        password,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      document.getElementById("successOverlay").style.display = "block";

    } catch (error) {
      console.error("Error saving to Firestore:", error);
      alert("Login failed. Please try again.");
    }
  });
});
