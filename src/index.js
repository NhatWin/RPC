const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener(
    "click",

    // Callback function
    function (event) {
      console.log(event.target.innerText);
    }
  );
});
