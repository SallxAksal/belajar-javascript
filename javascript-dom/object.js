var siswa = new Object();
siswa.namaDepan = "Akzal";
siswa.namaBelakang = "Damusti";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + "" + this.namaBelakang;
};

alert("Nama :" + siswa.namaLengkap());

//function namaLengkap() {

// //}