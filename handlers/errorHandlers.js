exports.catchErrors = fn => (req, res, next) => fn(req, res, next)
  .catch((error) => {
    res.status(400).json({
      message: error.message,
    });
  });
