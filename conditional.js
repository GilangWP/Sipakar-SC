const issues = {
    A: "Keterlambatan Pengiriman Bahan Baku",
    B: "Pemrosesan yang Tidak Sesuai Standar",
    C: "Gangguan pada Transportasi + Bencana alam",
    D: "Perubahan Permintaan yang Tidak Terduga",
    E: "Kondisi Transportasi yang Buruk",
    F: "Kesalahan Pengiriman",
    G: "Miskomunikasi",
    H: "Kesalahan pekerja/petugas",
    I: "Kesalahan sistem Produksi: Error pada sistem yang digunakan menyebabkan terjadi nya hal yang tidak diinginkan",
    J: "Kesalahan Sistem IT"
};

let conditions = {
    G01: false,
    G02: false,
    G03: false,
    G04: false,
    G05: false,
    G06: false,
    G07: false,
    G08: false,
    G09: false,
    G10: false,
    G11: false,
    G12: false,
    G13: false,
    G14: false,
    G15: false
};

function evaluateConditions() {
    if (conditions.G01 && !conditions.G02 && conditions.G03 && !conditions.G04 && !conditions.G05 && !conditions.G06 && !conditions.G07 && !conditions.G08 && !conditions.G09 && conditions.G10 && !conditions.G11 && !conditions.G12 && !conditions.G13 && !conditions.G14 && !conditions.G15) {
        return issues.A;
    } else if (conditions.G01 && conditions.G02 && conditions.G03 && conditions.G04 && conditions.G05 && conditions.G06 && conditions.G07 && conditions.G08 && conditions.G09 && !conditions.G10 && !conditions.G11 && conditions.G12 && conditions.G13 && !conditions.G14 && !conditions.G15) {
        return issues.B;
    } else if (!conditions.G01 && !conditions.G02 && !conditions.G03 && !conditions.G04 && !conditions.G05 && conditions.G06 && !conditions.G07 && !conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && conditions.G12 && conditions.G13 && conditions.G14 && !conditions.G15) {
        return issues.C;
    } else if (conditions.G01 && !conditions.G02 && conditions.G03 && conditions.G04 && !conditions.G05 && !conditions.G06 && conditions.G07 && !conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && !conditions.G12 && !conditions.G13 && conditions.G14 && conditions.G15) {
        return issues.D;
    } else if (!conditions.G01 && !conditions.G02 && !conditions.G03 && !conditions.G04 && !conditions.G05 && conditions.G06 && !conditions.G07 && !conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && conditions.G12 && conditions.G13 && conditions.G14 && !conditions.G15) {
        return issues.E;
    } else if (!conditions.G01 && !conditions.G02 && !conditions.G03 && conditions.G04 && !conditions.G05 && !conditions.G06 && !conditions.G07 && conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && !conditions.G12 && conditions.G13 && conditions.G14 && conditions.G15) {
        return issues.F;
    } else if (conditions.G01 && !conditions.G02 && conditions.G03 && conditions.G04 && conditions.G05 && !conditions.G06 && conditions.G07 && conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && conditions.G12 && !conditions.G13 && conditions.G14 && conditions.G15) {
        return issues.G;
    } else if (conditions.G01 && conditions.G02 && !conditions.G03 && conditions.G04 && conditions.G05 && conditions.G06 && conditions.G07 && conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && conditions.G12 && conditions.G13 && conditions.G14 && !conditions.G15) {
        return issues.H;
    } else if (conditions.G01 && conditions.G02 && conditions.G03 && !conditions.G04 && !conditions.G05 && !conditions.G06 && !conditions.G07 && !conditions.G08 && !conditions.G09 && !conditions.G10 && !conditions.G11 && !conditions.G12 && !conditions.G13 && !conditions.G14 && !conditions.G15) {
        return issues.I;
    } else if (!conditions.G01 && !conditions.G02 && !conditions.G03 && conditions.G04 && conditions.G05 && !conditions.G06 && conditions.G07 && conditions.G08 && conditions.G09 && conditions.G10 && conditions.G11 && !conditions.G12 && conditions.G13 && !conditions.G14 && !conditions.G15) {
        return issues.J;
    } else {
        return "Conditions do not match any issue";
    }
}

document.getElementById('conditionsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    for (let i = 1; i <= 15; i++) {
        const conditionValue = document.querySelector(`input[name="G${i < 10 ? '0' : ''}${i}"]:checked`).value;
        conditions[`G${i < 10 ? '0' : ''}${i}`] = conditionValue === '1';
    }
    const result = evaluateConditions();
    document.getElementById('result').innerText = result;
});
