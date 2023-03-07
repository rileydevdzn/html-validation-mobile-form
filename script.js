//Allow user to view password while typing
let pw = document.getElementById("pw");
let viewpw = document.getElementById("view-pw");
pw.oninput = function(event) {
  viewpw.textContent = pw.value;
}

//Combine HTML5 inline validation with Constraint Validation API for customizable error messages
const inputs = document.querySelectorAll(".input");
for (const input of inputs) {
  input.addEventListener("input", () => {
    input.setCustomValidity("");
    input.checkValidity;
  })
  input.addEventListener("invalid", () => {
    let validity = input.validity;
    if (validity.valueMissing) {
      if (input.matches(".name")) {
      input.setCustomValidity("Name cannot be blank");
      };
      if (input.matches(".email")) {
      input.setCustomValidity("Email cannot be blank");
      };
      if (input.matches(".pw")) {
      input.setCustomValidity("Password cannot be blank");
      };
    };
    if (validity.patternMismatch) {
      input.setCustomValidity(input.getAttribute("title"));
    };
  })
};