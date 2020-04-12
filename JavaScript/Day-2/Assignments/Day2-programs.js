//Program to get the type of all datatypes in js
var inputName = "Alex";
var inputNumber = 9;
var inputCheck = true;
var inputArr = [1, 3, 5, 7];
var inputObj = {
  name: "Fox",
  type: "Animal"
}
var inputVar = undefined;
var inputEmpty = null;
var test = NaN;

function checkTypes() {
  console.log("Type of " + inputName + " is: " + typeof(inputName)); //Type of Alex is: string
  console.log("Type of " + inputNumber + " is: " + typeof(inputNumber)); //Type of 9 is: number
  console.log("Type of " + inputCheck + " is: " + typeof(inputCheck)); //Type of true is: boolean
  console.log("Type of " + inputArr + " is: " + typeof(inputArr)); //Type of 1,3,5,7 is: object
  console.log("Type of " + inputObj.name + " is: " + typeof(inputObj)); //Type of Fox is: object
  console.log("Type of " + inputVar + " is: " + typeof(inputVar)); //Type of undefined is: undefined
  console.log("Type of " + inputEmpty + " is: " + typeof(inputEmpty)); //Type of null is: object
  console.log("Type of " + test + " is: " + typeof(test)); //Type of NaN is: number
}
checkTypes();

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(5+4+"5"); //95
console.log("6"+7+9); //679
console.log(null+9+"7"); //97
console.log(undefined+8+"6"); //NaN6
console.log(5+8+undefined+"hj"); //NaNhj
console.log(7+null+undefined+"0"); //NaN0

//-------------------------------------------------------------------------------------
/*2.JSON representation
{
    "TechnicalSpecifications": {
        "Dimensions": {
            "Overall length(mm)": 3500,
            "Overall width(mm)": 1600,
            "Overall height(mm)": 1490,
            "Wheelbase(mm)": 2360,
            "Track width": {
                "Front(mm)": 1405,
                "Rear(mm)": 1400
            },
            "Minimum turning radius(m)": 4.5,
            "Minimum ground clearance(mm)": 170  
        },
        "Capacities": {
            "Seating Capacity(persons)": 5,
            "fuel tank capacity(litres)": 35 
        },
        "Engine": {
            "Type": "KB-Series",
            "Number of cylinders": 3,
            "Number of valves": 12,
            "Capacity(cc/cm3)": 998,
            "Bore x stroke(mm)": "73.0x79.5",
            "Compression ratio": "10:1",
            "Maximum power(PS/rpm)": "67/6200",
            "Maximum torques(Nm/rpm)": "90/3500",
            "Fuel distribution": "Multipoint injection"
        },
        "Transmission": {
            "Type": "5-speed MT"
        },
        "Chassis": {
            "Steering": "Rack & Pinion, Power assisted",
            "Brakes": {
                "Front": "Ventilated discs",
                "Rear": "Drums"
            },
            "Suspension": {
                "Front": "MacPherson strut & coil spring",
                "Rear": "Isolated trailing link & coil spring"
            },
            "Shock-absorbers": "Gas filled",
            "Tyre(tubeless)": "155/80R13"
        },
        "Weights": {
            "Kerb-weight(kg)":"860-880",
            "Gross-vehicle-weight(kg)": 1320
        }
    }
}

//-------------------------------------------------------------------------------------*/
//3. JSON interpretation
var library = [
    {
        title: "JavaScript",
        price: 500,
        readers: [
            {
                name: "Person 1",
                count: 300
            },
            {
                name: "Person 2",
                count: 400
            }
        ],
        authorDetails: {
            name: "Raj",
            age: 40
        }
    },
    {
        title: "Nodejs",
        price: 600,
        readers: [],
        authorDetails: {
            name: "Raj",
            age: 40
        }
    }
]

//3a. Print the price of JavaScript book in console
console.log(library[0].price)
//3b. Print the age Node.js Author in console
console.log(library[1].authorDetails.age)
//3c. Print how many readers for javascript in console
console.log(library[0].readers.length)
//3d. Print the count value of Person 2 in console
console.log(library[0].readers[1].count)