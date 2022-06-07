/* Dalida zhane onyn dostary */
const boss = { name: "Dalida", task: "managing the dormlife", codes: false};
const boss2 = { name: "Aidana", codes: true}; //let's say
boss2["task"] = "texting 200 students";

//function for getting info about a person: bosses
let getInfo = function (person) {
    return `Info: ${person.name} is ${person.task} 24/7 ${(person.codes) ? "and she codes": ""}`;
 }

console.log(getInfo(boss));
console.log(getInfo(boss2));

boss.codes = "Java";
/* oops udalyayem */
delete boss.codes;

// didn't forget abt others, just takes too much time
// sorry chto info ne sovsem pravdivaya:( 
let mentors = [
    { name: "David", lead: "full-stack", teaches: "SQL"}, 
    { name: "Aidar", lead: "full-stack", teaches: "Git"}, 
    { name:"Abylay", lead: "backend", teaches: "" }, 
    { name:"Beknur", lead: "frontend", teaches: "JS" }, 
    { name: "Samat", lead: "backend", teaches: "" }, 
    { name: "Aruzhan", lead: "full-stack", teaches: "Vanilla"},
    boss2];
mentors.pop();
mentors.push(boss);
mentors.pop();
mentors.shift();
mentors.unshift({name: "Zhanibek", lead: "frontend", teaches: "Terminal"});

console.log("***");
console.log("Mentors info: ")
console.log(mentors);
//add some functions

let frontEnders = mentors.filter ((mentor) => mentor.lead === "frontend");

let printList = function (list) { list.map ((el) => console.log(`${(el.name) ? el.name: ""}`))};

// show only frontenders:
console.log("***");
console.log(`Frontenders: count = ${frontEnders.length}`);
printList(frontEnders);

// replaces lead descriptions to an array of labels
let modified = mentors.map (({name: n, lead: l, teaches: t}) => 
    ({ name: n, 
      lead: (l === "full-stack") ? ['f', 'b']: (l === 'frontend') ? ['f']: ['b'], 
      teaches: t}));

console.log("***");
console.log("Update: mentors are labeled differently for convenience");

//function for finding the coolest rated mentor
let getCoolestRate = function (array, minRating, cool) {
    let rating = 0; 
    let max = 0;
    //console.log(array[0]);
    for (let i = 0; i < array.length; i++) {
        let {name: n, lead: l, ...others} = array[i];
        rating = (n.length)/2 + l.length; //weird rating rules:)
        if (rating >= minRating) {
            cool.push({ name: n, score: rating});
            if (rating >= max) { max = rating }
        }
    }
    return max;
} ;

let coolMentors = [];
let maxScore =  getCoolestRate (modified, 4.5, coolMentors);
console.log("***");
let _ = console.log(`Cool mentors: count = ${coolMentors.length}`);
printList(coolMentors);


let coolest = (coolMentors.filter( (mentor) => mentor.score === maxScore));
_ = console.log(`But the coolest: ${coolest[0].name} with score ${maxScore}`);



let findInstructor = function (teachers, subject) {
    subject = subject ?? "JS";
    let found = null;
    let i = 0;
    while (i < teachers.length && found === null) {
        found = (teachers[i].teaches == subject) ? teachers[i]: null;
        i = i+1;
    }
    return found;
}
console.log("***");
console.log("You can find your instructor by subject using findInstructor!");
console.log("respect the interface plz");
console.log("***");

let gitInstructor = findInstructor (mentors, "Git");
console.log(`Git Instructor: ${gitInstructor.name}`);

let jsInstructor = findInstructor (mentors);
console.log(`JS Instructor: ${jsInstructor.name}`);

let isMentor = function (person) {
    const list = mentors.filter((mentor) => (mentor.name).toLowerCase() == person.toLowerCase());
    if (list.length == 0) { return false } else {return true}
};
console.log("U can check whether a person is your mentor: isMentor(person) ");
console.log(`So isMentor("Aidana") returns ${isMentor("Aidana")}`);


export {getInfo, isMentor};
export default ["Dalida", "Aidar", "Zhanibek", "Aruzhan", "Aidana", "Yeskhat"]; 
export {getCoolestRate as enKeremetMentor, findInstructor as naityPrepoda};


