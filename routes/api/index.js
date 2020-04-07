//******************************************/
//  Manages all API routes for the server. */
//******************************************/
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
