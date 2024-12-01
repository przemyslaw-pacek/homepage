{
  const welcome = () => {
    console.log("Witam Was serdecznie!");
  };

  welcome();

  const toogleBackground = () => {
    const body = document.body;
    const themeName = document.querySelector(".themeName");
    const sectionDark = document.querySelector(".section--dark");

    body.classList.toggle("dark");
    sectionDark.classList.toggle("bright");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  };

  const button = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", toogleBackground);
  };

  button();
}
