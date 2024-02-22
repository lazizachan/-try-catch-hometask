let nom = document.querySelector("#nom");
let kod = document.querySelector("#kod");
let shahar = document.querySelector("#shahar");
let xat = document.querySelector("#xat");
let bango = document.querySelector("#bango");

function checkData() {
  let imya = document.querySelector("#name").value;
  let parol = document.querySelector("#password").value;
  let gorod = document.querySelector("#gorod").value;
  let pochta = document.querySelector("#email").value;
  let numTel = document.querySelector("#tel").value;

  try {
    if (imya == "" || parol == "" || gorod == "" || pochta == "") {
      throw new Error("Zapolnite pustuyu stroku");
    }
    if (!pochta.includes("@")) {
      alert("Zabili sobachku @");
    }
    if (isNaN(numTel)) {
      alert(" v nomer tel Napishi tolko cifri");
    }
  } catch (error) {
    alert(error.message);
  }
  nom.value = imya;
  kod.value = parol;
  shahar.value = gorod;
  xat.value = pochta;
  bango.value = numTel;

  let userData = {
    imya: imya,
    parol: parol,
    gorod: gorod,
    pochta: pochta,
    numTel: numTel,
  };
  console.log(userData);
}
