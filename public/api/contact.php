<?php
// Permitir peticiones desde cualquier origen (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Manejar la petición OPTIONS (Preflight de CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
    exit();
}

// Obtener los datos del cuerpo de la petición (JSON)
$data = json_decode(file_get_contents("php://input"));

// Validar que se hayan recibido los datos requeridos
if (!isset($data->name) || !isset($data->email) || !isset($data->message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    exit();
}

// Sanitizar los datos para evitar inyecciones
$nombre = htmlspecialchars(strip_tags($data->name));
$email = htmlspecialchars(strip_tags($data->email));
$telefono = isset($data->phone) ? htmlspecialchars(strip_tags($data->phone)) : 'No proporcionado';
$empresa = isset($data->company) ? htmlspecialchars(strip_tags($data->company)) : 'No especificada';
$mensaje = htmlspecialchars(strip_tags($data->message));

// CONFIGURACIÓN DEL CORREO
$para = "ventas@segurytech.com"; // Email de Segurytech

$asunto = "Nueva Solicitud de Cotización/Contacto - SeguryTech";

// Construir el cuerpo del mensaje en formato HTML
$cuerpo = "
<html>
<head>
  <title>Nueva Solicitud de Contacto</title>
</head>
<body>
  <h2>Has recibido un nuevo mensaje desde la página web de SeguryTech:</h2>
  <table border='0' cellpadding='5'>
    <tr>
      <td><strong>Nombre:</strong></td>
      <td>{$nombre}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>{$email}</td>
    </tr>
    <tr>
      <td><strong>Teléfono:</strong></td>
      <td>{$telefono}</td>
    </tr>
    <tr>
      <td><strong>Empresa:</strong></td>
      <td>{$empresa}</td>
    </tr>
    <tr>
      <td><strong>Mensaje:</strong></td>
      <td>" . nl2br($mensaje) . "</td>
    </tr>
  </table>
</body>
</html>
";

// Cabeceras para el envío de correo HTML
$cabeceras = "MIME-Version: 1.0" . "\r\n";
$cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$cabeceras .= "From: no-reply@segurytech.com" . "\r\n";
$cabeceras .= "Reply-To: " . $email . "\r\n";

// Enviar el correo
if (mail($para, $asunto, $cuerpo, $cabeceras)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Mensaje enviado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error al enviar el correo"]);
}
?>
