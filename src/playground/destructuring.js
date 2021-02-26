console.log("Destructuring")
const person={
    firstname:"sanjana",
    age:26,
    location:{
      city:  "Philadelpia",
      temp:92
    }

}
//Array destructuring
const address=['Rajputh street','hanamkonda','telangana',506001];
const [street,town,district,pincode]=address;
//only state
//const [,,state]=address;
//object destructuring
const {city,temp:temperature=95}=person.location;
const {firstname,age=24}=person;
console.log(`${firstname} is ${age}`);
console.log(`Temperature in ${city} is ${temperature}`);
console.log(`Address:${street},${town},${district}-${pincode}`);