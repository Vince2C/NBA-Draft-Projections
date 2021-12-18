const { ids } = require("webpack");
const db = require("../data/playerTables");

const statsController = {};
const getStatsQuery = `SELECT * FROM public."NBAinfo"`;

statsController.getPlayersData = async (req, res, next) => {
//   console.log("this is res3", res);
  try {
    const playersData = await db.query(getStatsQuery);
    res.locals.playersData = playersData.rows;
    return next();
  } catch (err) {
    return next({
      log: `statsController.getPlayersData error: ${err}`,
      status: 500,
      message: { err: `statsController.getPlayersData error: ${err}` },
    });
  }
};

module.exports = statsController;
