# this file will explain you how Runner works under the hood

runner is able to run your given commads by this three processes

- take the input in form of string
- split the input
- tokenize the input
- run the input

1st process was done in its index.ts file and other are done in processes folder.
Whenever we create a `new Runner("")` we create an instance of class Runner who extends Lexer who extents Split

## its so easy to contribute

untill now we saw how interpreter work, but we still dont know how runner runs `RUN "ls -la"`, untill now lexer/tokenizer and splitter have created tokens for us which looks like this

```javascript
[
  {
    tag: "RUN",
    arguments: ["ls -la"],
  },
];
```

but what to do of this array of tokens? Now store comes in play
store is basically stores all our functions
imagine how much code it will take to write if else or switches thatswhy i have figured a new kind of tecnique,

inside store folder there is a file called tags.ts which contain all tags
like this

```javascript
export const tags = {
  PRINT: {
    function: (args: Array<string>): boolean => {
      console.log(args);
      return true;
    },
    arguments: 1,
  },
  // and so on
};
```

inside runner.ts file inside processes folder, `start()` starts an async recursion untill `i` becomes equal to lenght of tokens, in that recursion the code is like this `tags[this.tokens[i].tag].function(this.tokens[i].argumemts)`, i think now you get the idea, this single line is equal to whole if else, btw tags is imported from store. Look how easy is it to added a function..before adding one, make to sure add type in typescript/types.ts.

If i have missed anything or if there is any blunder in typos, let me know in github issue.

Thanks.
