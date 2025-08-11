let vetvlnie = function (tempriche) {
  if (tempriche < 0) {
    console.log("Опасно холодно");
  }
  if (tempriche > 0 && tempriche < 5) {
    console.log("Очень холодно");
  }
  if (tempriche > 5 && tempriche < 20) {
    console.log("Прохладно");
  }
  if (tempriche > 20) {
    console.log("Тепло");
  }
};

// vetvlnie(24);

let sales = function (finalCheck) {
  if (finalCheck > 1000 && finalCheck < 5000) {
    console.log("final price is " + finalCheck * 0.95);
  }
  if (finalCheck > 5000) {
    console.log("final price is " + finalCheck * 0.9);
  }
};

// sales(6050);

let ageCheck = function (age) {
  if (age < 18) {
    console.log("подросток");
  }
  if (age > 18 && age < 65) {
    console.log("взрослый");
  }
  if (age > 65) {
    console.log("пенсионер");
  }
};
// ageCheck(75);

// let calc = function (opertation, a, b) {
//   let result;
//   if (opertation === "add") {
//     result = a + b;
//     console.log(result);
//     return result;
//   }
//   if (opertation === "multi") {
//     result = a * b;
//     console.log(result);
//     return result;
//   }
//   if (opertation === "subtract") {
//     result = a - b;
//     console.log(result);
//     return result;
//   }
// };

// calc("subtract", 3, 2);

let calsSwitch = function (opertation, a, b) {
  let result;
  switch (opertation) {
    case "add":
      result = a + b;
      console.log(result);
      break;
    case "multi":
      result = a * b;
      console.log(result);
      break;
    case "subtract":
      result = a - b;
      E;
      console.log(result);
      break;
  }
};
calsSwitch("multi", 4, 3);
