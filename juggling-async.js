var http = require("http");

var links = [2, 3, 4];

var buffer = [];

(function render(index) {
  http
    .get(process.argv[links[index]], function (response) {
      response.setEncoding("utf8");

      response.on("data", function (chunk) {
        if (buffer[index] === undefined) {
          buffer[index] = "";
        }
        buffer[index] += chunk;
      });
      response.on("end", function () {
        var newIndex = index + 1;
        if (links[newIndex] !== undefined) {
          render(newIndex);
        } else {
          return renderOutput();
        }
      });
      response.on("error", console.error);
    })
    .on("error", console.error);
})(0); //self-calling function

function renderOutput() {
  buffer.forEach(function (elem) {
    console.log(elem);
  });
}
