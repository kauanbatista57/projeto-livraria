<?php

error_reporting(0);
ini_set('display_errors', 0);
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


require_once __DIR__ . "/controllers/UsuarioController.php";

$controller = new UsuarioController();
$method = $_SERVER['REQUEST_METHOD'];

$input = file_get_contents("php://input");
$data = json_decode($input);

switch ($method) {
  case 'POST':
    if (isset($_GET['action']) && $_GET['action'] === 'login') {
      $controller->login($data);
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
