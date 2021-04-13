import arg from "arg";

export const cli_arg_parser = (raw: Array<string>): { build: boolean } => {
  const this_is_arg = arg(
    {
      "--build": Boolean,
    },
    {
      argv: raw.splice(2),
    }
  );

  return {
    build: this_is_arg["--build"] || false,
  };
};
