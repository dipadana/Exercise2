var angka1 = document.getElementById('angka1');
var angka2 = document.getElementById('angka2');
var btn = document.getElementById('btn');
var hasilh = document.getElementById('hasilh');

// function hitung() {
//     let hasil = angka1 + angka2;
//     console.log(hasil);
// }

btn.addEventListener("click", function () {
    let hasil = parseInt(angka1.value) + parseInt(angka2.value);
    hasilh.innerHTML = hasil;
});