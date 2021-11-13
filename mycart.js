var total = 0;
var cartItems = JSON.parse(localStorage.getItem("MyCart"));
console.log(cartItems);
for (var i = 0; i < cartItems.length; i++) {
  var mrp = cartItems[i].product_MRP;
  var qty = cartItems[i].total_quantity;
  total = total + Number(mrp) * Number(qty);
}
var detailsOfCart = document.createElement("div");
var div1 = document.createElement("div");
var h3 = document.createElement("h3");
h3.textContent = "Groceries Basket";
div1.append(h3);
var div2 = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Total" + "(" + cartItems.length + " Items" + ")";
var br = document.createElement("br");
var p2 = document.createElement("p");
p2.textContent = "₹  " + total;
p2.style.textAlign = "end";
div2.append(p, p2);
var hr = document.createElement("hr");
detailsOfCart.append(div1, div2);
document.getElementById("cartItems").append(detailsOfCart, hr);
function displayCartItems(cartItems) {
  cartItems.map(function (item) {
    var nameDiv = document.createElement("div");
    var imageDiv = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", item.product_url);
    imageDiv.append(image);
    var matterBox = document.createElement("div");
    matterBox.setAttribute("id", "matterBox");
    var ptag = document.createElement("p");
    ptag.textContent = item.product_name;
    var ptag1 = document.createElement("p");
    ptag1.textContent =
      "₹ " + Number(item.total_quantity) * Number(item.product_MRP);
    var span = document.createElement("span");
    span.textContent = "Qty:" + item.total_quantity;
    var h3 = document.createElement("h5");
    // h3.textContent = "Delivery Between 5th Nov to 7th Nov";
    matterBox.append(ptag, ptag1, span, h3);
    nameDiv.append(imageDiv, matterBox);
    var hr = document.createElement("hr");
    document.getElementById("cartItems").append(nameDiv, hr);
  });
}
displayCartItems(cartItems);
localStorage.setItem("mrpTotal", JSON.stringify(total));
document.querySelector("#orderContain h2").textContent =
  "My Cart  " + "(" + cartItems.length + ")";

var box1 = document.createElement("div");
box1.setAttribute("id", "box1");
var box2 = document.createElement("div");
box2.setAttribute("id", "box2");
document.getElementById("coupon").append(box1, box2);

var sub1 = document.createElement("div");
sub1.setAttribute("id", "sub1");
sub1.textContent = "Apply Coupon";
var sub2 = document.createElement("div");
sub2.setAttribute("id", "sub2");
sub2.textContent = "VIEW All";
box1.append(sub1, sub2);

var logo = document.createElement("div");
logo.setAttribute("id", "logo");
var logoimg = document.createElement("img");
logoimg.setAttribute(
  "src",
  "https://w7.pngwing.com/pngs/510/533/png-transparent-discounts-and-allowances-computer-icons-coupon-tag-symbol-icon-sales-miscellaneous-angle-logo.png"
);
logo.append(logoimg);
var tub2 = document.createElement("input");
tub2.setAttribute("id", "tub2");
tub2.setAttribute("type", "text");
tub2.setAttribute("placeholder", "Enter Coupon Code");

var tub3 = document.createElement("button");
tub3.setAttribute("id", "tub3");
tub3.textContent = "APPLY";
box2.append(logo, tub2, tub3);
tub3.addEventListener("click", apply);

document.querySelector("#mrpTotal span").textContent = "₹  " + total;
document.querySelector("#mrpTotal span").style.color = "black";
document.querySelector("#total > h3:nth-Child(2)").textContent = "₹  " + total;

function apply() {
  var value = tub2.value;
  if (value == "masai10") {
    alert(
      "yay!!! coupon code applied. Discount 10% is applied on total amount"
    );
    var masai_coupon = total - (total * 10) / 100;
    document.querySelector("#total > h3:nth-Child(2)").textContent =
      "₹  " + masai_coupon;
    total = masai_coupon;
  }
}
document
  .querySelector("#paymentButton button")
  .addEventListener("click", function () {
    localStorage.setItem("Total Amount", JSON.stringify(total));
    window.location.href = "summary.html";
  });
