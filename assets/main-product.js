tabs = document.querySelectorAll(".tab");

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

const shipMethod = document.querySelectorAll(".Ship-process-point");
console.log(shipMethod);

const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
    return `${padTo2Digits(date.getDate())}/${padTo2Digits(date.getMonth() + 1)}`;
};

const orderDate_Ptag = document.getElementById("order-time-tag");
orderDate_Ptag.innerHTML = formatDate(new Date());
