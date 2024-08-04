function encriptar() {
    let texto = document.getElementById('inputText').value;
    let textoEncriptado = texto.replace(/e/img, 'enter')
                               .replace(/i/img, 'imes')
                               .replace(/a/img, 'ai')
                               .replace(/o/img, 'ober')
                               .replace(/u/img, 'ufat');
    document.getElementById('outputText').value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById('inputText').value;
    let textoDesencriptado = texto.replace(/enter/img, 'e')
                                .replace(/imes/img, 'i')
                                .replace(/ai/img, 'a')
                                .replace(/ober/img, 'o')
                                .replace(/ufat/img, 'u');
    document.getElementById('outputText').value = textoDesencriptado;
    
}

function copiarTexto() {
    let textocopiado = document.getElementById('outputText');
    textocopiado.select();
    document.execCommand("copy");
    document.getElementById('outputText').value='';
    document.getElementById('inputText').value='';

}
