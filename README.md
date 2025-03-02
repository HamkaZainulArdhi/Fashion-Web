# Next.js Project Setup & Guide

## 🚀 Menjalankan Proyek di Local

1. **Clone Repository**
   ```bash
   git clone https://github.com/HamkaZainulArdhi/Fashion-Web.git
   cd Fashion-Web
   ```

2. **Install Dependencies**
   npm install

  akan terintal node module ```

3. **Jalankan Server Local**
   npm run dev
   ```
   Akses proyek di browser melalui `http://localhost:3000`

---

## 📂 Struktur Folder Frontend

```plaintext
Fashion-Web/
│── public/         # Folder untuk asset statis (gambar, ikon, dll.)
│── src/
│   ├── APP/        # halaman utama dan rauter dari semua komponen
│   ├── components/ # Folder untuk komponen React yang bisa diedit
│   │   ├── UI/     # Komponen UI dari shadcn, acherty UI, dan reactbit, header, footer
│   ├── styles/     # Folder untuk konfigurasi Tailwind CSS
│── .gitignore      # File untuk mengabaikan file tertentu dalam Git
│── package.json    # Konfigurasi proyek & dependencies
│── tailwind.config.js # Konfigurasi Tailwind CSS
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
- `devlop` → Branch utama untuk pengembangan sebelum di-merge ke `main`.
- `feature/[nama-fitur]` → Branch untuk fitur baru, bercabang dari `devlop`.
- `bugfix/[deskripsi-bug]` → Branch untuk perbaikan bug, bercabang dari `devlop` atau `main`.


### 📌 Cara Membuat Branch Fitur Baru
```bash
git checkout devlop
git checkout -b feature/nama-fitur
```

### 🛠️ Cara Membuat Branch Bugfix
```bash
git checkout devlop
git checkout -b bugfix/deskripsi-bug
```

---

## ✨ Kontribusi
jangan sampai conflic tetap koordinasi di whatApps

