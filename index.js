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
    ).innerHTML = `<h2 class="py-3">Bạn đã đậu với số điểm: ${tongDiem}đ</h2>`;
  } else {
    document.querySelector(
      ".manageresult"
    ).innerHTML = `<h2 class="py-3">Bạn đã rớt với số điểm: ${tongDiem}đ</h2>`;
  }
}
function tinhTienDien() {
  var soDien = document.querySelector("#soDien").value * 1;
  var hoTen = document.querySelector("#hoTen").value;
  var tongTien = null;
  if (soDien <= 50) {
    tongTien = soDien * 500;
  } else if (soDien <= 100) {
    tongTien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else if (soDien > 350) {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
  document.querySelector(
    ".electricresult"
  ).innerHTML = `<h2 class="py-3">Tên: ${hoTen} - Tiền tiện: ${tongTien.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}</h2>`;
}
function tinhThue() {
  var hoVaTen = document.querySelector("#fullName").value;
  var thuNhapNam = document.querySelector("#incomeYear").value * 1;
  var soNguoi = document.querySelector("#people").value * 1;
  var phanChiuThue = thuNhapNam - 4e6 - soNguoi * 1.6e6;
  var soThue = null;
  if (phanChiuThue <= 60e6) {
    soThue = phanChiuThue * 0.05;
  } else if (phanChiuThue <= 120e6) {
    soThue = 60e6 * 0.05 + (phanChiuThue - 60e6) * 0.1;
  } else if (phanChiuThue <= 210e6) {
    soThue = 60e6 * 0.05 + 60e6 * 0.1 + (phanChiuThue - 120e6) * 0.15;
  } else if (phanChiuThue <= 384e6) {
    soThue =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (phanChiuThue - 210e6) * 0.2;
  } else if (phanChiuThue <= 624e6) {
    soThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (phanChiuThue - 384e6) * 0.25;
  } else if (phanChiuThue <= 960e6) {
    soThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (phanChiuThue - 624e6) * 0.3;
  } else {
    soThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (phanChiuThue - 960e6) * 0.35;
  }
  document.querySelector(".thueresult").innerHTML = `<h2 class="py-3">
    Họ và tên: ${hoVaTen} - Thuế phải trả: ${soThue.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}
  </h2>`;
}
function onOffConnection() {
  var selectElement = document.querySelector("#catalogModel").value;
  if (selectElement == "businessModel") {
    document.querySelector("#manyConnect").className = "d-block";
  } else {
    document.querySelector("#manyConnect").className = "d-none";
  }
}
function tinhTienCap() {
  var selectElement = document.querySelector("#catalogModel").value;
  var highChannel = document.querySelector("#highChannel").value * 1;
  var manyConnect = document.querySelector("#manyConnect").value * 1;
  var idCustomer = document.querySelector("#idCustomer").value;
  var tongHoaDon = 0;
  if ((selectElement = "businessModel")) {
    if (manyConnect > 10) {
      tongHoaDon = 15 + 75 + (manyConnect - 10) * 5 + highChannel * 50;
    } else {
      tongHoaDon = 15 + 75 + highChannel * 50;
    }
  } else {
    tongHoaDon = 4.5 + 20.5 + highChannel * 7.5;
  }
  document.querySelector(".cablefeeresult").innerHTML = `<h2 class="py-3">
    Mã khách hàng: ${idCustomer} - Tiền cáp: ${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(tongHoaDon)}
  </h2>`;
}
