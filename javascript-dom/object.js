var siswa = new Object();
siswa.namaDepan = "Akzal";
siswa.namaBelakang = "Triansyah Damusti";
siswa.alamat = "Bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

var siswa2 = {
    namaDepan : "Nazhief",
    namaBelakang : "Ilham",
    alamat : "Bandung",
    namaLengkap : function() {
        return this.namaDepan + " " + this.namaBelakang;
    },
};
alert("Nama : " + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());

// function namaLengkap() {
// //}