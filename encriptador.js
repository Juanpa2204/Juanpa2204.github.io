const textArea = document.querySelector(".input-encriptador");
const mensaje = document.querySelector(".resultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value=""; 
    mensaje.style.backgroundImage= "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["a","ai"],["e","enter"], ["i","imes"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();
   
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i],[1]);
        }        
    }
    return stringEncriptado; 
}


