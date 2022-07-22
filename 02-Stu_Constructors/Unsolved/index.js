// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`My name is ${name} and my favorite tech is the ${tech}.`)
    }
}

// TODO: Create a new object using the 'Developer' constructor
const obj = new Developer(process.argv[2], process.argv[3]);
// TODO: Call the 'introduction()' method on the new object
obj.introduction();