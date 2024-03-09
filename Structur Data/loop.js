//Syntaks loop
// for-loop
for (let i = 1; i <= 10; i++){
    console.log(i);
} // initial - condition - incr/decr


for (let i = 2; i <= 20; i += 2){
    console.log(i);
} // ini buat genap sampe 20

for (let i = 20; i <= 0; i--){
    console.log(i);
} // dari 20 sampe 0

// Infinite Loop
for (let i = 20; i >= 0; i++){
    console.log(i);
}

// Perulangan dengan array
const hindia = ['hidup', 'kita', 'membasuh', 'cincin'];

for (let i = 0; i < hindia.length ; i++) {
    console.log(i , hindia[i])
};

// Nested Loop
const angka = [1, 2, 3, 4]
for(let i = 1; i <= 5; i++){
    console.log(`${i}.Soal nomor ${i}`)
    for(let j = 0 ; j <angka.length; j++){
        console.log(`${angka[j]}. pilihan jawaban`);
    }
}; // jadi dijalanin dari dalam keluar , dalam keluar

// Nested loop nesteed array
const keluarga = [
    ['andres','fahmi','najwa'],
    ['yeyen','ezga', 'gheral'],
    ['dagodang', 'nabila','hanif'],
];

for (let i = 0; i < keluarga.length; i++){
    const row = keluarga[i];
    console.log(`seat Row #${i + 1}`);
    for(let j = 0; j < row.length; j++){
        console.log(`  ${row[j]}`);
    }
}; // tar hasilnya yang keluarga 1 sampai 3 terus baru isinya per array

// Sintaks While
let num = 0;
while (num < 10){
    console.log(num);
    num++;
};

const PASSWORD = 'Pass123';

let guess = prompt('enter the password');
while (guess !== PASSWORD){
    guess = prompt('enter the password');
}

alert('congrats! the password is correct'); // ini contoh lainnya ya


// kata kunci break untuk menghentikan perulangan
let input = prompt('katakan sesuatu');

while(true){
    input = prompt(input);
    if (input === 'stop') break;
}

alert('ok'); //contoh while

for (let i = 0; i <= 1000 ; i++) {
    console.log(i);
    if (i == 100) break;
}; //contoh for

// Membuat tebak tebakan angka dengan while
let maximum = parseInt(prompt('masukan nilai!'));
while (!maximum) {
    maximum = parseInt(prompt('masukan nilai maksimal!'));
};

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let tebak = parseInt(prompt('isi tebakan pertama kamu!'));
let attempts = 1;

while (parseInt(tebak) !== targetNum) {
    attempts++;
    if (tebak > targetNum ) {
        tebak = parseInt(prompt('Tebakan kamu terlalu tinggi'));
    } else {
        tebak = parseInt(prompt('tebakan kamu terlalu kecil!'));
    };
};

alert(`selamat tebakan anda benra! dengan percobaan ${attempts} kali!`)


//For Of (elegant bro) ini buat array
const fruits = ['mangga', 'orange', 'alpukat'];

for (let fruit of fruits) {
    console.log(`bauh ${fruit}`);
}


// for in ini buat object
const studentScore = {
    aqbal : 80,
    saut : 75,
    ajam : 50,
}

for (student in studentScore) {
    console.log(`${student} memiliki score ${studentScore[student]}`);
}

