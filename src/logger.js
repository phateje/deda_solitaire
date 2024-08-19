function log(msg, ...args) {
  console.log(msg, args);
  return 3;
}

exports.log = log;