import { useCallback, useEffect, useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
  uintCV,
  tuple,
  standardPrincipalCV,
  callReadOnlyFunction,
  makeStandardSTXPostCondition,
  FungibleConditionCode,
  listCV,
  tupleCV,
} from "@stacks/transactions";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { userSession } from "./ConnectWallet";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  intCV,
  principalCV,
  stringAsciiCV,
  stringCV,
} from "micro-stacks/clarity";
import { readUInt8, writeUInt32BE, writeUInt8 } from "micro-stacks/common";

const ContractCallVote = () => {
  const { doContractCall } = useConnect();
  const [post, setPost] = useState("");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function vote(pick) {
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD",
      contractName: "btc-vote",
      functionName: "vote",
      functionArgs: [uintCV(pick)],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  function getColors() {
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD",
      contractName: "btc-vote",
      functionName: "get-colors",
      functionArgs: [listCV(getColors)],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  const getTheColors = useCallback(async () => {
    if (userSession.isUserSignedIn()) {
      const userAddress = userSession.loadUserData().profile.stxAddress.testnet;
      const options = {
        contractAddress: "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD",
        contractName: "btc-vote",
        functionName: "get-colors",
        network: new StacksTestnet(),
        functionArgs: [standardPrincipalCV(userAddress)],
        senderAddress: userAddress,
      };

      const result = await callReadOnlyFunction(options);
      console.log(result);
    }
  });

  // useEffect(() => {
  //   getTheColors();
  // }, [userSession.isUserSignedIn()])

  // useInterval(getTheColors, 10000);

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  if (!mounted || !userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div>
      <Container centerContent>
        <CircularProgress value={50} color="green.400">
          <CircularProgressLabel>50%</CircularProgressLabel>
        </CircularProgress>
      </Container>

      <Flex py={10}>
        <Button className="Connect" onClick={() => getTheColors("")}>
          GET
        </Button>

        <Button className="Vote" onClick={() => vote("")}>
          Yes
        </Button>

        <Button className="Vote2" onClick={() => vote("")}>
          No
        </Button>
      </Flex>
    </div>
  );
};

export default ContractCallVote;
