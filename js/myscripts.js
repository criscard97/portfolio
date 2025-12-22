const email = "crismcard17@gmail.com";

document.getElementById("copyEmail").addEventListener("click", () => {
  navigator.clipboard.writeText(email)
    .then(() => {
      iziToast.info({
        title: '',
        message: 'Correo copiado al portapapeles!',
        position: 'topCenter',
        icon:'',
        image: './img/clipboardicon.svg',
        imageWidth: 35
      });

    })
    .catch(err => {
      console.error("Error al copiar", err);
    });
});