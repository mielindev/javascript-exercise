// Bài tập JS buổi 5
function tinhDiem() {
  let diemChuan = document.querySelector("#goalScore").value * 1;
  let diemFirst = document.querySelector("#firstScore").value * 1;
  let diemSecond = document.querySelector("#secondScore").value * 1;
  let diemThrid = document.querySelector("#thridScore").value * 1;
  let areaPriority = document.querySelector(
    'input[name="areaPriority"]:checked'
  ).value;
  let entityPriority = document.querySelector(
    'input[name="entityPriority"]:checked'
  ).value;
  let tongDiem = diemFirst + diemSecond + diemThrid;
  switch (areaPriority) {
    case "area1":
      tongDiem += 2;
      break;
    case "area2":
      tongDiem += 1;
      break;
    case "area3":
      tongDiem += 0.5;
      break;
    case "area4":
      tongDiem += 0;
      break;
  }
  switch (entityPriority) {
    case "entity1":
      tongDiem += 2.5;
      break;
    case "entity2":
      tongDiem += 1.5;
      break;
    case "entity3":
      tongDiem += 1;
      break;
    case "entity4":
      tongDiem += 0;
      break;
  }
  console.log(tongDiem);
  if (
    tongDiem >= diemChuan &&
    diemFirst != 0 &&
    diemSecond != 0 &&
    diemThrid != 0
  ) {
    document.querySelector(
      ".manageresult"
    ).innerHTML = `Bạn đã đậu với số điểm ${tongDiem}`;
  } else {
    document.querySelector(
      ".manageresult"
    ).innerHTML = `Bạn đã rớt với số điểm ${tongDiem}`;
  }
}
