console.log('donate to our cause')

function multNums(){
  //function body
  var num1= document.getElementById('num1').value;
  var num2= document.getElementById('num2').value;
  var total = (parseInt(num1) * parseInt(num2));
  document.getElementById('total').innerHTML = total;
  if (total<1000) {
  document.getElementById('thanks').innerHTML = 'Thank you for your donation'}
  else {document.getElementById('thanks').innerHTML = 'Thank you for your GENEROUS donation'}


}
