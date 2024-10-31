function myFunction() {
  // Lấy tất cả các trường cần kiểm tra
  const name = document.querySelector('input[placeholder="Nguyễn Văn A"]');
  const phone = document.querySelector('input[placeholder="VD : 09783426752"]');
  const address = document.querySelector(
    'input[placeholder="Số nhà - Đường - Phường - Quận"]'
  );
  const city = document.querySelector('input[placeholder="VD : Hà Nội"]');
  const country = document.querySelector('input[placeholder="VD : Việt Nam"]');
  const zip = document.querySelector('input[placeholder="VD : 123 456"]');
  const cardName = document.querySelector(
    'input[placeholder="VD : Nguyễn Văn A"]'
  );
  const cardNumber = document.querySelector(
    'input[placeholder="1111-2222-3333-4444"]'
  );
  const expMonth = document.querySelector(
    'input[placeholder="VD : Tháng một"]'
  );
  const expYear = document.querySelector('input[placeholder="VD : 2022"]');
  const cvv = document.querySelector('input[placeholder="1234"]');

  // Tạo một mảng để lưu trữ thông báo lỗi
  const errorMessages = [];

  // Kiểm tra trường nào trống
  if (!name.value) errorMessages.push("Tên khách hàng không được để trống");
  if (!phone.value) errorMessages.push("Số điện thoại không được để trống");
  if (!address.value) errorMessages.push("Địa chỉ không được để trống");
  if (!city.value) errorMessages.push("Thành phố không được để trống");
  if (!country.value) errorMessages.push("Quốc gia không được để trống");
  if (!zip.value) errorMessages.push("Mã Zip không được để trống");
  if (!cardName.value) errorMessages.push("Tên trên thẻ không được để trống");
  if (!cardNumber.value)
    errorMessages.push("Số thẻ tín dụng không được để trống");
  if (!expMonth.value) errorMessages.push("Tháng hết hạn không được để trống");
  if (!expYear.value) errorMessages.push("Năm hết hạn không được để trống");
  if (!cvv.value) errorMessages.push("CVV không được để trống");

  // Nếu có lỗi, hiển thị thông báo và ngừng thực hiện
  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return;
  }

  // Kiểm tra định dạng số điện thoại
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value)) {
    errorMessages.push("Số điện thoại phải có 10 số");
  }

  // Kiểm tra định dạng mã Zip
  const zipRegex = /^\d{8}$/;
  if (!zipRegex.test(zip.value)) {
    errorMessages.push("Mã Zip phải có 8 số");
  }

  // Kiểm tra định dạng số thẻ tín dụng
  if (cardNumber.value.length < 10) {
    errorMessages.push("Số thẻ tín dụng phải có ít nhất 10 số");
  }

  // Kiểm tra tháng
  const month = parseInt(expMonth.value);
  if (isNaN(month) || month < 1 || month > 12) {
    errorMessages.push("Tháng hết hạn phải nằm trong khoảng 1 đến 12");
  }

  // Kiểm tra năm
  const year = parseInt(expYear.value);
  if (isNaN(year) || year < 2024) {
    errorMessages.push("Năm hết hạn phải lớn hơn hoặc bằng 2024");
  }

  // Nếu có lỗi, hiển thị thông báo và ngừng thực hiện
  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return;
  }

  // Nếu tất cả thông tin hợp lệ
  alert("Thanh toán thành công");
}

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("img[src='images/card_img.png']");
  if (image) {
    image.addEventListener("click", function () {
      location.reload(); // Tải lại trang khi nhấp vào ảnh
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const paymentOptions = document.querySelectorAll(".payment-option");

  paymentOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Xóa class 'selected' từ tất cả các tùy chọn
      paymentOptions.forEach((opt) => opt.classList.remove("selected"));

      // Thêm class 'selected' vào tùy chọn được bấm
      this.classList.add("selected");
    });
  });
});
