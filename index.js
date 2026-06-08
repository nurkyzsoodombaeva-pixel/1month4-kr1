//1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
  return regExp.test(str);
};

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("12a35")); // false

//2

let time = 0;

setInterval(() => {
  time++;
  console.log("прошла секунда");
}, 1000);

//3

const count = () => {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > 10) {
      clearInterval(interval);
    }
  }, 1000);
  return "cxtbxbr lj 10";
};

console.log(count());

//4

const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let time10 = 10;
let interval;

start.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      time10--;
      timer.textContent = time10;
      if (time10 <= 0) {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  }
};

stop.onclick = () => {
  clearInterval(interval);
  interval = null;
};

reset.onclick = () => {
  clearInterval(interval);
  interval = null;
  time10 = 10;
  timer.textContent = time10;
};

//5

const block = document.querySelector("#block");

block.onclick = () => {
  block.classList.toggle("red");
};

// if (block.classList.contains("red")) {
//         block.classList.remove("red");
//     } else {
//         block.classList.add("red");
//     }

//6

const xhr = new XMLHttpRequest();

xhr.open("GET", "text/qw.JSON");

xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  console.log(data);
};

xhr.send();

//7

const loginInput = document.querySelector("#loginInput");
const checkBtn = document.querySelector("#checkBtn");
const userCard = document.querySelector("#userCard");
const message = document.querySelector("#message");

checkBtn.onclick = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./text/qa.json");

  xhr.onload = () => {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);

      const user = users.find((item) => item.login === loginInput.value.trim());

      if (user) {
        message.textContent = "Пользователь найден";

        userCard.innerHTML = `
          <h3>${user.login}</h3>
          <p>Роль: ${user.role}</p>
          <p>Email: ${user.email}</p>
        `;
      } else {
        userCard.innerHTML = "";
        message.textContent = "Пользователь не найден";
      }
    } else {
      message.textContent = "Ошибка загрузки данных";
    }
  };

  xhr.send();
};
