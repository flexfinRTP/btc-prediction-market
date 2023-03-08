import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import ConnectWallet from "./ConnectWallet";
// import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <Box gap={2} px={4} marginBottom={20} as="b">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {/* <Link
					href="/"
				  >
					<Image src={} alt="logo" width={60} height={60} />
				  </Link> */}
          </Box>

          <Flex>
            <Stack
              direction={"row"}
              spacing={72}
              paddingRight={2}
              display="flex"
              alignItems="center"
            >
              {!router.pathname.startsWith("/dashboard") && (
                <>
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/buy">Buy Token</Link>
                  <Link href="/market">Market</Link>
                  <Link href="/vote">Vote</Link>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <br />
      <br />
      <Box py={50}>
        <div>
          {/* ConnectWallet file: `../components/ConnectWallet.js` */}
          <ConnectWallet />
          {/* ContractCallVote file: `../components/ContractCallVote.js` */}
        </div>
      </Box>
    </div>
  );
}
