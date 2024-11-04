const esPalindromo = (texto) => {
    texto = texto.toLowerCase();
    const esAlfanumerico = (caracter) => /[a-z0-9]/.test(caracter);

    return [...texto].every((_, i, arr) => {
        const izquierda = esAlfanumerico(arr[i]) ? arr[i] : null;
        const derecha = esAlfanumerico(arr[arr.length - 1 - i]) ? arr[arr.length - 1 - i] : null;
        
        return izquierda && derecha ? izquierda === derecha : true;
    });
}

console.log(esPalindromo("sedes") ? "Es un palindromo" : "No es un palindromo");
