-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Nov 2019 pada 15.27
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warungmakan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `jenis_pembayaran`
--

CREATE TABLE `jenis_pembayaran` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kasir`
--

CREATE TABLE `kasir` (
  `id` int(11) NOT NULL,
  `nama_kasir` varchar(45) DEFAULT NULL,
  `pasword` int(11) DEFAULT NULL,
  `transaksi_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `makanan`
--

CREATE TABLE `makanan` (
  `id` int(11) NOT NULL,
  `nama_makanan` varchar(45) DEFAULT NULL,
  `stock_makanan` int(11) DEFAULT NULL,
  `harga_makanan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `makanan`
--

INSERT INTO `makanan` (`id`, `nama_makanan`, `stock_makanan`, `harga_makanan`) VALUES
(1, 'Nasi Goreng Kambing', 10, 15000),
(2, 'Nasi Goreng Ayam', 10, 10000),
(3, 'Nasi Goreng Seafood', 10, 20000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `meja`
--

CREATE TABLE `meja` (
  `id` int(11) NOT NULL,
  `nama_meja` varchar(45) DEFAULT NULL,
  `jumlah_kursi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `meja`
--

INSERT INTO `meja` (`id`, `nama_meja`, `jumlah_kursi`) VALUES
(1, 'meja 1', 4),
(2, 'meja 2', 4),
(3, 'meja 3', 4),
(4, 'meja 4', 4),
(5, 'meja 5', 4),
(6, 'meja 6', 4),
(7, 'meja 7', 4),
(8, 'meja 8', 4),
(9, 'meja 9', 4),
(10, 'meja 10', 4),
(11, 'meja 11', 4),
(12, 'meja 12', 4),
(13, 'meja 13', 4),
(14, 'meja 14', 4),
(15, 'meja 15', 4),
(16, 'meja 16', 4),
(17, 'meja 17', 4),
(18, 'meja 18', 4),
(19, 'meja 19', 4),
(20, 'meja 20', 4),
(21, 'meja 21', 4),
(22, 'meja 22', 4),
(23, 'meja 23', 4),
(24, 'meja 24', 4),
(25, 'meja 25', 4),
(26, 'meja 26', 4),
(27, 'meja 27', 4),
(28, 'meja 28', 4),
(29, 'meja 29', 4),
(30, 'meja 30', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `minuman`
--

CREATE TABLE `minuman` (
  `id` int(11) NOT NULL,
  `nama_minuman` varchar(45) DEFAULT NULL,
  `stock_minuman` int(11) DEFAULT NULL,
  `harga_minuman` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `minuman`
--

INSERT INTO `minuman` (`id`, `nama_minuman`, `stock_minuman`, `harga_minuman`) VALUES
(1, 'Es Teh Manis', 20, 5000),
(2, 'Es Jeruk', 20, 7000),
(3, 'Jus Mangga', 20, 10000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesanan`
--

CREATE TABLE `pesanan` (
  `id_pesan` int(11) NOT NULL,
  `meja_id` int(11) NOT NULL,
  `makanan_id` int(11) NOT NULL,
  `minuman_id` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `supplier`
--

CREATE TABLE `supplier` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `nama_konsumen` varchar(50) DEFAULT NULL,
  `alamat` varchar(50) DEFAULT NULL,
  `no_handphone` int(15) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `total_harga` int(20) DEFAULT NULL,
  `pesanan_id_pesan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `jenis_pembayaran`
--
ALTER TABLE `jenis_pembayaran`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kasir`
--
ALTER TABLE `kasir`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kasir_transaksi1_idx` (`transaksi_id`);

--
-- Indeks untuk tabel `makanan`
--
ALTER TABLE `makanan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `meja`
--
ALTER TABLE `meja`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `minuman`
--
ALTER TABLE `minuman`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`id_pesan`),
  ADD KEY `fk_pesanan_meja1_idx` (`meja_id`),
  ADD KEY `fk_pesanan_makanan1_idx` (`makanan_id`),
  ADD KEY `fk_pesanan_minuman1_idx` (`minuman_id`);

--
-- Indeks untuk tabel `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_transaksi_pesanan1_idx` (`pesanan_id_pesan`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `kasir`
--
ALTER TABLE `kasir`
  ADD CONSTRAINT `fk_kasir_transaksi1` FOREIGN KEY (`transaksi_id`) REFERENCES `transaksi` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `pesanan`
--
ALTER TABLE `pesanan`
  ADD CONSTRAINT `fk_pesanan_makanan1` FOREIGN KEY (`makanan_id`) REFERENCES `makanan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pesanan_meja1` FOREIGN KEY (`meja_id`) REFERENCES `meja` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pesanan_minuman1` FOREIGN KEY (`minuman_id`) REFERENCES `minuman` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `fk_transaksi_pesanan1` FOREIGN KEY (`pesanan_id_pesan`) REFERENCES `pesanan` (`id_pesan`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
