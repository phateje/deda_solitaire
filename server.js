import * as http from 'http';
import * as fs from 'fs';

const PORT = 8080;

fs.readFile('./index.html', function (err, html) {

  if (err) throw err;

  http.createServer(function (request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  }).listen(PORT);
});

// https://www.youtube.com/watch?v=6BozpmSjk-Y