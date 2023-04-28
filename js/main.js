//bot token
var telegram_bot_id = "5844516616:AAG-uvqQFUL6N8zmOge2dqgVYvCAXWfI5zg"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id 
var chat_id = 6235222647; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, tel;
var ready = function () {
  goods = document.getElementById("goods").value;
  product = document.getElementById("product").value;
  u_name = document.getElementById("name").value;
  regions = document.getElementById("regions").value;
  tel = document.getElementById("tel").value;
  message = "Tovar: " + goods + "\nTovar soni: " + product + "\nIsmi: " + u_name + "\nViloyat: " + regions + "\nTel: " + tel;
};
var sendtelegram = function () {
  ready();  
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify({
      "chat_id": chat_id,
      "text": message
    })
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("goods").value = "";
  document.getElementById("product").value = "";
  document.getElementById("name").value = "";
  document.getElementById("regions").value = "";
  document.getElementById("tel").value = "";
  return false;
};

const elForm = document.querySelector(".form");
const elWrapper = document.querySelector(".wrapper");
const elText = document.querySelector(".text")

elForm.addEventListener("submit" , (evt) => {
  evt.preventDefault();
  // elWrapper.innerHTML = null;
  alert("Xabaringiz joʻnatildi 📤 Tez orada operator, buyurtmani tasdiqlash uchun siz bilan bog'lanadi📞 Iltimos, aloqa raqamingizni yoqib qo'ying 📲")

  // elText.textContent = "Xabaringiz Jo'natildi"

})