// import { exec } from "child_process";
// import { warn } from "../../utils/warn";
// import { err } from "../../utils/err";
// import { tagContent } from "../../typescript/interfaces";

// export const DO_ASYNC_FUNCTION = async (arg: Array<string>) => {
//   let bol: boolean = true;
//   exec(arg[0], (error, stdout, stderr) => {
//     if (error) bol = err(error.message.toString());
//     if (stdout) console.log(stdout.toString());
//     if (stderr) warn(stderr.toString());
//   });
//   return bol;
// };
// export const DO_ASYNC: tagContent = {
//   function: DO_ASYNC_FUNCTION,
//   arguments: 1,
// };
