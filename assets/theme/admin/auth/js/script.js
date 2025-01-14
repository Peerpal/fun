const loginBtn = document.querySelector('.btn-login');
const form = document.querySelector("form");

loginBtn.addEventListener("click", event => {
  event.preventDefault();
  const fields = [...document.querySelectorAll(".input-field input")]
  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error")
  });

  const errorValidation = document.querySelector(".validate-error");
  if (errorValidation) {
    errorValidation.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        errorValidation.classList.remove("validate-error");
      }
    });
  } else {
    form.submit();
  }
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden"
  }
})

form.addEventListener("animationend", () => {
  if (event.animationName === "down")
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none"

});

const randomIcons = document.querySelector("ul.squares")

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");
  let i = document.createElement("i");
  i.classList.add("far")
  i.classList.add("fa-envelope")
  const random = (min, max) => Math.random() * (max - min) + min
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  li.style.bottom = `-${size}px`
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`;
  li.appendChild(i)
    opacity: 0;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}, )`

  randomIcons.appendChild(li);

}