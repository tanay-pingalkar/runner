## Runner is open source and will live open source, there are some ways that you can contribute to us

- contribution to docs, `git checkout Docs`
- giving feed back on git hub issue ( yes this will also help us a lot)
- contribute to direct source code

## Contribution guide

<h3> how to run locally </h3>

- fork the beta branch
- run `npm install` in root dir
- run `npm link`
- navigate to `examples` folder and run `run`
- it will create a test.rn, if it wont create it, create test.rn file on your own
- in test.rn file, you can test you code or feature you have added, `run test` in `examples` folder will interpret test.rn file
- run `npm run dev` or `tsc` to convert typescript
- run `npm run test` to test if every thing is working, `npm run test-pro` to test like pro

<h3>before making pr</h3>

- before making pull request or adding a feature, make sure to create an issue about what you are doing
- give your best

Read [UNDER_THE_HOOD.md](https://github.com/tanay-pingalkar/runner/edit/Docs/UNDER_THE_HOOD.md) to know how is runner's architecture
