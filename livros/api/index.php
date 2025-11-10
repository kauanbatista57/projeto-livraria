<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/controllers/UsuarioController.php';


$controller = new UsuarioController();
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

if ($method === 'OPTIONS') {
  http_response_code(200);
  exit;
}

$input = file_get_contents("php://input");
$data = json_decode($input);

switch ($method) {
  case 'POST':
    if ($action === 'login') {
      $controller->login($data);
    } elseif ($action === 'create') {
      $controller->create($data);
    } else {
      echo json_encode(["success" => false, "message" => "Ação POST inválida."]);
    }
    break;

  case 'GET':
    $controller->readAll();
    break;

  default:
    echo json_encode(["success" => false, "message" => "Método não suportado."]);
    break;
}
?>
