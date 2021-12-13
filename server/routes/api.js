const express = require("express");

const statsController = require("../controllers/statsController");

const router = express.Router();

//API defines path available for service (includes http method & http path)
//GET / POST / ETC
router.get("/", statsController.getPlayersData, (req, res) => {
  // console.log("this is res2", res);
  return res.status(200).json(res.locals.playersData);
}); //

// router.get("/species", starWarsController.getSpecies, (req, res) => {
//   console.log(res.locals.speciesData);
//   res.status(200).json(res.locals.speciesData);
// });

module.exports = router;
