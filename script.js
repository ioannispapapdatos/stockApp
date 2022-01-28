// alert("hello");

function stock() {
  const stockValue = document.querySelector("#stockValue").value;
  const display = document.querySelector("#display");
  const stockmsg = document.querySelector("#stock_msg");

  // we selct the input. value

  //    we select the display <p>

  //   let stock = 0;
  if (stockValue < 10) {
    // display.innerHTML = stockValue;
    stockmsg.innerHTML = "You need To order";
    stockmsg.style.background = "orange";
    display.innerHTML = stockValue;
  } else {
    stockmsg.innerHTML = "Stock is Ok";
    stockmsg.style.background = "lightgreen";
    display.innerHTML = stockValue;
  }
}

// reset code....

const resetBtn = document.querySelector("#reset_btn");

resetBtn.addEventListener("click", function () {
  stockValue.value = 0;
  display.innerHTML = 0;
  stockValue.innerHTML = 0;
});
