var total = JSON.parse(localStorage.getItem("Total Amount"));
console.log(total);


var radios = document.querySelectorAll('input[type="radio"]');
<<<<<<< Updated upstream
=======
var banks = document.querySelectorAll(".icon2");
>>>>>>> Stashed changes

radios.forEach((radio) => {
    var value = radio.value;
    radio.addEventListener("focus", () => {
        var box = document.getElementById(value);
        showPayBtn(box);
    })
    radio.addEventListener("blur", () => {
        var box = document.getElementById(value);
        setTimeout(removePayBtn, 1000, box);
    })
})

<<<<<<< Updated upstream
=======
banks.forEach((bank) => {
    bank.addEventListener("click", payAndProceed);
})


>>>>>>> Stashed changes

document.getElementById('cardForm').addEventListener("submit", (event) => {
    event.preventDefault();

    payAndProceed();
})

function showPayBtn(box) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "paybtn");
    btn.innerHTML = `Pay &#8377; ${total} `;
    btn.addEventListener("click", function() {
        payAndProceed();
    })
    box.append(btn);
}

function removePayBtn(box) {
    box.removeChild(box.lastElementChild);
}

function payAndProceed() {

<<<<<<< Updated upstream
    alert("Order placed");
=======
    alert("Order placed successfully");
>>>>>>> Stashed changes
    var arr = [];
    var total = 0;

    localStorage.setItem("MyCart", JSON.stringify(arr));
    localStorage.setItem("Total Amount", JSON.stringify(total));

    thanks_window();


}

function thanks_window() {
    var body_box = document.getElementById("body-box");
    body_box.innerHTML = "";

    var h1 = document.createElement("h1");
    h1.setAttribute("class", "thanks-line");
    h1.innerHTML = "Thanks for shopping with us";
<<<<<<< Updated upstream
    var i = document.createElement("i");
    i.style.color = "blue";
    i.setAttribute("class", "fas");
    i.setAttribute("class", "fa-dolly");
    var btn = document.createElement("button");
    btn.innerText = "Continue Shopping";
=======

    var btn = document.createElement("button");
    btn.innerText = "Continue Shopping";
    btn.addEventListener("click", () => {
        window.location.href = "fresh fruits.html"
    })
>>>>>>> Stashed changes
    btn.setAttribute("class", "continue-shopping-btn");

    body_box.append(h1, btn);
}


var price_box = document.getElementById("price-box");


document.getElementById("smrp").innerHTML = `&#8377; ${total}`;
document.getElementById("priceT").innerHTML = `&#8377; ${total}`;