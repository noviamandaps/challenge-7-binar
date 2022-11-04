import React from "react";
import styles from "./style.section3.module.css";
import { Container } from "react-bootstrap";

export default function Section3() {
  return (
    <>
      <Container className={styles.container}>
        <h1 className={styles.h1}>Why Us?</h1>
        <p className={styles.p}>Mengapa harus pilih Binar Car Rental?</p>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <img src="assets/img/icon1.png" alt="icon" className={styles.icon} />
            <h2 className={styles.h2}>Mobil Lengkap</h2>
            <p className={styles.pItem}>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className={styles.item}>
            <img src="assets/img/icon2.png" alt="icon" className={styles.icon} />
            <h2 className={styles.h2}>Harga Murah</h2>
            <p className={styles.pItem}>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className={styles.item}>
            <img src="assets/img/icon3.png" alt="icon" className={styles.icon} />
            <h2 className={styles.h2}>Layanan 24 Jam</h2>
            <p className={styles.pItem}>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className={styles.item}>
            <img src="assets/img/icon4.png" alt="icon" className={styles.icon} />
            <h2 className={styles.h2}>Sopir Profesional</h2>
            <p className={styles.pItem}>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
