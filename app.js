// let FullName = prompt("Enter Your Name : ");
// let div = document.getElementById("newdiv");
// let para = document.createElement("p");
// para.innerHTML = FullName;
// div.appendChild(para);

// let gender = prompt("Enter Your Gender : ");
// let ol = document.createElement("ol");
// let listgender = document.createElement("li");
// listgender.innerHTML = gender;
// ol.appendChild(listgender);
// div.appendChild(ol);

// function malek() {
//   if (gender == "male") {
//     alert("Welcome MR." + FullName);
//   } else if (gender == "female") {
//     alert("Welcome MS." + FullName);
//   } else {
//     while (gender != "male" || gender != "female") {
//       gender = prompt("Enter Your Gender : ");

//       if (gender == "male") {
//         alert("Welcome MR." + FullName);
//         break;
//       } else if (gender == "female") {
//         alert("Welcome MS." + FullName);
//         break;
//       }
//     }
//   }
// }

// malek();

// let Q1 = confirm("Do you want buy donuts or coffee or ice cream or bakery ?");
// if (Q1 == true) {
//   var order = prompt("write the order want to buy ?");
//   let listorder = document.createElement("li");
//   listorder.innerHTML = order;
//   ol.appendChild(listorder);
//   div.appendChild(ol);
//   alert("The order will prepare ");
// } else {
//   alert("thanks");
// }
// console.log("My name " + FullName + " " + "order is " + order);
// let allorder = [FullName, gender, Q1, order];
// for (let index = 0; index < allorder.length; index++) {
//   console.log(allorder[index]);
// }
// let ages = prompt("Enter Your Age : ");
// let listage = document.createElement("li");
// listage.innerHTML = ages;
// ol.appendChild(listage);
// div.appendChild(ol);

//////////////////////////////////////////

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.getElementById("newdiv");
  let p = document.createElement("p");

  let name = document.getElementById("name").value;

  p.innerHTML = name;
  div.appendChild(p);
  ////////////////////////////
  let p1 = document.createElement("p");

  let gender = document.getElementById("gender").value;

  p1.innerHTML = gender;
  div.appendChild(p1);
  //////////////////////////
  let p2 = document.createElement("p");

  let age = document.getElementById("age").value;

  p2.innerHTML = age;
  div.appendChild(p2);
  //////////////////////////
  let p3 = document.createElement("p");

  let order = document.getElementById("ordertype").value;

  p3.innerHTML = order;
  div.appendChild(p3);

  let hot = document.getElementById("hot");
  if (hot.checked == true) {
    let hotText = document.createElement("p");
    hotText.innerHTML = "Drink : Hot";
    div.appendChild(hotText);
  }

  let cold = document.getElementById("cold");
  if (cold.checked == true) {
    let coldText = document.createElement("p");
    coldText.innerHTML = "Drink : cold";
    div.appendChild(coldText);
  }
});
