function autoResize(textarea) {
    textarea.style.height = 'auto';  
    textarea.style.height = textarea.scrollHeight + 'px';  
}

function changeImage() {
    document.getElementById('image1').src = "femele.webp";
  }

  function changeImage2() {
    document.getElementById('image1').src = "photo_5406988802460867709_y.jpg";
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  function changeBackgroundColor2() {
    document.body.style.backgroundColor = 'white';
  }

  function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("You must type something");
      return;
    }
    let li = document.createElement("li");
    li.textContent = input;
    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });
    li.addEventListener("dblclick", function() {
      li.remove();
    });
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
  }

  function sortNumbers() {
    const input = document.getElementById('numberInput').value;
    const order = document.getElementById('sortOrder').value;
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    
  
    errorDiv.textContent = '';
    resultDiv.textContent = '';

    
    const numbers = input.split(',').map(num => num.trim());
    if (numbers.some(num => isNaN(num))) {
        errorDiv.textContent = 'Please enter only valid numbers separated by commas.';
        return;
    }

    const numArray = numbers.map(Number);

    if (order === 'ascending') {
        numArray.sort((a, b) => a - b);
    } else {
        numArray.sort((a, b) => b - a);
    }

    resultDiv.textContent = `Sorted Numbers: ${numArray.join(', ')}`;
}

function multiply() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = num1 * num2;
  document.getElementById("resultCalc").textContent = result;
}

function divide() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  if (num2 != 0) {
      const result = num1 / num2;
      document.getElementById("resultCalc").textContent = result;
  } else {
      document.getElementById("resultCalc").textContent = "Cannot divide by 0";
  }
}

function calculateTax() {
  let price = parseFloat(document.getElementById("carPrice").value);

  if (isNaN(price) || price <= 0) {
    alert("Please enter a valid car price.");
    return;
  }

  let taxRate;

  if (price > 10000) {
    taxRate = 0.25;
  } else if (price >= 5000) {
    taxRate = 0.20;
  } else {
    taxRate = 0.15;
  }

  let tax = price * taxRate;
  let totalPrice = price + tax;

  document.getElementById("taxResult").textContent = `Tax: $${tax.toFixed(2)} | Total Price with Tax: $${totalPrice.toFixed(2)}`;
}
 


