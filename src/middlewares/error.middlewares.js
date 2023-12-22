exports.errorHandler = async (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error!";
  const extraDetails =
    err.extraDetails || `Please check the logs for more detailed information.`;

  if (err.name === "ValidationError") {
    const errorMessage = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
    res.status(400).json({ success: false, message: errorMessage });
  } else {
    res.status(status).json({
      message,
      extraDetails,
    });
  }
};
