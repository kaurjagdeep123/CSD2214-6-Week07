// Your code here!
var bird = {
    genus: "corvus",
    species: "covex",
    commonName: "raven",
    callType: "squawky",
    quote: "nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};

var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
};
var days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
document.write(days + "<p>");
for (var i = days.length; i >= 0; i++) {
    document.write(days[i] + "<p>");
}