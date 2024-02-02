const errorMiddleware = (err, req, res, nex) => {
  const status = err.status || 500;
  const message = err.message || "Server Error";
  const errorDetails = err.errorDetails || "Something is wrong";

  res.status(status).json({ message, errorDetails });
};

module.exports = errorMiddleware;
