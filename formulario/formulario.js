let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;
let pass2 = document.getElementById("password2").value;
let mail = document.getElementById("mail").value;
let contraseña = document.getElementById("pass").value;

document.getElementById("emailHelp").style.display = "none";
document.getElementById("passHelp").style.display = "none";
document.getElementById("mailHelp").style.display = "none";
document.getElementById("contraHelp").style.display = "none";

function crear() {
  email = document.getElementById("email").value;
  pass = document.getElementById("password").value;
  pass2 = document.getElementById("password2").value;

  if (pass === pass2) {
    email = document.getElementById("email").value;
    console.log("usuario creado");
  } else {
    alert("no coinciden las contraseñas");
  }
}



function iniciar() {
  if (mail === email && pass === contraseña) {
    console.log("Logeado");
  } else {
    alert("El mail o la contraseña no coinciden con un usuario creado");
  }
}

function validar(m) {
  if (m.value.length < 3) {
    document.getElementById("emailHelp").style.display = "block";
   
  } else {
    document.getElementById("emailHelp").style.display = "none";
  }
}
function validar1(p) {
  if (p.value.length < 3) {
    document.getElementById("passHelp").style.display = "block";
  } else {
    document.getElementById("passHelp").style.display = "none";
  }
}
function validar2(m) {
  if (m.value.length < 3) {
    document.getElementById("mailHelp").style.display = "block";
  } else {
    document.getElementById("mailHelp").style.display = "none";
  }
}
function validar3(c) {
  if (c.value.length < 3) {
    document.getElementById("contraHelp").style.display = "block";
  } else {
    document.getElementById("contraHelp").style.display = "none";
  }
}