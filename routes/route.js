const express = require('express');
const router = express.Router()


const Contoller1 = require("../controllers/createBoard");
const Controller2 = require("../controllers/getAllBoards");
const Controller3 = require("../controllers/changeBoard");
const Controller4 = require("../controllers/deleteBoard");

router.post(
    "/createBoard",
    Contoller1.createBoard
);

router.get(
    "/getAllBoards",
    Controller2.getAllBoards
);

router.put(
    "/changeBoard",
    Controller3.changeBoard
);

router.delete(
    "/deleteBoard",
    Controller4.deleteBoard
)

module.exports = router;