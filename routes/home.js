const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("./index", { title: "Hello" });
// });

router.get("/", (req, res) => {
  // eslint-disable-next-line max-len, max-len, max-len
  res.render("partials/master", {
    title: "Express",
    content: "../index",
  });
});

module.exports = router;
