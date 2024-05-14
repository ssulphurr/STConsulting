function emailSend() {
  var userName = document.getElementById("name").value;
  var userPhone = document.getElementById("phone").value;
  var userCompanyName = document.getElementById("companyName").value;
  var userEmailAddress = document.getElementById("emailAddress").value;
  var userOpisPotrebi = document.getElementById("opisPotrebi").value;

  var messageBody =
    "Ім'я: " +
    userName +
    "<br/> Телефон: " +
    userPhone +
    "<br/> Назва компанії: " +
    userCompanyName +
    "<br/> Електронна адреса: " +
    userEmailAddress +
    "<br/> Опис потреби: " +
    userOpisPotrebi;

  console.log(messageBody);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chaikovsky.serhii@gmail.com",
    Password: "C1A651F95F4C1E3C15F7411093E24D4768DE",
    To: "chaikovsky.serhii@gmail.com",
    From: "chaikovsky.serhii@gmail.com",
    Subject: "Нова заявка на консультацію ST Cnsulting",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal(
        "Заявку успішно надіслано!",
        "Очікуйте на зворотний зв'язок найближчим часом",
        "success"
      );
    } else {
      swal(
        "Error",
        "Щось пішло не так. Мої контакти за посиланнями нижче",
        "error"
      );
    }
  });
}
