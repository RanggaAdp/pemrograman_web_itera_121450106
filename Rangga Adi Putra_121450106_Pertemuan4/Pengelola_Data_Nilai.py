mahasiswa = [
    {"nama": "Andi", "nim": "A001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 75},
    {"nama": "Budi", "nim": "A002", "nilai_uts": 70, "nilai_uas": 65, "nilai_tugas": 60},
    {"nama": "Citra", "nim": "A003", "nilai_uts": 90, "nilai_uas": 92, "nilai_tugas": 88},
    {"nama": "Dina", "nim": "A004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Eka", "nim": "A005", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 40}
]
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = round(nilai_akhir, 2)

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

print(f"{'NIM':<6} {'Nama':<10} {'UTS':<4} {'UAS':<4} {'Tugas':<6} {'Akhir':<6} {'Grade'}")
print("-" * 50)
for mhs in mahasiswa:
    print(f"{mhs['nim']:<6} {mhs['nama']:<10} {mhs['nilai_uts']:<4} {mhs['nilai_uas']:<4} {mhs['nilai_tugas']:<6} {mhs['nilai_akhir']:<6} {mhs['grade']}")

tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah  = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{tertinggi['nama']} ({tertinggi['nim']}) - Nilai Akhir: {tertinggi['nilai_akhir']} - Grade: {tertinggi['grade']}")

print("\nMahasiswa dengan nilai terendah:")
print(f"{terendah['nama']} ({terendah['nim']}) - Nilai Akhir: {terendah['nilai_akhir']} - Grade: {terendah['grade']}")
