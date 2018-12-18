//  simple tuck shop calculation

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

 document.write("<p align='center'> Item Name: " + itemName +"</p><br>"+
                "<p align='center'> Item Price: " + price +"</p><br>"+
                "<p align='center'> Item Quantity: " + itemsQuantity +"</p><br>"+
                " <p align='center'>Total Rs: " +CalculatePrice()+"</p><br>");

//  let myAlpha = ['a','b','c','f','g'];
//  var input = prompt("enter A to Z");
//  for(i=0;i<myAlpha.length;i++){
// //   for(var alpha in myAlpha){
// //     checkAlpha = myAlpha[alpha];
//     if(input == myAlpha[i]){
//         document.write("Your alphabet is found in myalpha at index of: " +i + input +"<br>");      
//     }else{
//         //document.write("sorry you  have enter an invalid input");
//     }
// }
 
