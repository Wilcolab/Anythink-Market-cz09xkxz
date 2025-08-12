/**
 * @route GET /
 * @group Comments - Operations about comments
 * @returns {Array.<Comment>} 200 - An array of comment objects
 * @returns {Error} 500 - Internal server error
 * @description Retrieves all comments from the database.
 */

/**
 * @route DELETE /:id
 * @group Comments - Operations about comments
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {null} 204 - No content, comment deleted successfully
 * @returns {Error} 500 - Internal server error
 * @description Deletes a comment by its ID.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//hey github copilot, can you help me implement the comment routes?

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
//add another endpoint for deleting comment
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
