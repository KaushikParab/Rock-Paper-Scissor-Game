let user = 0;
let comp = 0;

let user_count = document.querySelector(".user_count");
let comp_count = document.querySelector(".comp_count");

let msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");
let com_ch;

choices.forEach((ch) => {
  ch.addEventListener("click", () => {
    com_ch = com_gen();
    com_border(com_ch);
    const user_ch = ch.getAttribute("name");
    win_check(user_ch);
  });
});

const com_gen = () => {
  const options = ["rock", "paper", "scissors"];
  const rand_ch = Math.floor(Math.random() * 3);
  return options[rand_ch];
};

const win_check = (user_ch) => {
  if (user_ch === com_ch) {
    msg.innerText = "Game Was Draw!, Play again...";
    msg.style.backgroundColor = "blue";
  } else {
    let user_win = true;
    if (user_ch === "rock") {
      user_win = com_ch === "scissors" ? true : false;
    } else if (user_ch === "paper") {
      user_win = com_ch === "rock" ? true : false;
    } else if (user_ch === "scissors") {
      user_win = com_ch === "paper" ? true : false;
    }
    show_result(user_win, user_ch, com_ch);
  }
};

const show_result = (user_win, user_ch, com_ch) => {
  if (user_win) {
    user++;
    user_count.innerText = user;
    msg.innerText = `You win! Your ${user_ch} beats ${com_ch}`;
    msg.style.backgroundColor = "green";
  } else {
    comp++;
    comp_count.innerText = comp;
    msg.innerText = `You lost. ${com_ch} beats your ${user_ch}`;
    msg.style.backgroundColor = "red";
  }
};

let com_border = (com_ch) => {
  const allImg = document.querySelectorAll(".com1, .com2, .com3");
  allImg.forEach((i) => i.classList.remove("active-border"));

  if (com_ch === "rock") {
    document.querySelector(".com1").classList.add("active-border");
  } else if (com_ch === "paper") {
    document.querySelector(".com2").classList.add("active-border");
  } else if (com_ch === "scissors") {
    document.querySelector(".com3").classList.add("active-border");
  }
};
