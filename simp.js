function ans()  {
    var c = document.getElementById("j").value;
  
    var a = parseFloat(document.getElementById("ja").value);
    var b = parseFloat(document.getElementById("jay").value);
  
    if (c == "+") {
      document.getElementById("result").innerHTML = `Result : ${a + b}`;
    } else if (c == "-") {
      document.getElementById("result").innerHTML = `Result : ${a - b}`;
    } else if (c == "*") {
      document.getElementById("result").innerHTML = `Result : ${a * b}`;
    } else if (c == "/") {
      document.getElementById("result").innerHTML = `Result : ${a / b}`;
    } else {
      document.getElementById("result").innerHTML = `Please Enter Valid Operation`;
    }
  };