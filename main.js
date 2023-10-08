// script.js
document.addEventListener("DOMContentLoaded", function () {
    const mainSection = document.querySelector("main");
    const changeTextButton = document.getElementById("changeTextButton");

    changeTextButton.addEventListener("click", function () {
        mainSection.innerHTML = "<h2>Texto Alterado</h2><p>Este é o novo conteúdo da seção principal.</p>";
    });
});
