const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// we will handle post req
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// we will handle get req
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// we will handle get req of indiv
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id });
    res.send(getMen);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// we will handle patch req of indiv
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// we will handle delete req of indiv
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/", async (req, res) => {
  res.send("Hello World");
});


module.exports = router;