function enviarWhatsApp() {
    let nome = document.getElementById("nome").value.trim();
    let avaliacao = document.getElementById("avaliacao").value;
    let comentario = document.getElementById("comentario").value.trim();
    const numeroWhatsApp = "31971293038"; // Substitua pelo número da clínica

    // Validação do nome
    if (!nome) {
        alert("Por favor, preencha seu nome antes de enviar.");
        return;
    }

    let mensagem = `Olá, meu nome é ${nome}.
Minha avaliação do atendimento foi: ${avaliacao}.
Comentário: ${comentario || "Nenhum"}`;

    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

