let FullName = prompt("Enter Your Name : ");
let div = document.getElementById("newdiv");
let para = document.createElement("p");
para.innerHTML = FullName;
div.appendChild(para);

let gender = prompt("Enter Your Gender : ");
let ol = document.createElement("ol");
let listgender = document.createElement("li");
listgender.innerHTML = gender;
ol.appendChild(listgender);
div.appendChild(ol);

function malek() {
  if (gender == "male") {
    alert("Welcome MR." + FullName);
  } else if (gender == "female") {
    alert("Welcome MS." + FullName);
  } else {
    while (gender != "male" || gender != "female") {
      gender = prompt("Enter Your Gender : ");

      if (gender == "male") {
        alert("Welcome MR." + FullName);
        break;
      } else if (gender == "female") {
        alert("Welcome MS." + FullName);
        break;
      }
    }
  }
}

malek();

let Q1 = confirm("Do you want buy donuts or coffee or ice cream or bakery ?");
if (Q1 == true) {
  var order = prompt("write the order want to buy ?");
  let listorder = document.createElement("li");
  listorder.innerHTML = order;
  ol.appendChild(listorder);
  div.appendChild(ol);
  alert("The order will prepare ");
} else {
  alert("thanks");
}
console.log("My name " + FullName + " " + "order is " + order);
let allorder = [FullName, gender, Q1, order];
for (let index = 0; index < allorder.length; index++) {
  console.log(allorder[index]);
}
let ages = prompt("Enter Your Age : ");
let listage = document.createElement("li");
listage.innerHTML = ages;
ol.appendChild(listage);
div.appendChild(ol);
