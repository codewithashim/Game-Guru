const logoutUser = () => {
  fetch("/auth/logout", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        // Successful logout, redirect to the home page or perform any other desired action
        console.log("Logout successful");
        window.location.href = "/";
      } else {
        return response.text().then((error) => {
          console.log("Logout failed:", error);
        });
      }
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
};

// Function to update the login/logout buttons based on the user's login status
const updateNavButtons = () => {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (isLoggedIn()) {
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
  } else {
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
  }
};

const isLoggedIn = () => {
  // Here's a placeholder implementation:
  const userId = sessionStorage.getItem("userId");
  return userId !== null;
};

// Function to get the user's ID
const getUserId = () => {
  // Here's a placeholder implementation:
  return sessionStorage.getItem("userId");
};

// Logout functionalityreq.accepts(types);

const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", logoutUser);

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => {
  window.location.href = "/login";
});
