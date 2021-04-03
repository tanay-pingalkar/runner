// import { spawn } from "child_process";
// import { warn } from "../../utils/warn";
// import { err } from "../../utils/err";
// import { tagContent } from "../../typescript/interfaces";

// export const RUN_ASYNC_FUNCTION = async (arg: Array<string>) => {
//   const splitted = arg[0].split(/\s/g);
//   let bol: boolean = true;
//   const spawned = spawn(splitted[0], splitted.splice(1));
//   spawned.on("message", (data) => {
//     console.log(data);
//   });
//   spawned.stdout.on("data", (data) => {
//     console.log(data.toString());
//   });
//   spawned.stderr.on("data", (data) => {
//     warn(data);
//   });
//   spawned.on("error", (er: string) => {
//     bol = err(er.toString());
//   });
//   return bol;
// };
// export const RUN_ASYNC: tagContent = {
//   function: RUN_ASYNC_FUNCTION,
//   arguments: 1,
// };
