/*
//this is a numerical calculation which can be shown inside inspect>cosole
10 - 2 + 13;
console.log(10 - 2 + 13);

console.log("buddy")
let firstName = "Bimarsha basyal";
console.log(firstName);
*/
/*
let javaScriptIsFUn = true;// true is shown in purple because it is a boolean
console.log(javaScriptIsFUn);


//console.log(typeof true);
console.log(typeof javaScriptIsFUn);
//console.log(typeof 23);
//console.log(typeof "buddy");
//console.log(typeof 23.78);


javaScriptIsFUn = "BUddy";
console.log(typeof javaScriptIsFUn);//it is changed from boolean to a string and we only use let at first to define the variable but in the second time we dont use that

let year = 1997;
console.log(year);
console.log(typeof year);


//this are math operators
const thisYear = 2022
const ageBimarsha = thisYear - 1996;
const ageBikram = thisYear - 1992;
console.log(ageBikram, ageBimarsha);
console.log(2 * ageBimarsha, ageBikram / 5, 3 ** 4)//3 ** 4 is 3 * 3 * 3 * 3 i.e 3 to the power of 4


const firstName = "bimarsha";
const lastName = "basyal";
console.log(firstName + " " + lastName); //" " is use to give space or to concatnate


//this are assingnment operators
let x = 10 + 5; //15
x += 10;// x = x(15) + 10 = 25
x *= 2 // x = x * 2 i.e (25 * 2)
x++;// x + 1(50+1)
console.log(x);


//comparison operators
console.log(ageBimarsha > ageBikram); //< > <= >=
console.log(ageBikram >= 30);
console.log(ageBimarsha >= 26);
const isfullage = ageBikram >= 18;

const thisYear = 2022
const ageBimarsha = thisYear - 1996;
const ageBikram = thisYear - 1992;
console.log(thisYear - 1996 < thisYear - 1992);

const averageAge = (ageBikram + ageBimarsha) / 2;//bodmas ko rule use vako vara hamile bracket rakheko ho
console.log(ageBikram, ageBimarsha, averageAge);
*/
//1ST CODING CHALLANGE
/*Mark and john are trying to compare their BMI which is calculated by using this formula:
BMI = mass/height ** 2 = mass/(height * height)
(mass in kg and height in meter):
1.store marks and jones mass and height in variable
2.calculate both of their BMI using the formula
3.create a booolean varialbles "markHigherBmi" containing information weather mark has more BMI than john.
Test data 1 marks weights 78kg and is 1,69 m tall.john weights 92 kg and is 1,95m tall.
test data 2 mark weights 95kg and is 1.88m tall.john weights 85kg and is 1.76m tall.

//test data 1
const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const BMImark = markWeight / markHeight ** 2; // BMI of mark is 27...
const BMIjohn = johnWeight / (johnHeight * johnHeight); // BMI of john is 24...
console.log(BMImark, BMIjohn);
const markHeigherBmi = BMImark > BMIjohn;
console.log(markHeigherBmi);

const firstName = "Bimarsha";
const job = "sushiman";
const birthYear = 1996;
const year = 2022;
const Bimarsha = "Hi!" + " my name is " + firstName + " I am " + (year - birthYear) + " years old " + job + "!";
console.log(Bimarsha);
const newBimarsha = `Hi my name is ${firstName}.I am ${year - birthYear} years old ${job}`;
console.log(newBimarsha);
// `` yo use gare paxi + use garnu pardaina as shown above.thank you
console.log(`string \n\
with  \n\
multiple lines`);
console.log(`string
with 
multiple lines`);

const age = 22;
if (age >= 27) {
    console.log(`yes! bimarsha you can marry!!!!`);
} else {
    const yearLeft = 27 - age;
    console.log(`No! bimarsha, you have still ${yearLeft} years left. Better luck next time!`);
}
const birthTime = 2010;
let century;
if (birthTime <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//2ND CODE CHALLANGE
use the BMI example from the challange 1 and code you already wrote and improve it!

1.Print a nice output to the console ,saying who has the higher BMI.
 The messege can be either Marks BMI is higher that lohns!or johns BMI is higher than Marks

2. use a template string to include the BMI values in the outputs. Example: "marks() BMi is higher than johns()"
HINT: use an if/else statement

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const BMImark = markWeight / markHeight ** 2; // BMI of mark is 27...
const BMIjohn = johnWeight / (johnHeight * johnHeight); // BMI of john is 24...
if (BMImark > BMIjohn) {
    console.log(`Mark has higher BMI than john. Mark has ( ${BMImark - BMIjohn} ) BMI more than john.`);
} else {
    console.log(`John has higher BMI than mark. John has ( ${BMIjohn - BMImark} ) BMI more than mark.`);
}

//type conversion
const inputyear = 1996;
console.log(Number(inputyear)); //to convert string into number
console.log(Number(inputyear) + 26);
//type coersion
console.log("i am  27  years old") //here is the combination of both string and numbers

let n = "1" + 1;
n = n - 1;
console.log(n); // ans is 10 do you know why?? because the first 1 is counted as a string so 1+1 became 11

//5 falsy values are : 0 , " ",undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean(NaN));


//example 1
let money = 0;//if the values are falsy then the result turns out false like below!!!!
if (money) {
    console.log("you shouldnt spend too much");
} else {
    console.log("get a job bruhh!!!!");
}

const age = 18;
if (age == 18) {
    console.log("you are adult");
}
if (age === 18) {
    console.log("you are adult!!!!");
}

//'36' == 36(loose) but '36' is not === 36(strict)
const favourite = Number(prompt("what's your favourite number??")); //prompt shows the question before loading the page
if (favourite === 36) {
    console.log("this is my favourite number!!!")
} else if (favourite === 69) {
    console.log("this is also my favourite number");
} else {
    console.log("none of other numebers are cool!!!");

}
if (favourite !== 36) {
    console.log("why not 36?");

}

//inorder to drive in areal life situation following things should meet!!!!
const hasDriverliscence = true;
const hasGoodVision = true;
const isTired = false; // its not good to be tired while driving
console.log(hasDriverliscence && hasGoodVision);
console.log(hasDriverliscence || hasGoodVision);
console.log(!hasDriverliscence)

if (hasDriverliscence && hasGoodVision && !isTired) {
    console.log("i can drive");

} else { "i cannot drive" };







//3RD CODING CHALLANGE
1.calculate the average score for 
each team,using the test data below:
2. compare the teams average score to 
determine the winner of the competition,and print it to the console
.Dont forget that there can be a draw so test for that as well 

3. BONUS 1: Include a requirement for a minimum score
of 100.with this rule,a team only wins if it has a higher score
than the other team and at the same time a score of at least 100 
Points .HINT: use a logical operator to test for the minimum score
as well as multiple else-if blocks.

4.BONUS 2. Minimum score also applies to a draw! so a draw only happens when 
both teams have the same score and both hava a score
greater or equal 100 points. otherwise,no team wins the trophy

TEST DATA: Dolphins score 96,108 and 89, 
koalas score 88,91 and
110.

TEST DATA BONUS 1: Dolphins score 97,112 and 101.
koalas score 109,95,123
TEST DATA BONUS 2: Dolphins score 97,112 and 101.
koalas score 109,95,106
GOOD LUCK 

//TEST DATA 1
const dolphinegame1 = 97;
const dolphinegame2 = 108;
const dolphinegame3 = 89;
const averageDolphinescore = (dolphinegame1 + dolphinegame2 + dolphinegame3) / 3;
console.log(averageDolphinescore); //average score of dolphine is 98
const koalagame1 = 88;
const koalagame2 = 91;
const koalagame3 = 110;
const averageKoalascore = (koalagame1 + koalagame2 + koalagame3) / 3;
console.log(averageKoalascore); //  average score of koala is 96.33
if (averageDolphinescore > averageKoalascore) {
    console.log(`Dolphine has won the game with ${averageDolphinescore - averageKoalascore} points!!!!!`)
}
else {
    console.log(`Koala has won the game with ${averageKoalascore - averageDolphinescore} points!!!!!"`)
}


//TEST DATA 2
const dolphinegame1 = 97;
const dolphinegame2 = 100;
const dolphinegame3 = 101;
const averageDolphinescore = (dolphinegame1 + dolphinegame2 + dolphinegame3) / 3;
console.log(averageDolphinescore); //average score of dolphine is 103
const koalagame1 = 100;
const koalagame2 = 95;
const koalagame3 = 100;
const averageKoalascore = (koalagame1 + koalagame2 + koalagame3) / 3;
console.log(averageKoalascore); //  average score of koala is 109
if (averageDolphinescore > averageKoalascore && averageDolphinescore >= 100) {
    console.log("Dolphine is the winner");
}
else if (averageKoalascore > averageDolphinescore && averageKoalascore >= 100) {
    console.log("koala is the winner")

}
else {
    console.log("none of the above are winner");
}



//TEST DATA 3
const averageDolphinescore = (97 + 112 + 101) / 3;
console.log(averageDolphinescore); //average score of dolphine is 103
const averageKoalascore = (109 + 95 + 106) / 3;
console.log(averageKoalascore); //  average score of koala is 103
if (averageDolphinescore > averageKoalascore && averageDolphinescore >= 100) {
    console.log("Dolphine is the winner");
}
else if (averageKoalascore > averageDolphinescore && averageKoalascore >= 100) {
    console.log("koala is the winner");
}
else if (averageDolphinescore === averageKoalascore || averageDolphinescore >= 100 && averageKoalascore >= 100) {
    console.log("no one wins the trophy");
}

else {
    console.log("none of the above are winner");
}


const day = 'monday';

switch (day) {
  case 'monday': //day === 'monday'
    console.log("chill");
    console.log("smoke weed");
    break;
  case 'tuesday':
    console.log("its my day off!!!");
    console.log("eat,sleep,repeat");
    break;
  case 'wednasday':
  case 'thursday':
  case 'friday':
  case 'saturday':
    console.log("sepre bombar nunca parar");
    break;
  case 'sunday':
    console.log("breathe");
  default:
    console.log("not a valid day");
}


//try to convert into else if statement
const day = prompt("which day??");
if (day === "monday") {
  console.log("smoke weed");
}
else if (day === "tuesday") {
  console.log("its my day off!!!");
}
else if (day === "wednasday" || day === "thursday" || day === "friday" || day === "saturday") {
  console.log("sepre bombar nunca parar");
}
else {
  console.log("not a valid day");
}

//ternary operator//it is called ternary because of the 3 parts!!!
const age = 23;
age >= 18 ? console.log("i like whiskey") :
  console.log("i like wine!!");
  
const age = 18;
const drink = age >= 18 ? "wine" : "water";
//console.log(drink);
//if we do same problem with if else statement
let drink1;
if (age >= 18) {
    drink1 = "wine";
}
else {
    drink1 = "water";
}
console.log(drink1);

//never ever forget to put `` MF!!!
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


//CODING CHALLANGE 4

steven wants to build a very simple tip calculator
for whenever he goes eating in a restaurant.In his
country, its usual to tip 15 % if the bill value is 
between 50 and 300. IF the value is different, the 
tip is 20 %.

    1.
Your task is to calculate the tip, depending on 
the bill value.Create a variable called 'tip' for
this.It is not allowed to use if/else statement(if
its easier for you, you can start with this and then
try to convert into a ternary operator)

2.
Print a string to te console containing the bill value
    , the tip, and the final value(bill + tip).

        Example: "THe bill was 275,the tip was 41.25,and the total value is 316.25"

TEST DATA: Test for bill value 275, 40 and 430

const bill = 275
const tipInnumber = (bill * 15) / 100;
const tipInnumber1 = (bill * 20) / 100;
const tip = bill >= 50 && bill <= 300 ? tipInnumber : tipInnumber1;// bill * .15 : bill * .20(done by teacher)
console.log(`the bill was ${bill},the tip was ${tip} and the total value is ${bill + tip}`)
//The bill was 275,the tip was 41.25,and the total value is 316.25
//the bill was 40,the tip was 8 and the total value is 48
//the bill was 430,the tip was 86 and the total value is 516
*/


