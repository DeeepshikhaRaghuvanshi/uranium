const express = require("express");
const router = express.Router();
const cowinController = require('../controllers/cowinController')
const weatherController = require('../controllers/weatherController')
const memeController = require('../controllers/memeController')


router.get("/getStates", cowinController.getStates);
router.get("/getDistrictsByStateId/:state_id", cowinController.getDistricts);
router.get("/sessionByPin" , cowinController.findByPin)
router.post("/generateOtp" , cowinController.getOtp)
router.get("/getSessionByDistrictId" , cowinController.getSession)

router.get("/getWeather" , weatherController.getWeather)
router.get("/getWeathers" , weatherController.getWeatherOfMultipleCities)

router.get("/getMeme" , memeController.getMeme)

module.exports = router;

