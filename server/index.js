const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04634742f5993c16ef5694fb7c1d1fd7daae92a47dc90e0f717ec21e24ac43ccd60798f8aa6c8adcdb5157a2d3b2b481c43b316ba09ffd598c8c0fde63d5f84700": 100,
  "0462de6efe288c7cb5e695e5f844ad4e519bc1a39d829fabe717945e0e98e6c683715699b04de75d8f482b5a3ce2b80c790a94703e63b9dd5fec6d79d38db13922": 50,
  "048443aef307eac1dfb1184fef1ab8238a3efb741099d220185da345426171d08fd6329961740fe09ca06767f271dada1f8f9e3cab82358f45751110f064c96e8d": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
