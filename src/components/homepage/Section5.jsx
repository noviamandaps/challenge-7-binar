import React from "react";
import styles from "./style.section5.module.css";
import { Button, Container } from "react-bootstrap";

export default function Section5() {
  return (
    <>
      <Container className={styles.container}>
        <h1 className={styles.h1}>Sewa Mobil di Magetan Sekarang</h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button href="/cars" className={styles.btn}>
          Mulai Sewa Mobil
        </Button>
      </Container>
    </>
  );
}
