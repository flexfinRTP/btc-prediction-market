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
        >
          <p>© 2023 ₿itBully Prediction Market. Built on Stacks</p>
        </Container>
      </Box>
    </Box>
  );
}
