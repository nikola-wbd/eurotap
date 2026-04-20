<?php
// EuroTap Contact Form - PHP Backend
// Place this file on your shared hosting (cPanel/Namecheap/Hostinger/etc.)
// Configure the email address below where you want to receive messages

$RECIPIENT_EMAIL = "euro.tap6@gmail.com";
$RECIPIENT_NAME = "EuroTap";

// Handle CORS for AJAX requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit;
}

// Validate required fields
$name = isset($data['name']) ? trim($data['name']) : '';
$contact = isset($data['contact']) ? trim($data['contact']) : '';
$interest = isset($data['interest']) ? trim($data['interest']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($contact)) {
    http_response_code(400);
    echo json_encode(["error" => "Ime i kontakt podaci su obavezni"]);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$contact = htmlspecialchars($contact, ENT_QUOTES, 'UTF-8');
$interest = htmlspecialchars($interest, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Build email subject and body
$subject = "Nova poruka sa EuroTap web stranice";
if (!empty($interest)) {
    $subject .= " - " . $interest;
}

$email_body = "Primili ste novu poruku sa EuroTap web stranice:\n\n";
$email_body .= "Ime: " . $name . "\n";
$email_body .= "Kontakt: " . $contact . "\n";
$email_body .= "Interesovanje: " . (!empty($interest) ? $interest : "Nije navedeno") . "\n\n";
$email_body .= "Poruka:\n" . (!empty($message) ? $message : "Nema dodatne poruke") . "\n\n";
$email_body .= "---\nPoslano: " . date('d.m.Y H:i:s') . "\n";
$email_body .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: " . $RECIPIENT_EMAIL . "\r\n";
$headers .= "Reply-To: " . $contact . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($RECIPIENT_EMAIL, $subject, $email_body, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Poruka je uspješno poslana"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo."]);
}
?>
