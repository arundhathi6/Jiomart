var delivery = JSON.parse(localStorage.getItem("DeliveryAddress")) || "";
var selectedAddress = JSON.parse(localStorage.getItem("savedAddresses"));
if (delivery.length == 0) {
  var anchor = document.createElement("a");
  anchor.setAttribute("href", "address.html");
  var anchorDiv = document.createElement("div");
  anchorDiv.textContent = "+ Add Address";
  anchor.append(anchorDiv);
  anchorDiv.setAttribute("id", "addAddress");
  // anchorDiv.addEventListener("click", add);
  document.getElementById("wholeDiv").append(anchor);
} else {
  console.log(delivery);
  var arr = delivery.split(",");
  selectedAddress.map(function (item) {
    if (item.houseNo == delivery) {
      var mainDiv = document.createElement("div");
      var innerDiv = document.createElement("div");
      innerDiv.setAttribute("id", "typeOfAddress");
      var h3 = document.createElement("h3");
      h3.textContent = item.Name;
      var h4 = document.createElement("h4");
      h4.textContent = item.saveAs;
      innerDiv.append(h3, h4);
      var p1 = document.createElement("span");
      p1.textContent = item.houseNo + ",";
      var p2 = document.createElement("span");
      p2.textContent = item.floorNo + ",";
      var p3 = document.createElement("span");
      p3.textContent = item.towerNo + ",";
      var p4 = document.createElement("span");
      p4.textContent = item.buildingName + ",";
      var p5 = document.createElement("span");
      p5.textContent = item.address + ",";
      var p6 = document.createElement("span");
      p6.textContent = item.area + ",";
      var p7 = document.createElement("span");
      p7.textContent = item.city + "-" + item.pinCode + "," + item.state + ",";
      var p8 = document.createElement("span");
      p8.textContent = item.phoneNumber;
      if (item.floorNo == "" && item.towerNo == "") {
        mainDiv.append(innerDiv, p1, p4, p5, p6, p7, p8);
      } else if (item.towerNo == "") {
        mainDiv.append(innerDiv, p1, p2, p4, p5, p6, p7, p8);
      } else if (item.floorNo == "") {
        mainDiv.append(innerDiv, p1, p3, p4, p5, p6, p7, p8);
        // console.log("Yes");
      } else {
        mainDiv.append(innerDiv, p1, p2, p3, p4, p5, p6, p7, p8);
        // console.log("Yes");
      }
      document.getElementById("wholeDiv").append(mainDiv);
    }
  });
  var spanDiv = document.createElement("div");
  var span = document.createElement("label");
  span.textContent = "Default Address";
  spanDiv.append(span);
  spanDiv.setAttribute("id", "default");
  document.getElementById("addressBox").append(spanDiv);
  var buttonBox = document.createElement("div");
  var changingButton = document.createElement("button");
  changingButton.textContent = "Change/Add Address";
  changingButton.addEventListener("click", changeAddress);
  buttonBox.append(changingButton);
  document.getElementById("buttonBox").append(buttonBox);
  document.querySelector("#wholeDiv > div:nth-Child(1)").style.paddingTop =
    "20px";
}
function changeAddress() {
  window.location.href = "address.html";
}
var total = 0;
var cartItems = JSON.parse(localStorage.getItem("MyCart"));
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
    h3.textContent = "Delivery Between 5th Nov to 7th Nov";
    matterBox.append(ptag, ptag1, span, h3);
    nameDiv.append(imageDiv, matterBox);
    var hr = document.createElement("hr");
    document.getElementById("cartItems").append(nameDiv, hr);
  });
}
displayCartItems(cartItems);
var totalAmount = JSON.parse(localStorage.getItem("Total Amount"));
console.log(totalAmount);
console.log(total);
if (total == totalAmount) {
  document.querySelector("#mrpTotal span").textContent = "₹  " + total;
  document.querySelector("#mrpTotal span").style.color = "black";
  document.querySelector("#total > h3:nth-Child(2)").textContent =
    "₹  " + total;
} else {
  document.querySelector("#mrpTotal span").textContent = "₹  " + total;
  document.querySelector("#mrpTotal span").style.color = "black";
  var hr = document.createElement("hr");
  var p = document.createElement("p");
  p.textContent = "Product Discount";
  var span = document.createElement("span");
  span.textContent = "-₹ " + (total * 10) / 100;
  document.getElementById("productDiscount").append(p, span);
  document.querySelector("#mrpTotal ~ div span").style.color = "black";
  document.querySelector("#total > h3:nth-Child(2)").textContent =
    "₹  " + (total - (total * 10) / 100);
  var p1 = document.createElement("p");
  p1.textContent = "You saved" + " ₹" + (total * 10) / 100;
  document.getElementById("total").append(p1);
}

function makePayment() {
  window.location.href = "payment.html";
}
