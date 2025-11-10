<?php
require_once(__DIR__ . '/../config/database.php');
require_once(__DIR__ . '/../models/Usuario.php');

class UsuarioController {
  private $conn;
  private $usuario;

  public function __construct() {
    $database = new Database();
    $this->conn = $database->getConnection();
    $this->usuario = new Usuario($this->conn);
  }

  public function create($data) {
    if (!isset($data->nome_completo, $data->email, $data->senha, $data->data_nascimento)) {
      echo json_encode(["success" => false, "message" => "Dados incompletos."]);
      return;
    }

    $this->usuario->nome_completo = $data->nome_completo;
    $this->usuario->email = $data->email;
    $this->usuario->senha = $data->senha;
    $this->usuario->data_nascimento = $data->data_nascimento;

    if ($this->usuario->cadastrar()) {
      echo json_encode(["success" => true, "message" => "Usuário cadastrado com sucesso."]);
    } else {
      echo json_encode(["success" => false, "message" => "Erro ao cadastrar usuário."]);
    }
  }

  public function login($data) {
    if (!isset($data->email, $data->senha)) {
      echo json_encode(["success" => false, "message" => "E-mail e senha são obrigatórios."]);
      return;
    }

    $this->usuario->email = $data->email;
    $this->usuario->senha = $data->senha;

    $result = $this->usuario->login();

    if ($result) {
      echo json_encode(["success" => true, "usuario" => $result]);
    } else {
      echo json_encode(["success" => false, "message" => "E-mail ou senha incorretos."]);
    }
  }

  public function readAll() {
    $stmt = $this->conn->prepare("SELECT id, nome_completo, email, data_nascimento FROM usuarios");
    $stmt->execute();
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($usuarios);
  }
}
?>
