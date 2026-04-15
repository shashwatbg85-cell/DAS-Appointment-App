export const getTestContrller = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Test controller working fine",
    });
  } catch (error) {
    console.log(error);
  }
};
