const express = require("express");

const statsController = require("../controllers/statsController");

const router = express.Router();

//API defines path available for service (includes http method & http path)
//GET / POST / ETC
router.get("/", statsController.getPlayersData, (req, res) => {
  return res.status(200).json(res.locals.playersData);
}); //

router.get("/auction/:budget", statsController.getPlayersData, (req, res) => {
  let data = [];
  for (let i = 0; i < res.locals.playersData.length; i++) {
    let newObj = { ...res.locals.playersData[i] };
    newObj["totalBid"] = req.params.budget * newObj.Value / 3;
    data.push(newObj);
  }
  console.log(req.params);
  return res.status(200).json(data);
}); 

module.exports = router;
