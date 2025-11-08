<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include_once "./controllers/UsuarioController.php";

$controller = new UsuarioController();
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"));

switch ($method) {
  case 'POST':
    if (isset($_GET['action']) && $_GET['action'] === 'login') {
      $controller->login($data);
    } elseif (isset($_GET['action']) && $_GET['action'] === 'logout') {
      $controller->logout();
    } else {
      $controller->create($data);
    }
    break;

  case 'GET':
    $controller->readAll();
    break;

  default:
    echo json_encode(["error" => "Método não suportado."]);
    break;
}
?>
