const $display = document.querySelector(".display");
const $keys = document.querySelectorAll(".key");

const worker = new Worker("calcWorker.js");
worker.onmessage = (e) => {
  $display.textContent = e.data.result || "Error";
};

// const sanitizieExpression = (expr) => {
//   // return expr.replace(/[^0-9+\-*/().]/g, "");
// };

let expression = "";

$keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.textContent;

    if (value === "=") {
      worker.postMessage(expression);
    } else if (value === "x") {
      expression += "*";
      $display.textContent = expression;
    } else {
      expression += value;
      $display.textContent = expression;
    }
  });
});

const $clear = document.getElementById("clear");
$clear.onclick = () => {
  expression = "";
  $display.textContent = "";
};

const $delete = document.getElementById("delete");
$delete.onclick = () => {
  expression = expression.slice(0, -1);
  $display.textContent = expression;
};
