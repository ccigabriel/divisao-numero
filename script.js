function divideNumber() {
    // Obtém o valor de entrada do usuário
    const numero = document.getElementById('numberInput').value;
    
    // Verifica se o número está no intervalo adequado
    if (numero < 0 || numero > 9999) {
        alert("Por favor, digite um número de 0 a 9999.");
        return;
    }
    
    // Converte o número para string e preenche com zeros à esquerda até ter 4 dígitos
    const n = ('0000' + numero).slice(-4);
    
    // Extrai cada parte do número
    const milhar = n[0];
    const centena = n[1];
    const dezena = n[2];
    const unidade = n[3];
    
    // Exibe o resultado
    document.getElementById('result').innerHTML = `
        A unidade é <b>${unidade}</b>, a dezena <b>${dezena}</b>, a centena <b>${centena}</b> e o milhar <b>${milhar}</b>.
    `;
}
