

const sheets = Array.from(document.querySelectorAll(".sheet"));
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const pageCounter = document.getElementById("pageCounter");

let current = 0;

function updateBook() {
  sheets.forEach((sheet, index) => {
    if (index < current) {
      sheet.classList.add("flipped");
      sheet.style.zIndex = index;
    } else {
      sheet.classList.remove("flipped");
      sheet.style.zIndex = sheets.length - index;
    }
  });

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === sheets.length;

  if (current >= 2) {
    document.body.classList.add("past-cover");
  } else {
    document.body.classList.remove("past-cover");
  }

  const labels = ["Cover", "Welcome", "Fanart", "Messages", "Final page"];
  pageCounter.textContent = labels[current] ?? "Finished";

  if (current === 0) {
    nextBtn.textContent = "Open sketchbook →";
  } else if (current === sheets.length) {
    nextBtn.textContent = "The end";
  } else {
    nextBtn.textContent = "Turn page →";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < sheets.length) {
    current += 1;
    updateBook();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    updateBook();
  }
});

updateBook();
