const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static("public"));
const fetch = require("node-fetch");
const ethers = require("ethers");



app.get("/wallet", async (req, res) => {
  try {
    const wallet = ethers.Wallet.createRandom();
    res.status(200).json({
      message: "Success",
      type: "evm",
      status: 200,
      publicKey: wallet.address,
      Mnemonic: wallet.mnemonic.phrase,
      privateKey: wallet.privateKey,
    });
  } catch (e) {
    console.log("sor", e);
    res.status(400).json(e);
  }
});

app.post("/getWallet", async (req, res) => {
  try {
    const mnemonic = req.body.mnemonic;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  
    const data = {
     
      ethWallet: {
        address: wallet.address,
        privateKey: wallet.privateKey,
        type: "ETH",
      },
      mnemonic: wallet.mnemonic.phrase,
    };
    res.status(200).json({
      message: "Success",
      type: "wallet",
      status: 200,
      data: data,
    });
  } catch (e) {
    console.log("sor", e);
    res.status(400).json(e);
  }
});


async function convert(){
  let = 86605;
  
}




// app.get("/nativeTokens", async (req, res) => {
//   try {
//     fetch(
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CMC_PRO_API_KEY": "7d113b37-4437-4856-82ae-61f45c9c1732",
//         },
//       }
//     ).then((response) => {
//       response.json().then(async (e) => {
//         const Tprice = await fetch(
//           "https://api.lbkex.com/v2/ticker.do?symbol=tlc_usdt",
//           { method: "GET" }
//         )
//           .then((data) => data.json())
//           .then((res) => res.data[0].ticker);

//         const Dprice = await fetch(
//           "https://api.lbkex.com/v2/ticker.do?symbol=doge_usdt",
//           { method: "GET" }
//         )
//           .then((data) => data.json())
//           .then((res) => res.data[0].ticker);

//         let coins = [
//           "Tether",
//           "Bitcoin",
//           "Ethereum",
//           "BNB",
//           "Polygon",
//           "Fantom",
//           "Optimism",
//           "Solana"
//         ];
//         let images = [
//           "https://qxwallet.herokuapp.com/teater.png",
//           "https://qxwallet.herokuapp.com/bitcoin.png",
//           "https://qxwallet.herokuapp.com/eth.png",
//           "https://qxwallet.herokuapp.com/binance.png",
//           "https://qxwallet.herokuapp.com/polygon.png",
//           "https://qxwallet.herokuapp.com/fantom.png",
//           "https://qxwallet.herokuapp.com/op.png",
//           "https://qxwallet.herokuapp.com/solana.png",
//         ];

//         let new_array = [];

//         let Tlc = {
//           id: "0",
//           name: "Trillioner",
//           symbol: "TLC",
//           slug: "bnb",
//           isCustomToken: true,
//           address: "0x29A5DaF6E3FDF964DEf07706eA1ABee7EC03D021",
//           quote: {
//             USD: {
//               price: Tprice.latest,
//               volume_24h: Tprice.high,
//               volume_change_24h: Tprice.change,
//               percent_change_1h: Tprice.change,
//               percent_change_24h: Tprice.change,
//               percent_change_7d: Tprice.change,
//               percent_change_30d: Tprice.change,
//               percent_change_60d: Tprice.change,
//               percent_change_90d: Tprice.change,
//               market_cap: Tprice.vol,
//               market_cap_dominance: 0,
//               fully_diluted_market_cap:0,
//               tvl: null,
//               last_updated: "2023-04-04T19:41:00.000Z"
//             },
//           },
//           image: "https://qxwallet.herokuapp.com/Trillior.jpeg",
//         };
//         let doge = {
//           id: "90",
//           name: "Dogecoin",
//           symbol: "DOGE",
//           isCustomToken: true,
//           slug: "bnb",
//           address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
//           quote: {
//             USD: {
//               price: Dprice.latest,
//               volume_24h: Dprice.high,
//               volume_change_24h: Dprice.change,
//               percent_change_1h: Dprice.change,
//               percent_change_24h: Dprice.change,
//               percent_change_7d: Dprice.change,
//               percent_change_30d: Dprice.change,
//               percent_change_60d: Dprice.change,
//               percent_change_90d: Dprice.change,
//               market_cap: Dprice.vol,
//               market_cap_dominance: 0,
//               fully_diluted_market_cap: 0,
//               tvl: null,
//               last_updated: "2023-04-04T19:41:00.000Z"
//             },
//           },
//           image: "https://qxwallet.herokuapp.com/doge.png",
//         };



//         new_array.push(Tlc);
//         console.log(new_array);
//         for (let i = 0; i < coins.length; i++) {
//           let obj = e.data.find((o) => o.name === coins[i]);
//           let a = (obj.image = images[i]);
//           if (obj.name == "Tether") {
//             obj.slug = "bnb";
//             obj.address = "0x55d398326f99059fF775485246999027B3197955";
//             obj.isCustomToken= true;
//           }
//           if(obj.name == "Optimism"){
//             obj.address = "0x4200000000000000000000000000000000000042";
//             obj.isCustomToken= true;
//           }
//           new_array.push(obj);
//         }
//         new_array.push(doge);
//         res.status(200).json({
//           status: 200,
//           message: "Success",
//           data: new_array,
//         });
//       });
//     });
//   } catch (e) {
//     console.log("sor", e);
//     res.status(400).json({
//       status: 400,
//       message: "Something Went Wrong !! Try Again",
//       error: e,
//     });
//   }
// });

app.listen(port, () => {
  console.log("server running");
});
