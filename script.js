function hitungnilai() {
    let tugas = Number(document.getElementById("tugas").value);
    let UTS = Number(document.getElementById("UTS").value);
    let UAS = Number(document.getElementById("UAS").value);


    let nilaiakhir = (30 * tugas + 30 * UTS + 40 * UAS) / 100;
    let grade = "";


    if (nilaiakhir >= 90) {
        grade = "A";
    } else if (nilaiakhir >= 80) {
        grade = "B";
    } else if (nilaiakhir >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    let status = "";
    if (nilaiakhir >= 75 && UAS >= 60) {
        status = "Lulus";
    } else {
        status = "Remedial";
    }
    document.getElementById("hasil").innerHTML =
        "Nilai Akhir: " + nilaiakhir.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Status: " + status;
}