function calculate(){

let w = document.getElementById("ta").value;
let h = document.getElementById("tb").value;

if(w<0 || h<=0)
{
    alert("Enter valid input");
}
let output = w/(h*h);

let a = document.getElementById("bmi");
a.innerHTML = output;

let b = document.getElementById("result");
if(output<18.5)
{
    b.innerHTML =  "You are underweight!";
}

else if(output>18.5 && output<25)
{
    b.innerHTML = "You are healthy";
}

else
{
    b.innerHTML = "You are overweight!";
}
}