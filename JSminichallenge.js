//Objective 1: Function to add two Numbers 
function addnumbers(){
	var x = parseInt(document.getElementById("txt_nbr1").value);
	var y = parseInt(document.getElementById("txt_nbr2").value);
	var z = x + y;
	console.log(z);
	lbl_objective1.innerText = z;
}
//Objective 1.1: Function to add two strings
function addstrings(){
	var x = document.getElementById("txt_nbr1").value;
	var y = document.getElementById("txt_nbr2").value;
	var z = x + y;
	console.log(z);
	lbl_objective1.innerText = z;
}

//Objective 2: Multidimentional Array
function multiarray(){
	var country = ["USA","UNITED KINGDOM", "INDIA","AUSTRALIA"];
	var state = ["Alabama","Pennsylvania","New York","New Jersey"];
    var location = [country, state];
    console.log(location[0][0]);
    console.log(location[0][1]);
    console.log(location[1][1]);
    console.log(location[1][2]);
}


//Objective 3: Alert User on Size of number
function evalnumber(){
	var  x = prompt("Enter a Number");
	var y = parseInt(x);
	if ( y > 100){
		alert("The Number is "+ y +".The Number is greater than 100.");
	}
	else{
		alert("The Number is less than 100");
	}
}

//Objective 4: Display Name
function getString(){
	var abc = document.getElementById("txt_string").value;
	displayName(abc);
}

function displayName(name){
	var x = name;
	console.log(x);
	alert("You have entered : "+ x);
	
}


//Objective 5: Objective 5
    
        function openDoor1() // This Function is for door1
        {
            var x = document.getElementById("door1").className; //Getting the classname of door1
            if( x == "doorClose") //Evaluating if the door is closed,If it is closed, This loop will open the door and randomize the gift
            {
                document.getElementById("door1").className = "doorOpen";
                var gift1 = parseInt((Math.random() * (10 - 1) + 1 )); //Randomizing the gift
                if (gift1 > 6 && gift1 <11){
                    door1gift.innerText = "You won Porsche"; 
                    document.getElementById("giftimage").src = "Porsche.png";
                }
                else if(gift1 > 3 && gift1 <6 ){
                    door1gift.innerText = "You Won Lamborghini";
                    document.getElementById("giftimage").src = "Lamborghini.png";
                   
                }
                else{
                    door1gift.innerText = "You Won Ferrari";
                    document.getElementById("giftimage").src = "ferrari.png";
                }
            }
            else
            {
                var y  = "doorClose";
                document.getElementById("door1").className = "doorClose";
                console.log(y);   
            }
        }


          function openDoor2()
        {
            var x = document.getElementById("door2").className;
            if( x == "doorClose"){
                document.getElementById("door2").className = "doorOpen";
                var gift2 = parseInt((Math.random() * (10 - 1) + 1 ));
                if (gift2 > 6 && gift2 <11){
                   door2gift.innerText = "You won Porsche";
                    document.getElementById("giftimage2").src = "Porsche.png";
                }
                else if(gift2 > 3 && gift2 <6){
                    door2gift.innerText = "You Won Ferrari";
                    document.getElementById("giftimage2").src = "ferrari.png";
                }
                else{
                    door2gift.innerText = "You Won Lamborghini";
                    document.getElementById("giftimage2").src = "Lamborghini.png";
                }
            }
            else{
                var y  = "doorClose";
                document.getElementById("door2").className = "doorClose";
                console.log(y);   
            }
        }


          function openDoor3(){
            var x = document.getElementById("door3").className;
            if( x == "doorClose")
            {
                document.getElementById("door3").className = "doorOpen";
                var gift3 = parseInt((Math.random() * (10 - 1) + 1 ));
                if (gift3 > 6 && gift3 <11){
                    door3gift.innerText =  "You won Porsche";
                    document.getElementById("giftimage3").src = "Porsche.png";
                }
                else if(gift3 > 3 && gift3 <6){
                    door3gift.innerText = "You Won Ferrari";
                    document.getElementById("giftimage3").src = "ferrari.png";
                }
                else{
                    door3gift.innerText =  "You Won Lamborghini";
                    document.getElementById("giftimage3").src = "Lamborghini.png";
                }
            }
            else{
                var y  = "doorClose";
                document.getElementById("door3").className = "doorClose";
            }
        }
