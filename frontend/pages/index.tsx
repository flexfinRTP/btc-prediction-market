import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Card,
  Container,
  Stack,
  Flex,
  Text,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ConnectWallet from "../components/ConnectWallet";
import ContractCallVote from "../components/ContractCallVote";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import VoteCard from "../components/VoteCard";
import BULL from "../public/bull.jpg";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>₿itBully</title>
        <meta name="description" content="BitBully" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div>
          <Navbar />
        </div>


        <h1 className={styles.title}>₿itBully</h1>
        <h1 className={styles.title}>Prediction Market</h1>

        <Container maxW="80%" centerContent>
          {/* DATADAO LOGO */}

          <Box className="logo" display="flex" mt="2" alignItems="center">
            <Image src={BULL} alt="logo" width={480} height={480}></Image>
          </Box>

          {/* <Text fontSize="4xl" color='black' as='b'>
        Buidling the most accessible Web3 data validation and data-sharing tools.
        </Text> */}

          <br />
          <br />
          <br />
          <Container maxW="50%" centerContent>

            <br />
          <Flex>
            <Text fontSize="6xl" color="gray.800">
              Step into the world of high-stakes predictions and exhilarating
              trades with ₿itBully, the Bitcoin prediction market that lets you
              bet on the future of the world's most popular cryptocurrency.
            </Text>
            </Flex>

            <br />
            <br />

            <Button
              bg="green.600"
              color="white"
              colorScheme="green"
              variant="solid"
              w="25%"
              gap="4"
              mb={4}
              py={12}
              fontSize="3xl"
              alignItems="center"
              justifyContent="center"
              display="flex"
              mt="2"
              boxShadow="dark-lg"
              p="8"
              rounded="xl"
              className="Connect"
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </Container>
        </Container>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
