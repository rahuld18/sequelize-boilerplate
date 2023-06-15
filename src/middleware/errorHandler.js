import { errorRecord } from "../helpers";

const errorHandler = async (err, req, res, next) => {
  // const stack = new Error();
  // const stack = new Error().stack;
  // const callerFunctionName = stack.split("\n")[2].trim().split(" ")[1];
  // console.log("Caller function:", stack);
  await errorRecord(req, res, err);
  return next(err);
};

export default errorHandler;
