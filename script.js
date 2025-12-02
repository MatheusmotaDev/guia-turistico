function reservarPeloZap() {
   
    let nome = prompt("Qual o seu nome para a reserva?");
    
    if (nome) {
        let texto = "Olá! Gostaria de fazer uma reserva para o tour no Mundo Espiritual. Meu nome é " + nome;
        let textoCodificado = encodeURIComponent(texto);
        window.open("https://wa.me/5581988373359?text=" + textoCodificado, "_blank");
    } else {
        alert("Reserva cancelada.");
    }
}




