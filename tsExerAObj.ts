

console.log("================================");

function printPerson(person: { fName: string; lName: string }): void {
    console.log(`Name: ${person.fName} ${person.lName}`);
}

const personA = { fName: "John", lName: "Doe" };
printPerson(personA); // Name: John Doe

console.log("================================");

let coordinates: { x: number; y: number } = { x: 10, y: 20 };

function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random() * 100, y: Math.random() * 100 };
}

console.log(randomCoordinate());

console.log("================================");

type Coord = { x: number; y: number };

let pointA: Coord = { x: 5, y: 15 };

function doubleCoord(coord: Coord): Coord {
    return { x: coord.x * 2, y: coord.y * 2 };
}