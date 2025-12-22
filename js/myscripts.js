const email = "crismcard17@gmail.com";

  document.getElementById("copyEmail").addEventListener("click", () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles 📋");
      })
      .catch(err => {
        console.error("Error al copiar", err);
      });
  });