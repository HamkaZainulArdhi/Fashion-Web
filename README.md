# Next.js Project Setup & Guide

## 🚀 Menjalankan Proyek di Local

1. **Clone Repository**
   ```bash
   git clone https://github.com/HamkaZainulArdhi/Fashion-Web.git
   cd Fashion-Web
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Server Local**
   ```bash
   npm run dev
   ```
   Akses proyek di browser melalui `http://localhost:3000`

4. **Build Proyek untuk Produksi**
   ```bash
   npm run build
   ```
   Hasil build akan tersimpan di folder `.next/`.

5. **Jalankan Server Produksi (Opsional)**
   ```bash
   npm start
   ```
   Ini akan menjalankan aplikasi menggunakan hasil build dari langkah sebelumnya.

---

## 📂 Struktur Folder Frontend

```plaintext
Fashion-Web/
│── public/         # Folder untuk asset statis (gambar, ikon, dll.)
│── src/
│   ├── app/        # Halaman utama dan router dari semua komponen
│   ├── components/ # Folder untuk komponen React yang bisa diedit
│   │   ├── ui/     # Komponen UI dari shadcn, acherty UI, dan reactbit (header, footer, dll.)
│   ├── styles/     # Folder untuk konfigurasi Tailwind CSS
│── .gitignore      # File untuk mengabaikan file tertentu dalam Git
│── package.json    # Konfigurasi proyek & dependencies
│── tailwind.config.js # Konfigurasi Tailwind CSS
│── next.config.js  # Konfigurasi khusus Next.js

```

---

## 🎨 Library yang Digunakan

- **shadcn/ui** → Komponen UI yang fleksibel dan minimalis.
- **acherty UI** → Library UI tambahan untuk elemen interaktif.
- **reactbit** → Kumpulan komponen UI berbasis React yang ringan.

---

## 🌿 Git Branching Strategy

Kami menggunakan strategi branching berikut:

- `main` → Branch utama untuk kode produksi yang stabil.
- `deploy` → Branch sebelum penggabungan ke `main`, digunakan untuk persiapan rilis.
- `feature/[nama-fitur]` → Branch untuk fitur baru, bercabang dari `develop`.
- `bugfix/[deskripsi-bug]` → Branch untuk perbaikan bug, bercabang dari `develop` atau `main`.

### 📌 Cara Membuat Branch Fitur Baru
```bash
git checkout develop
git checkout -b feature/nama-fitur
```

### 🛠️ Cara Membuat Branch Bugfix
```bash
git checkout develop
git checkout -b bugfix/deskripsi-bug
```

### 🚀 Cara Merge ke `deploy` sebelum ke `main`
```bash
git checkout deploy
git merge develop
git push origin deploy
```
Setelah semua siap:
```bash
git checkout main
git merge deploy
git push origin main
```

---

## ✨ Kontribusi
Jangan sampai terjadi conflict! Tetap koordinasi di WhatsApp sebelum push perubahan ke repository.

