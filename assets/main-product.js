tabs = document.querySelectorAll(".tab");

console.log("hehehehe");
tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        contentId = this.dataset.contentId;
        content = document.getElementById(contentId);

        tabContents.forEach(function (content) {
            content.classList.remove("active");
        });

        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });

        this.classList.add("active");
        content.classList.add("active");
    });
});

const shipMethod = document.querySelector("#ShipMethod");
console.log(shipMethod.value, "hehe");
