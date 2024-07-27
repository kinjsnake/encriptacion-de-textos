function encriptar(){
    const inputText = document.getElementById('inputText').value;
    const encryptedText =btoa(inputText);
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('inputText').value="";
}
function desencriptar(){
    const inputText = document.getElementById('inputText').value;
    try{
        const decryptedText = atob(inputText);
        document.getElementById('outputText').value = decryptedText;

    }
    catch (e){
        alert("texto invalido para encriptacion");
    }
}

function copiarTexto(){
    const encriptedText = document.getElementById('outputText').value;
    if(encriptedText.trim() === ''){
        alert('No hay texto para copiar');
        return;
    }
    const textArea = document.createElement('textarea');
    textArea.value = encriptedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    document.getElementById('outputText').value='';
    alert('texto encriptado copiado en el portapapeles');
    
    
}