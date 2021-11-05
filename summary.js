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
  document.getElementById("addressBox").append(anchor);
} else {
  // var div = document.createElement("div");
  // div.textContent = delivery;
  // console.log(div.textContent);
  // document.getElementById("addressBox").append(div);
  // console.log(delivery);
  var arr = delivery.split(",");
  console.log(arr);
  selectedAddress.filter(function (item) {
    if (item.houseNo == arr[5]) {
      var displayAddress = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "radio");
      var mainDiv = document.createElement("div");
      var innerDiv = document.createElement("div");
      innerDiv.setAttribute("id", "typeOfAddress");
      var h3 = document.createElement("h3");
      h3.textContent = item.Name;
      var h4 = document.createElement("h4");
      h4.textContent = item.saveAs;
      var p = document.createElement("p");
      var textContent = item.address + "";
      for (k in item) {
        if (item[k] != "") {
          if (k != "Name" && k != "address" && k != "saveAs") {
            textContent = textContent + "," + item[k];
          }
        }
      }
      var totalAddress = h3.textContent + "," + textContent;
      input.setAttribute("value", totalAddress);
      p.textContent = textContent;
      innerDiv.append(h3, h4);
      var defaultDiv = document.createElement("div");
      defaultDiv.setAttribute("id", "default");
      var defaultspan = document.createElement("span");
      defaultspan.textContent = "Default Address";
      defaultDiv.append(defaultspan);
      mainDiv.append(innerDiv, p, defaultDiv);
      displayAddress.append(input, mainDiv);
      document.getElementById("addressBox").append(displayAddress);
    }
  });
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
p.textContent = "Total Items: " + cartItems.length;  
var br = document.createElement("br");
var p2 = document.createElement("p");
p2.textContent = "₹  " + total;
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
      "Rs." + Number(item.total_quantity) * Number(item.product_MRP);
    var span = document.createElement("span");
    span.textContent = "Qty:" + item.total_quantity;
    var h3 = document.createElement("h5");
    h3.textContent = "Delivery Between 5th Nov to 7th Nov";
    // span1.style.textAlign = "last";
    matterBox.append(ptag, ptag1, span, h3);
    nameDiv.append(imageDiv, matterBox);
    var hr = document.createElement("hr");
    document.getElementById("cartItems").append(nameDiv, hr);
  });
}
displayCartItems(cartItems);
document.querySelector("#mrpTotal span").textContent = "₹  " + total;
document.querySelector("#mrpTotal span").style.color = "black";
document.querySelector("#total > h3:nth-Child(2)").textContent =
  "₹  " + (total - (total * 10) / 100);
document.querySelector("button").addEventListener("click", changeAddress);
function changeAddress() {
  window.location.href = "address.html";
}
