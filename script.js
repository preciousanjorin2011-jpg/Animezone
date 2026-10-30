
const searchBox = document.getElementById("searchBox");

const animeCards = document.querySelectorAll(".anime-card");

const noResults = document.getElementById("noResults");


searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();
    let visibleCount = 0;

    animeCards.forEach(function (card) {

        const animeName = card
            .querySelector(".card-title")
            .textContent.toLowerCase();

        if (animeName.includes(searchText)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    noResults.hidden = visibleCount !== 0;

});

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const animeName = button.dataset.name;

        alert(
            "You selected " + animeName +
            "! Anime details can be added here."
        );

    });

});