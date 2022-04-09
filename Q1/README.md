# Q1. How to create a simple server in Node.js that returns Hello World?

**Step 01**: Create a project directory

```bash
mkdir myapp
cd myapp
```

**Step 02**: Initialize project and link it to npm

```bash
npm init
```

This creates a `package.json` file in your myapp folder. The file contains references for all npm packages you have downloaded to your project. The command will prompt you to enter a number of things.
You can enter your way through all of them EXCEPT this one:

```bash
entry point: (index.js)
```

Rename this to:

```bash
app.mjs
```

**Step 03**: Install Express in the myapp directory

```bash
npm i express
```

**Step 04**: app.mjs

```js
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})
```

**Step 05**: Run the app

```bah
node app.mjs
```
