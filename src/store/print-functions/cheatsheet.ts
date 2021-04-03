import { tagContent } from "../../typescript/interfaces";
import { terminal as term } from "terminal-kit";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CHEATSHEET_FUNCTION = async () => {
  console.log("welcome to cheat sheet");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await term.table(
    [
      ["^RTAGS ", "^Rarguments", "^Rexample", "^Rusage"],
      [
        "RUN",
        '1! "shell command"',
        '^Y RUN "yarn init -y"  ',
        "use to run big shell like installation etc",
      ],
      [
        "DO",
        '1! "shell command"',
        '^Y DO "ls"',
        "use to run small shell commands like ls, echo etc",
      ],
      [
        "COWSAY",
        ' 1! "text to cowsay"  ',
        '^Y COWSAY "this is just fun"',
        "use to print text using cowsay",
      ],
      [
        "PRINT ",
        '1! "text to print"',
        '^Y PRINT "this is print"',
        "use to print text",
      ],
      [
        " BLUE ",
        '1! "prints blue text" ',
        '^Y BLUE "blue text"',
        "use to print blue text    ",
      ],
      [
        "GREEN ",
        '1! "prints green text"',
        '^Y GREEN "green text"',
        "use to print green text",
      ],
      [
        "RED",
        '1! "prints red text"',
        '^Y RED "red text"',
        "use to print red text",
      ],
      ["EXIT", "0!", "^Y EXIT", "exit runner scripts"],
      ["CLEAR", "0!", "^Y CLEAR", "clearn all consoles"],
      ["WELCOME", "0!", "^Y WELCOME", "log welcome console"],
      ["LOGO", "0!", "^Y LOGO", "console runner logo"],
    ],
    {
      fit: true,
      width: 80,
      borderChars: "lightRounded",
      borderAttr: { color: "red" },
      contentHasMarkup: true,
    }
  );
  return true;
};

export const CHEATSHEET: tagContent = {
  function: CHEATSHEET_FUNCTION,
  arguments: {
    all: [],
    compulsary: [],
  },
};
