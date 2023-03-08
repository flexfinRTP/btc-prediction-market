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
import ConnectWallet from "../../components/ConnectWallet";
import ContractCallVote from "../../components/ContractCallVote";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import VoteCard from "../../components/VoteCard";
import BULL from "../../public/bull.jpg";
import { useRouter } from "next/router";

export default function About() {
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

        <Container maxW="80%" centerContent>
          {/* DATADAO LOGO */}

          <Box className="logo" display="flex" mt="2" alignItems="center">
            <Image src={BULL} alt="logo" width={200} height={200}></Image>
          </Box>

          {/* <Text fontSize="4xl" color='black' as='b'>
        Buidling the most accessible Web3 data validation and data-sharing tools.
        </Text> */}

          <br />
          <br />
          <br />
          <Container maxW="50%" centerContent>
            <Text fontSize="6xl" color="gray.800">
              Step into the world of high-stakes predictions and exhilarating
              trades with BitBully, the Bitcoin prediction market that lets you
              bet on the future of the world's most popular cryptocurrency.
            </Text>

            <br />
            <br />
            <Card>
              <p className={styles.customText1}>Decentralized Markets</p>
              <Text>
                The prediction market should utilize a decentralized oracle
                network to provide accurate and reliable data for resolving
                prediction markets.
              </Text>
            </Card>

            <br />
            <br />

            <p className={styles.customText1}>User-Customized Markets</p>
            <Text>
              The platform should allow users to create and customize their own
              prediction markets based on any topic or event, incentivizing them
              to create and participate in more prediction markets.
            </Text>

            <br />
            <br />

            <p className={styles.customText1}>Liquidity Incentives</p>
            <Text>
              The platform should provide liquidity incentives to users who
              provide liquidity to prediction markets, such as staking tokens or
              providing collateral for prediction markets.
            </Text>

            <br />
            <br />

            <p className={styles.customText1}>Token Incentives</p>
            <Text>
              The platform should offer token incentives for users who correctly
              predict the outcome of a prediction market, incentivizing them to
              participate and make accurate predictions.
            </Text>

            <br />
            <br />

            <p className={styles.customText1}>Gamification</p>
            <Text>
              The prediction market should incorporate gamification elements to
              make it more fun and engaging for users, such as leaderboards,
              badges, and rewards for active participation.
            </Text>

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
              onClick={() => router.push("/market")}
            >
              Bet Now
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
