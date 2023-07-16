{
    const welcome = () => {
        console.log("Witam Was serdecznie!");
    };

    welcome();

    const toogleBackground = () => {
        const body = document.body;
        const themeName = document.querySelector(".themeName");
        
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const button = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toogleBackground);
    };

    button();
}