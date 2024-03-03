const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const username = e.target.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    console.log("good");
  } else {
    console.log("no");
  }
});
