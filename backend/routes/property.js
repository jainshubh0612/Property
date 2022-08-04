const route = require("express").Router();
const mongoose = require("mongoose");
const Property = require("../models/property");

route.get("/property", async (req, res) => {
  const response = await Property.find();
  if (!response || response.length == 0) {
    return res.status(400).json({
      message: "No Data found",
    });
  }

  res.status(200).json({
    data: response,
  });
});

route.post("/property", async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.size) {
    return res.status(403).json({
      message: "Validation Error",
    });
  }
  const { name, description, size } = req.body;

  const property = new Property({ name, description, size });
  const response = await property.save();

  if (!response) {
    return res.status(403).json({
      message: "Failed to create property",
    });
  }

  res.status(201).json({
    message: "Property added successfully",
  });
});

route.delete("/property", async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({
      message: "Bad request",
    });
  }
  const response = await Property.deleteOne({ _id: req.query.id });
  if (!response ) {
    return res.status(400).json({
      message: "No Data found",
    });
  }

  res.status(200).json({
    message: "Deleted successfully",
  });
});


module.exports = route;
