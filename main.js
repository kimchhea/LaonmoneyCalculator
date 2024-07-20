function Calculated() {
  var laon_Amount = parseFloat(document.getElementById("laon_Amount").value);
  var pay_rate = parseFloat(document.getElementById("pay_rate").value);
  var Payment_in_Years = parseFloat(
    document.getElementById("Payment_in_Years").value
  );
  var elements = document.getElementsByClassName("span");

  if (!pay_rate || !laon_Amount || !Payment_in_Years) {
    if (!laon_Amount) {
      elements[0].textContent = "សូមបញ្ចូលទឹកប្រាក់ !";
    } else {
      elements[0].textContent = "";
    }
    if (!pay_rate) {
      elements[1].textContent = "សូមបញ្ចូលភាគរយនៃកាប្រាក់!";
    } else {
      elements[1].textContent = "";
    }
    if (!Payment_in_Years) {
      elements[2].textContent = "សូមបញ្ចូលចំនួនរយះពេល !";
    } else {
      elements[2].textContent = "";
    }
    document.getElementById("result").innerText = "";
    document.getElementById("paypermonth").innerText = "";
    document.getElementById("fullpayrate").innerText = "";
  } else {
    var result =
      Payment_in_Years * ((laon_Amount * pay_rate) / 100) + laon_Amount;
    document.getElementById(
      "result"
    ).innerHTML = `<strong style="color:red;">ប្រាក់ដែលត្រូវបង់សរុបក្នុងរយះពេល ${Payment_in_Years} ខែ = ${result} $</strong>`;
    var paypermonth = (laon_Amount * pay_rate) / 100;
    document.getElementById(
      "paypermonth"
    ).innerHTML = `<strong style="color:red;">ការប្រាក់ដែលត្រូវបង់សរុបក្នុងរយះពេល 1 ខែ = ${paypermonth} $</strong>`;
    var fullpayrate = paypermonth * Payment_in_Years;
    document.getElementById(
      "fullpayrate"
    ).innerHTML = `<strong style="color:red;">ការប្រាក់ដែលត្រូវបង់សរុបក្នុងរយះពេល ${Payment_in_Years} ខែ = ${fullpayrate} $</strong>`;
    for (i = 0; i < elements.length; i++) {
      elements[i].textContent = "";
    }
  }
}

function reset() {
  document.getElementById("laon_Amount").value = "";
  document.getElementById("pay_rate").value = "";
  document.getElementById("Payment_in_Years").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("paypermonth").innerText = "";
  document.getElementById("fullpayrate").innerText = "";
  var elements = document.getElementsByClassName("span");
  for (i = 0; i < elements.length; i++) {
    elements[i].textContent = "";
  }
  document.getElementById("inputkh").value = "";
}

function show() {
  if (Calculated != "") {
    document.getElementById("result").innerHTML = `<strong> ${
      document.getElementById("result").innerHTML
    }</strong>`;
    document.getElementById("paypermonth").innerHTML = `<strong>${
      document.getElementById("paypermonth").innerHTML
    }</strong>`;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission or other default behavior
        const nextInput = inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        } else {
          Calculated(); // If it's the last input, calculate the results
        }
      }
    });
  });
});

function takeScreenshot() {
  html2canvas(document.body).then(function (canvas) {
    var link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
function convertkhmer() {
  var Ratekhmer = document.getElementById("inputkh").value;
  var laon_Amount = parseFloat(document.getElementById("laon_Amount").value);
  var pay_rate = parseFloat(document.getElementById("pay_rate").value);
  var Payment_in_Years = parseFloat(
    document.getElementById("Payment_in_Years").value
  );
  var elements = document.getElementsByClassName("span");
  for (i = 0; i < elements.length; i++) {
    elements[i].textContent = "";
  }
  if (!pay_rate || !laon_Amount || !Payment_in_Years || !Ratekhmer) {
    if (!laon_Amount) {
      elements[0].textContent = "សូមបញ្ចូលទឹកប្រាក់ !";
    } else {
      elements[0].textContent = "";
    }
    if (!pay_rate) {
      elements[1].textContent = "សូមបញ្ចូលភាគរយនៃកាប្រាក់!";
    } else {
      elements[1].textContent = "";
    }
    if (!Payment_in_Years) {
      elements[2].textContent = "សូមបញ្ចូលចំនួនរយះពេល !";
    } else {
      elements[2].textContent = "";
    }
    if (!Ratekhmer) {
      document.getElementById("result").innerText = "";
      document.getElementById("paypermonth").innerText = "";
      document.getElementById("fullpayrate").innerText = "";
      document.getElementById(
        "inputkh"
      ).placeholder = `សូមបញ្ចូលតម្លៃជាប្រាក់ខ្មែរ`;
    }
    document.getElementById("result").innerText = "";
    document.getElementById("paypermonth").innerText = "";
    document.getElementById("fullpayrate").innerText = "";
  } else {
    var result =
      (Payment_in_Years * ((laon_Amount * pay_rate) / 100) + laon_Amount) *
      Ratekhmer;
    document.getElementById(
      "result"
    ).innerHTML = `<strong style="color:red;">ប្រាក់ដែលត្រូវបង់សរុបក្នុងរយះពេល ${Payment_in_Years} ខែ = ${result} ៛</strong>`;
    var paypermonth = ((laon_Amount * pay_rate) / 100) * Ratekhmer;
    document.getElementById(
      "paypermonth"
    ).innerHTML = `<strong style="color:red;">ការប្រាក់ដែលត្រូវបង់សរុបក្នុងរយះពេល 1 ខែ = ${paypermonth} ៛</strong>`;
    var fullpayrate = paypermonth * Payment_in_Years * Ratekhmer;
    document.getElementById(
      "fullpayrate"
    ).innerHTML = `<strong style="color:red;">ការប្រាក់ដែលត្រូវបង់សរុបក្នុងរយះពេល ${Payment_in_Years} ខែ = ${fullpayrate} រ</strong>`;
    for (i = 0; i < elements.length; i++) {
      elements[i].textContent = "";
    }
  }
}
