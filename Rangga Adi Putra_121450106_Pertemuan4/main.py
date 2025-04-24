import math_operations

from math_operations import celsius_ke_kelvin, luas_persegi

print("=== Input Data Geometri ===")
sisi = float(input("Masukkan sisi persegi: "))
panjang = float(input("Masukkan panjang persegi panjang: "))
lebar = float(input("Masukkan lebar persegi panjang: "))
jari_jari = float(input("Masukkan jari-jari lingkaran: "))

print("\n=== Input Data Suhu ===")
c = float(input("Masukkan suhu dalam Celsius: "))

print("\n=== Hasil Perhitungan Geometri ===")
print(f"Luas persegi: {luas_persegi(sisi)}")
print(f"Keliling persegi: {math_operations.keliling_persegi(sisi)}")

print(f"\nLuas persegi panjang: {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling persegi panjang: {math_operations.keliling_persegi_panjang(panjang, lebar)}")

print(f"\nLuas lingkaran: {math_operations.luas_lingkaran(jari_jari):.2f}")
print(f"Keliling lingkaran: {math_operations.keliling_lingkaran(jari_jari):.2f}")

print("\n=== Hasil Konversi Suhu ===")
print(f"{c}°C ke Fahrenheit: {math_operations.celsius_ke_fahrenheit(c):.2f}°F")
print(f"{c}°C ke Kelvin: {celsius_ke_kelvin(c):.2f} K")

print(f"\nKonstanta PI dari modul: {math_operations.PI}")
