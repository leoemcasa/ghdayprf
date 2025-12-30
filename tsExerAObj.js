console.log("================================");
function printPerson(person) {
    console.log("Name: ".concat(person.fName, " ").concat(person.lName));
}
var personA = { fName: "John", lName: "Doe" };
printPerson(personA); // Name: John Doe
console.log("================================");
var coordinates = { x: 10, y: 20 };
function randomCoordinate() {
    return { x: Math.random() * 100, y: Math.random() * 100 };
}
console.log(randomCoordinate());
console.log("================================");
var pointA = { x: 5, y: 15 };
function doubleCoord(coord) {
    return { x: coord.x * 2, y: coord.y * 2 };
}
console.log("================================");
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("Title: ".concat(song.title));
    console.log("Artist: ".concat(song.artist));
    console.log("Streams: ".concat(song.numStreams));
    console.log("Producer: ".concat(song.credits.producer));
    console.log("Writer: ".concat(song.credits.writer));
}
var mySong = {
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    numStreams: 1500000,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log("Earnings: ".concat(earnings));
printSong(mySong);
console.log("================================");
