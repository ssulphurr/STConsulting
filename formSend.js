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
    Username: "begemotys@gmail.com",
    Password: "C98B082010B044D8069702553DE7EF869168",
    To: "begemotys@gmail.com",
    From: "begemotys@gmail.com",
    Subject: "Нова заявка на консультацію",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal("Дані успішно надіслано!", "Ви натиснули на кнопку", "success");
    } else {
      swal("Error", "Ви натиснули на кнопку", "error");
    }
  });
}