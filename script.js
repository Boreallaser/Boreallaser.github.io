var names = new Array();
names[0] = "Asim";
names[1] = "Jason";
names[2] = "Jenny";
names[3] = "John";
names[4] = "Jason";
names[5] = "Jack";
names[6] = "Matt";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J") {
    console.log("GOODBYE " + names[i]);
  } else {
    console.log("HELLO " + names[i]);
  }
}
