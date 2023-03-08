import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Box>
      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 BitBully Prediction Market. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}></Stack>
        </Container>
      </Box>
    </Box>
  );
}
