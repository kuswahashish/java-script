/*document.write("<h1>HELLO WORLD</h1>");
document.write("<h2>HELLO WORLD</h2 >");
document.write("<h3>HELLO WORLD</h3>");
let num = 16;
let name = "Kuswah ashish";
document.write(num);
alert(name);

//Operators
let a = 3;
let b = 3;
let result = a+b;

document.write("<h1> Result is : "+result+"</h1>");

// Control Statment
IF ELSE SWITCH FOR LOOP AND SOO ON 
let x = 7;
if(x%2==0)
{
    document.write(x+" is EVEN")
}
else
{
    document.write(x+" is ODD")
}

//LOOPING
//FOR LOOP table of 5
for(let x=1;x<=10;x++)
{
    document.write("<h1>"+(5*x)+"</h1>");
}_

while skipped ;)
//  do while

let x = 1;
do{
 document.write("<h1> ASHISH </h1>"); 
 x++;
}while(x<5)


// FUNCTIONS
function addNumber(a,b)
{
    //let a = 5;
    //let b = 5;
    let result = a+b;
    document.write("<h2>Total of a b : "+result+"</h2>");
    return result;
}
addNumber(6,5);
let res = addNumber(10,20);
write("\n");
document.write("<h2>add of 10 20 is :"+res+"</h2>");

//Array in java script

let cars = ["BMW","VOLVO","Audi"];
document.write(cars);

for(let i = 0;i<3;i++)
{
    document.write("<br><h2>"+cars+"</h2>")
}
cars.push("Mercedes");
for(let i = 0;i<cars.length;i++)
{
    document.write("<br><h2>"+cars[i]+"</h2>")
}

//simple object/class
var car = {

    carBrand : "Tesla",
    carModel : "Model 3",
    Price : 35000,

    teslaAutoPiolate : function()
    {
        return("<h2>Thish car has auto piolate function</h2>");
    }
}
document.write("<h2>"+car.teslaAutoPiolate()+"</h2>");


//object COnstructor
function cars(carBrand,carModel,Price)
{
    this.carBrand = carBrand;
    this.carModel =carModel;
    this.Price=Price;
    this.teslaAutoPilot = function()
    {
        document.write("<h2>This car has auto pilot </h2>")
    }
}
let  c1 = new cars("Tesla","m 3",35000);
let c2 = new cars("audi","Q8",10000);
document.write(c1.carBrand+"<br> "+c1.carModel+"<br> "+c1.Price);

//
var car = {

    carBrand : "Tesla",
    carModel : "Model 3",
    Price : 35000,

    teslaAutoPiolate : function()
    {
        document.write("<h2>Thish car has auto piolate function</h2>");
    }
}
//110 l;ines of code then yhou realise you need to add one more attribute /properties
 car.fuelType = "Electric"; // to add from outside
 document.write(car.fuelType);
 //for delete attribute / property
 delete car.Price;
 document.write(car.price);//undefine


//function onclick 

function buttonClick()
{
    //alert("Button Click");
    var str = document.getElementById("heading2").innerHTML="ASHISH :)";
    alert(str);
}
 

// taking textbox value using function
// TASK 1
function btnclick()
{
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    //document.write("<h2> u = "+u+" p = "+p);
    if(u==p)
    {
    alert("Welcome : )");
    }
    else
     alert("Check username and password");
    
}
//radio button
function btnclick()
{
    let rd1=document.getElementById("rd1");
    let rd2=document.getElementById("rd2");
    if(rd1.checked == true)
    {
        alert("button 1 is selected "+rd1.Value)
    }
    else if(rd2.checked==true)
        alert("button 2 is selected "+rd2.Value)
    else
        alert("nothing is selected")
    
}
// select Box
function btnclick()
{
    let s = document.getElementById("selectbox");
    alert(s.options[s.selectedIndex].value);
}


// GetElementByTag

function changeStyling()
{
    var p = document.getElementsByTagName("p");
    p[0].style.fontSize = 25;
    p[1].style.color="RED";
    p[2].style.fontWeight="bold";
}

//GetElementByClassName
function changeStyling()
{
    let element = document.getElementsByClassName("mypara");
    for(var i =0;i<element.length;i++)
    {
        element[i].style.color="RED";
    }
}

//On Mouse Over/Out

function setNewImage()
{
    document.getElementById("img").src="img/img2.jpg";
}
function setOldImage()
{
    document.getElementById("img").src="img/img1.jpg"; 
}

//FormVALIDATION

function btnclick()
{
    let u = document.getElementById("uname");
    let p =document.getElementById("pass");
    if(u.value.trim() == "" )
    {
        //alert("Balnk username ");
        u.style.border = "solid 3px red"; 
        return false;
    }
    else if(p.value.trim() == "")
    {
        alert("Blank Password");
        p.style.border = "solid 3px red"; 
        return false;
    }
    else if(p.value.trim().length<5)
    {
        alert("Password too short.!");
        p.style.border = "solid 3px red"; 
        return false;
    }
    else
    {
        return true;
    }


}


//regular Expression Validation
function Validation()
{
    let u = document.getElementById("user").Value;
    let regx = /e00/i;
    if(regx.test(u))
    {
        alert("valid username");
    }
    else
    {
        alert("Invalid Username");
    }
}

function validate()
{
    let username = document.getElementById("uname").value;
    //let regx = /123/i;
    RegExp regx = new RegExp("123","i");
    if(regx.test(username))
    {
        document.getElementById("lbluser").style.visibility="hidden";
    }
    else
    {
        document.getElementById("lbluser").style.visibility="visible";
    }
}

//mobile Number Validatation
function validate()
{
    let text =  document.getElementById("cellno").value;
    let regx = /^[1-9]\d{9}$/;
    if(regx.test(text))
    {
        document.getElementById("lbl").innerHTML="valid";
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("lbl").style.color="GREEN";
    }
    else
    {
        document.getElementById("lbl").innerHTML="In13valid";
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("lbl").style.color="RED";
    } 
}

//Email Varification

skip


//Timingf Function..
let ID=0;
function printMsg()
{
    document.getElementById("op").innerHTML="5 secont have passed";
}
function start()
{
    window.setTimeout(printMsg,5000);
}
function stop()
{
    window.clearTimeout(ID);
}


//Fade IN/OUT animation


let opacity=0;
let intervalID=0;

function fadeOut()
{
    document.getElementById("fadeout").style.background="GREEN";
    document.getElementById("fadein").style.background="WHITE";
    intervalID=setInterval(hide,200); 
    //for(opacity=1;opacity>0;opacity-=0.1)
    //{
      //i failed // window.setTimeout(() => {document.getElementById("img").style.opacity=opacity;},1000);
    //}
}
function fadeIn()
{
    document.getElementById("fadein").style.background="GREEN";
    document.getElementById("fadeout").style.background="WHITE";
    intervalID=setInterval(show,200); 
}
function hide()
{
    var img= document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity>0)
    {
        opacity-=0.1;
        img.style.opacity=opacity;
    }
    else
    {
        clearInterval(intervalID);
    }
}
function show()
{
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));   
    if(opacity<1)
    {
        opacity+=0.1;
        img.style.opacity=opacity;
    }
    else
    {
        clearInterval(intervalID);
    }
}

*/

//Zoom IN/OUT
let width=300;
let difference = 2;
let intervalID = 0;
//document.getElementById("img1").style.width=width;
function increase()
{
    clearInterval(intervalID);
   intervalID=setInterval(ZoomIn,20); 
}
function decrease()
{
    clearInterval(intervalID);
    intervalID = setInterval(Zoomout,20);
}
function ZoomIn()
{
    if(width<400)
    {
        width+=difference;
        document.getElementById("img1").style.width=width;
    }
    else
    {
        clearInterval(intervalID);
    }
}
function Zoomout()
{
    if(width>100)
    {
        width-=difference;
        document.getElementById("img1").style.width=width;
    }
    else
    {
        clearInterval(intervalID);
    }
}