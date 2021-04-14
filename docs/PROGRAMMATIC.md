# Runner is very usefull for programmatic use, this is its api documentation

## runner cli builder is also made in runner core itself

it is so simple to run " run sript " in your application / js,
just you have to import

```javascript
const Runner =require("@tanay-pingalkar/runner/dist/processes/runner").Runner
// sorry it little long
new Runner('RUN "ls -la"');
```

thats it, it will run that string.

you can also get access to tokens that runner had made

```javascript
const _runner = new Runner('RUN "ls -la"');
console.log(_runner.tokens);
```

## build_cli

```javascript
const build_cli=require("@tanay-pingalkar/runner/dist/processes/build_cli").build_cli
build_cli("PRINT \"this is a cli\"", "one")
```
it will create a `runner_build` folder.
but you dont have to care about it, just run `one_cli` in your terminal and output will be 
```
[ 1 ]
 this is cli
```
there are more to explore, you can read source to understand more, open a issue if you want any help.
