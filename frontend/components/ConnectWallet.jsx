import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Image,
  Container,
  Button,
  Menu,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import styles from "../styles/Home.module.css";
import BULL from "../public/bull.jpg";
const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

function authenticate() {
  showConnect({
    appDetails: {
      name: "Stacks Next.js Starter",
      icon: window.location.origin + "/logo512.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && userSession.isUserSignedIn()) {
    return (
      <div>
        <Container maxW="100%" centerContent>
          <Text alignText={"center"} as="b">
            {userSession.loadUserData().profile.stxAddress.testnet}
          </Text>

          <Button className="Connect" onClick={disconnect}>
            Disconnect Wallet
          </Button>
          <br />
          

          {/* <Text alignText={'center'} as='b'>
            STX Mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}
          </Text> */}
        </Container>
      </div>
    );
  }

  return (
    <Container maxW="100%" centerContent>
      <button className="Connect" onClick={authenticate}>
        Connect Wallet
      </button>
      </Container>
  );
};

export default ConnectWallet;
