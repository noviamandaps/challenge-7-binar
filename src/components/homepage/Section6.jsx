import React from "react";
import styles from "./style.section6.module.css";
import { Accordion, Container } from "react-bootstrap";

const question = [
  {
    eventKey: "0",
    header: "Apa saja syarat yang dibutuhkan?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum exercitationem animi eveniet, commodi quisquam minus nobis architecto? Nemo exercitationem sapiente labore voluptate facere quaerat odit sed numquam iure ipsam.",
  },
  {
    eventKey: "1",
    header: "Berapa hari minimal sewa mobil lepas kunci?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum exercitationem animi eveniet, commodi quisquam minus nobis architecto? Nemo exercitationem sapiente labore voluptate facere quaerat odit sed numquam iure ipsam.",
  },
  {
    eventKey: "2",
    header: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum exercitationem animi eveniet, commodi quisquam minus nobis architecto? Nemo exercitationem sapiente labore voluptate facere quaerat odit sed numquam iure ipsam.",
  },
  {
    eventKey: "3",
    header: "Apakah Ada biaya antar-jemput?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum exercitationem animi eveniet, commodi quisquam minus nobis architecto? Nemo exercitationem sapiente labore voluptate facere quaerat odit sed numquam iure ipsam.",
  },
  {
    eventKey: "4",
    header: "Bagaimana jika terjadi kecelakaan",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum exercitationem animi eveniet, commodi quisquam minus nobis architecto? Nemo exercitationem sapiente labore voluptate facere quaerat odit sed numquam iure ipsam.",
  },
];
export default function Section6() {
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.h1}>Frequently Asked Question</h1>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <Accordion className={styles.accordion}>
          {question.map((a) => (
            <Accordion.Item
              className={styles.accordionItem}
              eventKey={a.eventKey}
            >
              <Accordion.Header>{a.header}</Accordion.Header>
              <Accordion.Body>{a.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}
