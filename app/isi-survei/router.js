const isiSurveiController = require("./controller");
// const {police_check} = require("../../middlewares");

const router = require("express").Router();

router.post(
    "/isi-survei",
    // police_check("create", "DeliveyAddress"),
    isiSurveiController.store
);

router.put("/isi-survei/:id", isiSurveiController.update);
router.delete("/isi-survei/:id", isiSurveiController.destroy);

router.get(
    "/isi-survei",
    // police_check("view", "DeliveryAddress"),
    isiSurveiController.index
);

module.exports = router;