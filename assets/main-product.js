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
    dateReceived2.setDate(dateReceived2.getDate() + arr[1]);

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

selectMethod.onchange = (e) => {
    handleShipMethod(e.target.value);
};

orderDate_Ptag.innerHTML = formatDate(new Date());
handleDateTag([2, 4]);

const quantitySelect = document.getElementById("ProductQuantity");
const quantityTableCount = document.getElementById("quantity-table-count");

const QuantityInputMain = document.querySelector('.quantity__input[name="quantity"]');
quantitySelect.onchange = (e) => {
    QuantityInputMain.value = e.target.value;
    quantityTableCount.innerHTML = `Buy ${e.target.value} item${e.target.value === 1 ? "" : "s"}`;
};

const quantityTablePrice = document.getElementById("quantity-table-price");
quantityTablePrice.innerHTML = `${meta.product.variants[0].price / 100} ${Shopify.currency.active}`;

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const variantButtons = document.querySelectorAll(".product__info-container variant-radios label");
const variantButtonsArr = Array.from(variantButtons);
variantButtonsArr.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("hehe");
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("variant");
        if (myParam) {
            const data = meta.product.variants.find((item) => item.id === myParam);
            if (data) quantityTablePrice.innerHTML = `${data.price / 100} ${Shopify.currency.active}`;
        }
    });
});
