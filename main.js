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
