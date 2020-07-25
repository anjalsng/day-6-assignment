
    
  
var colour=['red','yellow','pink','green','blue','voilet','orange']

setInterval(changeColor, 5000);
function changeColor() {
  var color = colour.shift();
  document.bgColor = color;
  colour.push(color);
  document.querySelector('h2').style.color = 'white'
}


