

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
var hr = document.createElement("hr");
var tub3 = document.createElement("button");
tub3.setAttribute("id","tub3");
tub3.textContent = "APPLY";
box2.append(logo,tub2,tub3);

   
   



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
mrp_tag.textContent ="₹" + Number(el.product_MRP*Number(el.total_quantity))
var qty_tag = document.createElement("p");
qty_tag.textContent = "Total Quantity :"+Number(el.total_quantity);
detailsDiv.append(p_tag,mrp_tag,qty_tag);
mycart_box.append(imageDiv,detailsDiv);

   


   

});
}