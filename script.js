function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = window.document.getElementById("res");
  if (fano.value == 0 || fano.value > ano) {
    window.alert("ERRO, tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fano.value;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "bebehomem.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "jovemhomem.jpg");
        // Adolescente
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "homem.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "homemvelho.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'bebemulher.jpg')
      } else if (idade <= 18) {
        img.setAttribute('src', 'jovemmulher.jpg')
        // Adolescente
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher.jpg')
        // Adulta
      } else {
        img.setAttribute('src', 'mulheridosa.jpg')
        //Idosa
      }
    }
  }
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  res.appendChild(img);
}
