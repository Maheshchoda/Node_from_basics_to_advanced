//Debugging the js app with the Node cli

const http = require("http");

const port = 3000;

debugger;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    debugger;
    res.end("Hello world\n");
  })
  .listen(port, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Server started at port:${port}`);
  });

// The main node debug commands are as follows:
// • next, n: step to the next statement
// • cont, c: continue until the next debugger/break point
// • step, s: step inside the function call
// • out, o: step outside the function call
// • watch(expression): watch the expression

// The full list of commands is available through the help command or on the official
// web site (http://nodejs.org/api/debugger.html).
