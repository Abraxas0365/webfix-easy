    // Grab elements
    const showPass = document.getElementById("showpass");
    const password = document.getElementById("password");
    const loginBtn = document.getElementById("login");
    const username = document.getElementById("username");
    const history = document.getElementById("history");
    const clearBtn = document.getElementById("clear");


    // Toggle password visibility
    showPass.addEventListener("change", () => {
      password.type = showPass.checked ? "text" : "password";
    });

    // Handle login
    loginBtn.addEventListener("click", () => {

      const user = username.value;
      const pass = password.value;

      if (!user || !pass) {
        alert("Please enter both username and password.");
        return;
      }

      // Add login record
      const now = new Date().toLocaleString();
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${user}</h3>
        <p>Last login: ${now}</p>
      `;
      history.prepend(card);

      // Reset form
      username.value = "";
      password.value = "";
      showPass.checked = false;
      password.type = "password";
    });

    // Clear history
    clearBtn.addEventListener("click", () => {
        history.innerHTML = "";
        setTimeout(() => {
        alert("Login history cleared.");
        }, 1);
    });