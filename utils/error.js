module.exports = (message, exit) => {
  console.error(message);
  return exit && process.exit(1);
};
