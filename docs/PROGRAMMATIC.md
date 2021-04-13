# Yes Runner can also can be use for programmatic use, this is its api documentation

it is so simple to run " run sript " in your application / js,
just you have to import

```javascript
import { Runner } from "./src/processes/runner";
new Runner('RUN "ls -la"');
```

thats it, it will run that string.

you can also get access to tokens that runner had made

```javascript
const _runner = new Runner('RUN "ls -la"');
console.log(_runner.tokens);
```
