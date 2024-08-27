//Variables para capturar el texto por el usuario y encriptarlo
const textInput = document.querySelector(".input_text");
const outputText = document.querySelector(".text_encrip");

//Funcion que va a llamar el boton 
function btnEncrip() {
    const textToEncrypt = textInput.value;
    const encryptedText = encriptation(textToEncrypt);
    outputText.textContent = encryptedText;
    textInput.value = "";
    outputText.style.backgroundImage = "none"
}

//Funcion respectiva para encriptar los tatos capturados
function encriptation(stringEncriptada) {
    
    //Matriz con los datos de encriptacion referentes a cada letra que se va a usar
    let datos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    //Un ciclo repetitivo for para recorrer la matriz
    for(let i = 0; i < datos.length; i++){
        if (stringEncriptada.includes(datos[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(datos[i][0], datos[i][1])
        }
    }
    //retornamos los hechos
    return stringEncriptada;
}

//Funcion que va a llamar el boton de desencriptar
function btnunEncrip() {
    const textToEncrypt = textInput.value;
    const encryptedText = unEncriptation(textToEncrypt);
    outputText.textContent = encryptedText;
    textInput.value = "";
    outputText.style.backgroundImage = "none"
}

//Funcion para desencriptar a partir de la funcion de enriptar
function unEncriptation(stringunEncriptada) {
    
    //Una matriz con los datos de encriptacion referentes a cada letra que se usaron
    let datos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringunEncriptada = stringunEncriptada.toLowerCase()
    
    //Un ciclo repetitivo for para recorrer la matriz
    for(let i = 0; i < datos.length; i++){
        if (stringunEncriptada.includes(datos[i][1])) {
            stringunEncriptada = stringunEncriptada.replaceAll(datos[i][1], datos[i][0])
        }
    }
    //retornamos los hechos
    return stringunEncriptada;
}

//Funcion de copiar usando la nevegacion del portapapeles para poder copiar lo que hay en el
function btnCopy() {
    const textToCopy = document.getElementById('result').value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
}
