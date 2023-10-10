const { productService } = require("../services");

/** create user */
const createproduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await productService.createproduct(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "product create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {createproduct};