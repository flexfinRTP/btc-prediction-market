// import { useCallback } from 'react';
// import { cvToHex, makeSmartContractDeploy, makeContractCall } from '@stacks/transactions';
// import { useConnect } from '@stacks/connect-react';

// const smartContractAddress = "ST2Q0H9YA2GX020BW7SDFPEECJFDHVCZV7AJ1W1MD";

// const vote = async () => {
//   const network = 'testnet'; // or 'mainnet'
//   const postConditions = [];
//   const deployerKey = 'userAddress'; // Private key of the account that will be used to sign the transaction
//   const contractName = 'btc-vote';
//   const functionName = 'vote';
//   const functionArgs = [
//   ];
//   const txOptions = {
//     network,
//     postConditions,
//     appDetails: {
//       name: 'My App',
//       icon: window.location.origin + '/favicon.ico',
//     },
//   };

//   const tx = await makeContractCall({
//     contractAddress: smartContractAddress,
//     contractName,
//     functionName,
//     functionArgs,
//     senderKey: stxAddress,
//     validateWithAbi: true,
//     network,
//   });

//   const authOptions = {
//     appDetails: {
//       name: 'My App',
//       icon: window.location.origin + '/favicon.ico',
//     },
//   };

//   const { doContractCall } = useConnect();

//   const handleClick = useCallback(async () => {
//     try {
//       const authResponse = await doContractCall({
//         transaction: tx,
//         appDetails: {
//           name: 'My App',
//           icon: window.location.origin + '/favicon.ico',
//         },
//       });
//       console.log(authResponse);
//     } catch (e) {
//       console.log(e);
//     }
//   }, [doContractCall, tx]);

//   return <button onClick={handleClick}>Vote</button>;
// };

// export default vote;