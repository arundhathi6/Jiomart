<<<<<<< Updated upstream
var body  = document.querySelector("body");

var payment_box = document.createElement("div");
payment_box.setAttribute("id","paymentbox"); 

var mycart_box = document.createElement("div");
mycart_box.setAttribute("id","mycartbox"); 

body.append(mycart_box,payment_box);

var div1 = document.createElement("div");
div1.setAttribute("id","div1");

var div2 = document.createElement("div");
div2.setAttribute("id","div2");

var div3 = document.createElement("button");
div3.setAttribute("id","div3");
div3.textContent="Place Order";

payment_box.append(div1,div2,div3);

var box1 = document.createElement("div");
box1.setAttribute("id","box1");
var box2 = document.createElement("div");
box2.setAttribute("id","box2");
div1.append(box1,box2);

var sub1 = document.createElement("div");
sub1.setAttribute("id","sub1");
sub1.textContent = "Apply Coupon";
var sub2 = document.createElement("div");
sub2.setAttribute("id","sub2");
sub2.textContent = "VIEW All";
box1.append(sub1,sub2);

var logo = document.createElement("div");
logo.setAttribute("id","logo");
 var logoimg = document.createElement("img");
 logoimg.setAttribute("src","https://w7.pngwing.com/pngs/510/533/png-transparent-discounts-and-allowances-computer-icons-coupon-tag-symbol-icon-sales-miscellaneous-angle-logo.png");
logo.append(logoimg);
var tub2 = document.createElement("input");
tub2.setAttribute("id","tub2");
tub2.setAttribute("type","text");
tub2.setAttribute("placeholder","Enter Coupon Code");

var tub3 = document.createElement("button");
tub3.setAttribute("id","tub3");
tub3.textContent = "APPLY";
box2.append(logo,tub2,tub3);

var rect1 = document.createElement("div");
rect1.setAttribute("id","rect1");
rect1.textContent="Payment Details";

var rect2 = document.createElement("div");
rect2.setAttribute("id","rect2");
var MRP_Total = document.createElement("div");
MRP_Total.setAttribute("id","MRP_Total");
MRP_Total.textContent ="MRP Total";
var MRP_Number = document.createElement("div");
MRP_Number.setAttribute("id","MRP_Number");

rect2.append(MRP_Total,MRP_Number);

var rect3 = document.createElement("div");
rect3.setAttribute("id","rect3");
var Total_Amount = document.createElement("div");
Total_Amount.setAttribute("id","Total_Amount");
Total_Amount.textContent ="Total Amount";
var Total_Number = document.createElement("div");
Total_Number.setAttribute("id","Total_Number");

rect3.append(Total_Amount,Total_Number);

div2.append(rect1,rect2,rect3);

//Giving alert when coupon code entered to Apply button
document.getElementById("tub3").addEventListener("click",signId);
var signal=true;
function signId(){
document.getElementById("tub3");
var tub2 = document.getElementById("tub2").value;
if(tub2 =="masai10"){
    alert("yay!!! coupon code applied. you saved ₹10");
    signal=false;
 }
  if(signal){
 alert("invalid coupon code!");
  }
}

var array =[];
var cart_items = JSON.parse(localStorage.getItem("MyCart"))||[];

checkPrice();
function checkPrice(){
cart_items.map(function(el){
console.log(el.product_MRP);
var imageDiv = document.createElement("div");
var img = document.createElement("img");
img.setAttribute("src", el.product_url);
imageDiv.append(img);
var detailsDiv = document.createElement("div");
var p_tag = document.createElement("p");
p_tag.textContent = el.product_name;
var mrp_tag = document.createElement("label");

var MRPtotal =Number(el.product_MRP*Number(el.total_quantity));
array.push(MRPtotal);
mrp_tag.textContent = "₹" + MRPtotal;

var qty_tag = document.createElement("p");
qty_tag.textContent = "Total Quantity :"+Number(el.total_quantity);
detailsDiv.append(p_tag,mrp_tag,qty_tag);
mycart_box.append(imageDiv,detailsDiv);
//Giving HOF to calculate the total amount
var sum = function(ac,e){
    return ac+e;
}
var amount = array.reduce(sum);
console.log(amount);
document.getElementById("MRP_Number");
MRP_Number.textContent = "₹" + amount;
Total_Number.textContent = "₹" + amount;

document.getElementById("tub3").addEventListener("click",signAbc);
var signal = true;
function signAbc(){
document.getElementById("tub3");
var tub2 = document.getElementById("tub2").value;
if(tub2 =="masai10"){
    document.getElementById("Total_Number");
    var masai_coupon = amount-10;
    Total_Number.textContent ="₹"+ masai_coupon;
    signal=false;
 }
if(signal){
    Total_Number.textContent = "₹"+ amount;
 }

}
});
}
document.getElementById("div3").addEventListener("click",function (){
    window.location.href ="abc.html";
})
=======
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
      "Rs." + Number(item.total_quantity) * Number(item.product_MRP);
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
>>>>>>> Stashed changes
