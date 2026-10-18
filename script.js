
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    respuesta.textContent = "Enviando tu cotización...";

    try {
        const datos = new FormData(formulario);

        const response = await fetch(formulario.action, {
            method: "POST",
            body: datos,
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("No se pudo enviar la cotización.");
        }

        respuesta.textContent =
            "¡Gracias! Tu cotización se envió correctamente.";

        formulario.reset();

    } catch (error) {
        respuesta.textContent =
            "No se pudo enviar la cotización. Inténtalo nuevamente.";
    }
});
