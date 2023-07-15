{
    const welcome = () => {
        console.log("Witam Was serdecznie!");
    };

    welcome();

    const init = () => {
        const przycisk = document.querySelector(".przycisk");
        const zdjecie = document.querySelector(".zdjecie");

        przycisk.addEventListener("click", () => {
            zdjecie.remove();
        });
    };

    init();
}