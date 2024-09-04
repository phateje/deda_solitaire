function log(msg: string, ...args: any[]) {
  console.log(msg, args);
  return 3;
}

exports.log = log;