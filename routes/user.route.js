import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "it works as well",
  });
});

export default router;
