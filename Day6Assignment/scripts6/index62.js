console.log("Multiplication table")
function multiplicationTable()
{
     var num = prompt("Enter the number","");
     var myString = "";
     for (i=1; i<=10; i++) {
       myString += i+ " x " +num+ " = " +(i*num)+ "\n";
     }
     alert(myString);
}
multiplicationTable();