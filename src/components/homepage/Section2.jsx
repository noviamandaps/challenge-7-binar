import React from "react";
import { Container } from "react-bootstrap";
import styles from "./style.section2.module.css";
import { CheckLg } from "react-bootstrap-icons";

export default function Section2() {
  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.box1}>
          <img
            src="assets/img/section2.png"
            alt="hero"
            className={styles.img}
          />
        </div>

        <div className={styles.box2}>
          <h1 className={styles.h1}>Best Car Rental for any kind of trip in Magetan!</h1>
          <p className={styles.p}>
            Sewa mobil di Magetan bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div className={styles.item}>
            <div className={styles.boxIcon}>
              <CheckLg className={styles.bi} />
            </div>
            <p className={styles.pItem}>
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.boxIcon}>
              <CheckLg className={styles.bi} />
            </div>
            <p className={styles.pItem}>
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.boxIcon}>
              <CheckLg className={styles.bi} />
            </div>
            <p className={styles.pItem}>Sewa Mobil Jangka Panjang Bulanan</p>
          </div>
          <div className={styles.item}>
            <div className={styles.boxIcon}>
              <CheckLg className={styles.bi} />
            </div>
            <p className={styles.pItem}>
              Gratis Antar - Jemput Mobil di Bandara
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.boxIcon}>
              <CheckLg className={styles.bi} />
            </div>
            <p className={styles.pItem}>
              Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
