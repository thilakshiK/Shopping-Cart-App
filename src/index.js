const person1 = { name: "thil" };
const person2 = { job: "doctor" };

console.log({ ...person1, ...person2, address: "SL" });

console.log({ ...person1 });
