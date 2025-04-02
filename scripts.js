document.addEventListener("DOMContentLoaded", function () {
    // Inicializa el reproductor de Twitch
    new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: 400,
        channel: "NOMBRE_DE_TU_CANAL",
        parent: ["tudominio.com"]
    });

    // Reproduce el audio automáticamente
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play().catch(error => {
        console.log("Autoplay bloqueado: el usuario debe interactuar primero.");
    });
});
