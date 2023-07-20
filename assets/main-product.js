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

const orderDate_Ptag = document.getElementById("order-time-tag");
const deliveryDate_Ptag = document.getElementById("delivery-time-tag");

const shipMethod = document.querySelectorAll(".Ship-process-point");

const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
    return `${padTo2Digits(date.getDate())}/${padTo2Digits(date.getMonth() + 1)}`;
};

const handleDateTag = (arr) => {
    const dateReceived1 = new Date();
    const dateReceived2 = new Date();

    dateReceived1.setDate(dateReceived1.getDate() + arr[0]);
    dateReceived2.setDate(dateReceived1.getDate() + arr[1]);

    deliveryDate_Ptag.innerHTML = `${formatDate(dateReceived1)} - ${formatDate(dateReceived2)}`;
};

const handleShipMethod = (tag) => {
    orderDate_Ptag.innerHTML = formatDate(new Date());
    switch (tag) {
        case "FastShip": {
            handleDateTag([2, 4]);
        }
        case "StandardShip": {
            handleDateTag([5, 7]);
        }
    }
};

const selectMethod = document.getElementById("ShipMethod");
console.log(selectMethod);

selectMethod.onchange((e) => {
    console.log(e, e.target.value);
});
