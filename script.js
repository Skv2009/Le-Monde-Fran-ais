function checkListening() {
  const inputs = document.querySelectorAll("#listening input");
  let score = 0;

  inputs.forEach(input => {
    if (input.value === input.dataset.a) {
      input.classList.add("correct");
      score++;
    } else {
      input.classList.add("wrong");
    }
  });

  document.getElementById("resultListening").innerText =
    "Правильных: " + score + " / " + inputs.length;
}

function checkTask3to9() {
  const answers = {
    q3: "2",
    q4: "2",
    q5: "1",
    q6: "2",
    q7: "3",
    q8: "1",
    q9: "1"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected) {
      if (selected.value === answers[key]) {
        selected.parentElement.classList.add("correct");
        score++;
      } else {
        selected.parentElement.classList.add("wrong");
      }
    }
  }

  document.getElementById("result3to9").innerText =
    "Правильных: " + score + " / 7";
}

function checkReading() {
  const inputs = document.querySelectorAll(".answers-grid input");
  let score = 0;

  inputs.forEach(input => {
    if (input.value.trim() === input.dataset.answer) {
      input.classList.add("correct");
      input.classList.remove("wrong");
      score++;
    } else {
      input.classList.add("wrong");
      input.classList.remove("correct");
    }
  });

  document.getElementById("result-reading").innerText =
    "Правильных ответов: " + score + " / " + inputs.length;
}

function checkTask11() {
  const inputs = document.querySelectorAll(".answer-table input");
  let score = 0;

  inputs.forEach(input => {
    if (input.value.trim() === input.dataset.answer) {
      input.classList.add("correct");
      input.classList.remove("wrong");
      score++;
    } else {
      input.classList.add("wrong");
      input.classList.remove("correct");
    }
  });

  document.getElementById("result11").innerText =
    "Правильных: " + score + " / " + inputs.length;
}

function checkTest() {
  const answers = {
    q12: "1",
    q13: "2",
    q14: "3",
    q15: "3",
    q16: "2",
    q17: "2",
    q18: "4"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected) {
      if (selected.value === answers[key]) {
        selected.parentElement.classList.add("correct");
        score++;
      } else {
        selected.parentElement.classList.add("wrong");
      }
    }
  }

  document.getElementById("result-test").innerText =
    "Правильных: " + score + " / 7";
}

function checkTask19() {
  const inputs = document.querySelectorAll(".reading-text input");
  let score = 0;

  inputs.forEach(input => {
    if (input.value.trim().toLowerCase() === input.dataset.answer) {
      input.classList.add("correct");
      input.classList.remove("wrong");
      score++;
    } else {
      input.classList.add("wrong");
      input.classList.remove("correct");
    }
  });

  document.getElementById("result19").innerText =
    "Правильных: " + score + " / " + inputs.length;
}

function checkTask25() {
  const inputs = document.querySelectorAll("#task2529 input");
  let score = 0;

  inputs.forEach(input => {
    if (input.value.trim().toLowerCase() === input.dataset.answer) {
      input.classList.add("correct");
      input.classList.remove("wrong");
      score++;
    } else {
      input.classList.add("wrong");
      input.classList.remove("correct");
    }
  });

  document.getElementById("result25").innerText =
    "Правильных: " + score + " / " + inputs.length;
}

function checkTask3036() {
  const answers = {
    q30: "3",
    q31: "1",
    q32: "4",
    q33: "1",
    q34: "3",
    q35: "4",
    q36: "1"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected) {
      if (selected.value === answers[key]) {
        selected.parentElement.classList.add("correct");
        score++;
      } else {
        selected.parentElement.classList.add("wrong");
      }
    }
  }

  document.getElementById("result3036").innerText =
    "Правильных: " + score + " / 7";
}