// Membuat Object
const album = {
    Hindia  : 124,
    Feast   : 2323,
    Baskara : 'Vokasli',
};

//Object didalam object
const akun = {
    nama : 'ML',
    login : true,
    id : [15675899, 567839],
};

//Mengakses Data di object
akun['login'] // true - tidak disarankan krn biasanya array
akun.id // nah ini baru bener , ntar hasilnya kayak isi nya id
akun.id[1] // manggil dalem dalem

//Mengubah nilai dari dalam suatu object
akun.nama = 'Mobile legend'; // mengubah nama menjadi Mobile legend
akun.tier = 'Mitik' // Menambahkan key dan value atau property

