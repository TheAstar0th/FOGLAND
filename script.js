/* =========================================================
   OPENING SCENE
   182 -> blush -> zoom to sketchbook -> reveal main book
   ========================================================= */

const openingScene = document.getElementById("openingScene");
const characterButton = document.getElementById("characterButton");
const floorSketchbook = document.getElementById("floorSketchbook");
const sketchbookSite = document.getElementById("sketchbookSite");

let introPlayed = false;

characterButton.addEventListener("click", () => {
  if (introPlayed) return;
  introPlayed = true;

  // First: 182 gets embarrassed.
  characterButton.classList.add("blushing");

  // Then: darken the room and zoom toward the sketchbook.
  setTimeout(() => {
    openingScene.classList.add("transitioning");
    floorSketchbook.classList.add("zooming");
  }, 650);

  // Fade the opening away.
  setTimeout(() => {
    openingScene.classList.add("hidden");
  }, 1550);

  // Reveal the full sketchbook website you already had.
  setTimeout(() => {
    openingScene.style.display = "none";
    sketchbookSite.classList.add("visible");
    window.scrollTo(0, 0);
  }, 2200);
});

const sheets = Array.from(document.querySelectorAll(".sheet"));
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const pageCounter = document.getElementById("pageCounter");

const artModal = document.getElementById("artModal");
const modalImage = document.getElementById("modalImage");
const modalArtist = document.getElementById("modalArtist");
const closeModal = document.getElementById("closeModal");

const foldedNote = document.getElementById("foldedNote");

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

  // Keep the cover rings visible for the closed cover and first opening only.
  if (current >= 2) {
    document.body.classList.add("past-cover");
  } else {
    document.body.classList.remove("past-cover");
  }

  // Closed cover stays centered. Once opened, switch to the two-page spread.
  if (current >= 1) {
    document.body.classList.add("book-open");
  } else {
    document.body.classList.remove("book-open");
  }

  const labels = ["Cover", "Welcome", "Fanart", "Messages", "Final page"];
  pageCounter.textContent = labels[current] ?? "Finished";

  if (current === 0) {
    nextBtn.textContent = "Open sketchbook →";
  } else if (current === sheets.length - 1) {
    nextBtn.textContent = "Final page →";
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

document.querySelectorAll(".art-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.modalImage;
    modalArtist.textContent = card.dataset.artist;
    artModal.showModal();
  });
});

closeModal.addEventListener("click", () => {
  artModal.close();
});

artModal.addEventListener("click", (event) => {
  const bounds = artModal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) {
    artModal.close();
  }
});

foldedNote.addEventListener("click", () => {
  foldedNote.classList.toggle("open");
});

updateBook();
