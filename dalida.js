const fruits = {
    'orange': 100,
    'apples': 110,
    'bananas': 120
}

let cash = 0;

function numOfFruits(){
    return Object.keys(fruits).length;
}

function show(){
    console.log(`We have only ${numOfFruits()} fruits:`)
    Object.entries(fruits).forEach(([key, value]) => {
        console.log(key+" for "+ value + "tenge!"); // key ,value
    });
    console.log("Do you want to buy anything?")
}

function cheapAndExpensive(){
    Object.entries(fruits).forEach(([key, value]) => {
        if(value < 110){
            console.log(`We have cheap ${key} for ${value}`)
        }
        else{
            console.log(`We have expensive ${key} for ${value}, because these are fresh fruits`)
        }
      });
}

function buy(element){
    if(fruits[element]){
        console.log(`You buy ${element} succecfully`);
        cash += fruits[element]
        delete fruits[element];
    }
    console.log(`Dalida now has ${cash} tenge`);
    console.log(fruits);
 }
