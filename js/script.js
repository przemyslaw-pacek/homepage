{
    const welcome = () => {
        console.log("Witam Was serdecznie!");
    };

    welcome();

    const button = () => {
        const przycisk = document.querySelector(".przycisk");
        const zdjecie = document.querySelector(".zdjecie");

        przycisk.addEventListener("click", () => {
            zdjecie.remove();
        });
    };

    button();
}
