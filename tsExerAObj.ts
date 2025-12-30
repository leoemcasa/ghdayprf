

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

type Coord = { x: number; y: number; z?: number };

let pointA: Coord = { x: 5, y: 15 };

function doubleCoord(coord: Coord): Coord {
    return { x: coord.x * 2, y: coord.y * 2 };
}

console.log("================================");

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    };
};

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`Title: ${song.title}`);
    console.log(`Artist: ${song.artist}`);
    console.log(`Streams: ${song.numStreams}`);
    console.log(`Producer: ${song.credits.producer}`);
    console.log(`Writer: ${song.credits.writer}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    numStreams: 1500000,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

let earnings = calculatePayout(mySong);
console.log(`Earnings: ${earnings}`);
printSong(mySong);

console.log("================================");
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 12837,
    username: "catgurl"
};

console.log(user.id);
// user.id = 12345; // Error: Cannot assign to 'id' because it is a read-only property