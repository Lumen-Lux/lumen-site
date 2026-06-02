/**
 * LUMEN Contact Form — Google Apps Script Web App
 * Deploy como: "Ejecutar como: yo", "Acceso: Cualquiera"
 * 
 * Recibe POST desde lumen-lux.github.io/lumen-site
 * Reenvía a proyecto.lumen.lux@gmail.com
 */

function doPost(e) {
  try {
    const data = e.parameter;
    const name = data.name || "Anónimo";
    const email = data.email || "(no especificado)";
    const subject = data.subject || "General";
    const message = data.message || "(sin mensaje)";

    const emailBody = [
      "Nuevo contacto desde lumen-site",
      "",
      "Nombre: " + name,
      "Email: " + email,
      "Asunto: " + subject,
      "",
      "Mensaje:",
      message,
      "",
      "---",
      "Enviado desde el formulario web de LUMEN"
    ].join("\n");

    GmailApp.sendEmail(
      "proyecto.lumen.lux@gmail.com",
      "[LUMEN] " + subject + " — " + name,
      emailBody
    );

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "LUMEN contact endpoint ready" }))
    .setMimeType(ContentService.MimeType.JSON);
}
