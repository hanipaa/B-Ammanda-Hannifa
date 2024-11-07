// Array Antrian
const antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian Awal : " + antrian);
// Nambah Antrian
antrian.push("Nabila");
antrian.push("Maza", "Elsi");
console.log(antrian);
// Elsi pulang
antrian.pop();
console.log(antrian);
// 1,2 pulang
antrian.shift();
antrian.shift();
console.log(antrian);
// Tomi
antrian.unshift("Tomi");

console.log(antrian);