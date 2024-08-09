function encriptar() {
    let texto = document.getElementById('inputText').value;
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = textoEncriptado;
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById('inputText').value;
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = textoDesencriptado;
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    let resultadoArea = document.getElementById('outputText');
    let botonCopiar = document.getElementById('botonCopiar');
    let textoResultado = document.querySelector('.resultado .titulo-no-encontrado');
    let mensajeResultado = document.querySelector('.resultado .texto-no-encontrado');

    if (texto === '') {
        // Mostrar mensaje de "Ningún mensaje fue encontrado"
        resultadoArea.classList.add('no-imagen');
        botonCopiar.classList.add('oculto');
        textoResultado.style.display = 'block';
        mensajeResultado.style.display = 'block';
    } else {
        // Mostrar botón de copiar e imagen
        resultadoArea.classList.remove('no-imagen');
        botonCopiar.classList.remove('oculto');
        textoResultado.style.display = 'none';
        mensajeResultado.style.display = 'none';
    }
}

function copiarTexto() {
    let textocopiado = document.getElementById('outputText');
    textocopiado.select();
    document.execCommand("copy");
    document.getElementById('outputText').value = '';
    document.getElementById('inputText').value = '';
    mostrarResultado('');
}
