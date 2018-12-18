//  simple tuck shop calculation

let products = ['biscuit','chocolate','toffee','lays','bubble'];

let itemName = prompt("Please enter item Name","");
let itemsQuantity = +prompt("Please enter items quantity","");
let price = +prompt("please enter item Price","");

 function CalculatePrice(){
    if(itemName !="" && itemsQuantity !="" && price !=""){
    let result;
   
    result = price * itemsQuantity;
    return result;
     }else{
         document.write("<h3 align='center'>invalid inputs </h3>");
     }
 }
 document.write("<p align='center'> We have the following in our tuc shop </p>");
 var i;
 document.write("<h4 align='center'>");
 for(i=0;i<products.length;i++){
        document.write(" - "+products[i]);
}
document.write("</h4>");
 document.write("<p align='center'> Item Name: " + itemName +"</p><br>"+
                "<p align='center'> Item Price: " + price +"</p><br>"+
                "<p align='center'> Item Quantity: " + itemsQuantity +"</p><br>"+
                " <p align='center'>Total Rs: " +CalculatePrice()+"</p><br>");

 
