var jumlahBaris = prompt("Masukkan jumlah baris:");
jumlahBaris = parseInt(jumlahBaris);
var hasilBaris = '';

for (var i = 0; i <= jumlahBaris; i++) {
  for (var j = 1; j <= jumlahBaris - i; j++) {
    hasilBaris += '+';
  }
  for (var k = 0; k <= i; k++) {
    hasilBaris += '#';
  }
  hasilBaris += '\n';
}
alert(hasilBaris);