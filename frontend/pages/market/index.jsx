import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Card,
  Container,
  Stack,
  Text,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ContractCallVote from "../../components/ContractCallVote";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import BULL from "../../public/bull.jpg";
import Oil from "../../public/oil.jpg";
import BtcImg from "../../public/btc.jpg";
import Vote from "../../public/vote.jpg";
import MarketImg from "../../public/market.jpg";

export default function Market() {
  return (
    <div className={styles.container}>
      <Head>
        <title>₿itBully Prediction Market</title>
        <meta name="description" content="Bulldog Prediction Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Navbar />
        </div>
        <Image src={BULL} alt="logo" width={200} height={200}></Image>
        <br />
        <br />
        <br />
        <h2 className={styles.title} >Open Market</h2>
        <br />
        <p>Vote Yes or No with your $BDOG tokens!</p>
        <div className={`${styles.grid} ${styles.alt}`}>
          <Card
            href="https://github.com/hirosystems/stacks.js"
            className={styles.card}
          >
            <h2>U.S. President &rarr;</h2>
            <br />
            <Image src={Vote} alt="logo" width={480} height={480}></Image>
            <br />
            <p>Who will win the 2024 United States Presidential Election?</p>
            <br />
            <ContractCallVote />
            <br />
          </Card>

          <Card href="https://docs.hiro.so" className={styles.card}>
            <h2>S&P 500 &rarr;</h2>
            <br />
            <Image src={MarketImg} alt="logo" width={480} height={480}></Image>
            <br />
            <p>
              Will the S&P 500 index reach a new all-time high by the end of
              July 2023?
            </p>
            <br />
            <ContractCallVote />
            <br />
          </Card>
        </div>
        <div className={styles.grid}>
          <Card href="https://nextjs.org/docs" className={styles.card}>
            <h2>Crude Oil &rarr;</h2>
            <br />
            <Image src={Oil} alt="logo" width={480} height={480}></Image>
            <br />
            <p>
              Will the price of crude oil reach $100 per barrel by end of year,
              2023?
            </p>
            <br />
            <ContractCallVote />
            <br />
          </Card>

          <Card href="https://nextjs.org/learn" className={styles.card}>
            <h2>Bitcoin &rarr;</h2>
            <br />
            <Image src={BtcImg} alt="logo" width={480} height={480}></Image>
            <br />
            <p>Will the price of Bitcoin exceed $100,000 by June 2023?</p>
            <br />
            <ContractCallVote />
            <br />
          </Card>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
