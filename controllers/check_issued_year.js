const path = require("path");
const Groups = require("../models/group");
const budget = require("../models/budget");

module.exports = {
  check_issued_year: async (req, res) => {
    try {
      const year = req.body.year;

      console.log(year);

      const uniqueYears = await budget.distinct("issuedYear");
      console.log(uniqueYears);

      const DB_Years = [
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
      ];

      if (!uniqueYears.includes(year) && DB_Years.includes(year)) {
        res.json({ result: true });
      } else {
        return res.json({ result: false });
      }
    } catch (error) {
      console.error("Error in check_issued_year:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
