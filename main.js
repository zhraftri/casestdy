function scorePass(score) {
    if (score >= 60) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

let mahasiswa1 = 87;
let mahasiswa2 = 53;

console.log("Nilai Mahasiswa: ", mahasiswa1);
console.log("Status Kelulusan: ", scorePass(nilaiMahasiswa));

console.log("Nilai Mahasiswa: ", mahasiswa2);
console.log("Status Kelulusan: ", scorePass(mahasiswa2));