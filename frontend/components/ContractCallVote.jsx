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
  listCV
} from "@stacks/transactions";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { userSession } from "./ConnectWallet";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const ContractCallVote = () => {
  const { doContractCall } = useConnect();
  const [ post, setPost ] = useState("");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // function vote(pick) {
  //   doContractCall({
  //     network: new StacksTestnet(),
  //     anchorMode: AnchorMode.Any,
  //     contractAddress: "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD",
  //     contractName: "btc-vote",
  //     functionName: "vote",
  //     functionArgs: [list(pick)],
  //     postConditionMode: PostConditionMode.Deny,
  //     postConditions: [],
  //     onFinish: (data) => {
  //       console.log("onFinish:", data);
  //       window
  //         .open(
  //           `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
  //           "_blank"
  //         )
  //         .focus();
  //     },
  //     onCancel: () => {
  //       console.log("onCancel:", "Transaction was canceled");
  //     },
  //   });
  // }

  // function getColors() {
  //   doContractCall({
  //     network: new StacksTestnet(),
  //     anchorMode: AnchorMode.Any,
  //     contractAddress: "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD",
  //     contractName: "btc-vote",
  //     functionName: "get-colors",
  //     functionArgs: [listCV],
  //     postConditionMode: PostConditionMode.Deny,
  //     postConditions: [],
  //     onFinish: (data) => {
  //       console.log("onFinish:", data);
  //       window
  //         .open(
  //           `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
  //           "_blank"
  //         )
  //         .focus();
  //     },
  //     onCancel: () => {
  //       console.log("onCancel:", "Transaction was canceled");
  //     },
  //   });
  // }

  const getTheColors = useCallback(async () => {

    if (userSession.isUserSignedIn()) {
      const userAddress = userSession.loadUserData().profile.stxAddress.testnet
      const options = {
          contractAddress: "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD",
          contractName: "btc-vote",
          functionName: "get-colors",
          network: new StacksTestnet(),
          functionArgs: [standardPrincipalCV(userAddress)],
          senderAddress: userAddress
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

  // if (!mounted || !userSession.isUserSignedIn()) {
  //   return null;
  // }

  return (
    <div>

    <div>
        <div>
          <h1>Get Colors 👋</h1>
          <button className="Vote" onClick={() => getTheColors()}>
            getColors
          </button>
        </div>  
    </div>

      {/* <Container>
        <CircularProgress value={50} color='green.400'>
          <CircularProgressLabel>50%</CircularProgressLabel>
        </CircularProgress>
      </Container> */}

      <br />
{/* 
      <Button className="Vote" onClick={() => getTheColors("")}>
        GET
      </Button> */}
{/* 
      <Button className="Vote" onClick={() => vote("")}>
        Yes
      </Button>
      

      <Button className="Vote" onClick={() => vote("")}>
        No
      </Button> */}

    </div>
  );
};

export default ContractCallVote;
