var n = prompt("Enter number: ");
{

for(i = 2; i <= n/2; i++)
{
if(n % i ==0)
{
break;
}
}
if(i > n/2)
alert( "is a Prime Number");
else
alert( "is not a Prime Number");
}
//for(var i = 1; i <= 10; i = i + 1) {
    //console.log(i);
  //}