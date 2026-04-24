// Função que cria a "pausa" no código
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const letraMusica = [
    { texto: "🎶 Você sabe que eu nunca escondi nada...", tempo: 3000 },
    { texto: "De onde eu vim, tudo que eu gostava...", tempo: 4000 },
    { texto: "No nosso primeiro beijo você lembra...", tempo: 4000 },
    { texto: "Que eu já tava traiada? 🤠...", tempo: 5000 },
    { texto: "Ele falou que se eu botasse o meu chapéu acabou...", tempo: 6000 },
    { texto: "Ele queria fazer eu mudar lá do interior...", tempo: 4000 },
    { texto: "Ele falou pra eu escolher entre o rodeio e o amor...", tempo: 5000 },
    { texto: "🔥 OLHA ONDE EU TÔ! 🔥", tempo: 3000 },
    { texto: "OLHA ONDE EU TÔ!", tempo: 2000 }
];

async function iniciarKaraoke() {
    console.log("Ajuste o som e prepare o chapéu... 🎶\n");
    await esperar(2000);

    for (let linha of letraMusica) {
        console.clear(); // Limpa o terminal para focar na frase atual
        
        // Estética do terminal
        console.log("==========================================");
        console.log(`\n    ${linha.texto}\n`);
        console.log("==========================================");

        await esperar(linha.tempo); // Espera o tempo definido para essa frase
    }

    
}

iniciarKaraoke();