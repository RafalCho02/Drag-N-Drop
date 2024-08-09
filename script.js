const $fill = $(".fill");
const $empties = $(".empty");

$fill.on("dragstart", dragStart);
$fill.on("dragend", dragEnd);

$empties.on("dragover", dragOver);
$empties.on("dragenter", dragEnter);
$empties.on("dragleave", dragLeave);
$empties.on("drop", dragDrop);

function dragStart() {
  $(this).addClass("hold");
  setTimeout(() => $(this).addClass("invisible"), 0);
}

function dragEnd() {
  $(this).removeClass("hold invisible").addClass("fill");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  $(this).addClass("hovered");
}

function dragLeave() {
  $(this).removeClass("hovered").addClass("empty");
}

function dragDrop() {
  $(this).removeClass("hovered").addClass("empty");
  $(this).append($fill);
}
