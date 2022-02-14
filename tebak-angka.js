// for (int i=0; i<3; i++)

var tanya = true;
while (tanya) {
  alert("Tebak angka dari 1-5 \nKamu punya 3 kesempatan");

  // membangkitkan angka random
  var angka = Math.floor(Math.random() * 5) + 1;

  var i = 1;
  while (i <= 3) {
    // menangkap pilihan player
    var tebak = prompt("Masukkan angka tebakan :");

    console.log(tebak);
    var numbers = /^[0-9]+$/;
    if (tebak) {
      //alert('Your Registration number has accepted....');
      //return true;
    } else {
      alert("Please input numeric characters only");
      continue;

      // return;
      // break;
      // continue;
    }

    //   menentukan rules
    if (tebak === "") {
      alert("Anda belum menebak! \nSilakan pilih angka dari 1-5.");
    } else if (tebak) {
      if (tebak == angka) {
        alert("BENAR! \nAngka yang dicari adalah : " + angka);
        break;
      } else if (tebak < angka && tebak >= 1 && tebak <= 5) {
        if (i == 1) {
          alert("Angka yang dimasukkan terlalu RENDAH! \nAyo Anda masih punya 2 kesempatan.");
        } else if (i == 2) {
          alert("Angka yang dimasukkan terlalu RENDAH! \nAyo Anda masih punya 1 kesempatan.");
        } else if (i == 3) {
          alert("Angka yang dimasukkan terlalu RENDAH! \nKesempatan Anda habis.");
          alert("Anda gagal! \nAngka yang dicari adalah : " + angka);
        }
      } else if (tebak > angka && tebak >= 1 && tebak <= 5) {
        if (i == 1) {
          alert("Angka yang dimasukkan terlalu TINGGI! \nAyo Anda masih punya 2 kesempatan.");
        } else if (i == 2) {
          alert("Angka yang dimasukkan terlalu TINGGI! \nAyo Anda masih punya 1 kesempatan.");
        } else if (i == 3) {
          alert("Angka yang dimasukkan terlalu TINGGI! \nKesempatan Anda habis.");
          alert("Anda gagal! \nAngka yang dicari adalah : " + angka);
        }
      } else if (tebak < 1 || tebak > 5) {
        alert("Anda memasukkan angka yang salah. Silakan pilih angka dari 1-5.");
      } else {
        alert("Maaf, yang Anda masukkan bukan angka.");
      }
    } else {
      alert("Anda menekan tombol CANCEL");
    }
    i++;
  }
  tanya = confirm("Main Lagi?");
}
alert("Terima kasih sudah bermain.");
