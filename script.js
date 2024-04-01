function konversiSuhu() {
  var inputSuhu = document.getElementById("inputSuhu").value.trim(); // Mengambil input dan menghapus spasi di awal dan akhir
  var satuanAwal = document.getElementById("satuanAwal").value;

  var resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = ""; // Menghapus isi tabel sebelum menambahkan hasil konversi baru

  // Memeriksa apakah input suhu sudah dimasukkan
  if (inputSuhu === "") {
    alert("Peringatan: Suhu belum dimasukkan!");
    return; // Menghentikan eksekusi fungsi
  }

  // Membuat baris tabel untuk nama kolom
  var headerRow = resultTable.insertRow();
  var headerCell1 = headerRow.insertCell(0);
  var headerCell2 = headerRow.insertCell(1);
  var headerCell3 = headerRow.insertCell(2);
  var headerCell4 = headerRow.insertCell(3);
  headerCell1.innerHTML = "<b>Celsius</b>";
  headerCell2.innerHTML = "<b>Fahrenheit</b>";
  headerCell3.innerHTML = "<b>Kelvin</b>";
  headerCell4.innerHTML = "<b>Reamur</b>";

  // Mengonversi input suhu menjadi bilangan pecahan
  var suhuFloat = parseFloat(inputSuhu);

  // Membuat baris tabel untuk menampilkan hasil konversi
  var row = resultTable.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  if (satuanAwal === "celsius") {
    cell1.innerHTML = suhuFloat;
    cell2.innerHTML = (suhuFloat * 9) / 5 + 32;
    cell3.innerHTML = suhuFloat + 273.15;
    cell4.innerHTML = (suhuFloat * 4) / 5;
  } else if (satuanAwal === "fahrenheit") {
    cell1.innerHTML = ((suhuFloat - 32) * 5) / 9;
    cell2.innerHTML = suhuFloat;
    cell3.innerHTML = ((suhuFloat - 32) * 5) / 9 + 273.15;
    cell4.innerHTML = ((suhuFloat - 32) * 4) / 9;
  } else if (satuanAwal === "kelvin") {
    cell1.innerHTML = suhuFloat - 273.15;
    cell2.innerHTML = ((suhuFloat - 273.15) * 9) / 5 + 32;
    cell3.innerHTML = suhuFloat;
    cell4.innerHTML = ((suhuFloat - 273.15) * 4) / 5;
  }
}
