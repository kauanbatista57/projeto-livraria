<?php
include_once "./config/Database.php";
include_once "./models/Usuario.php";

class UsuarioController {
  private $db;
  private $usuario;

  public function __construct() {
    $database = new Database();
    $this->db = $database->getConnection();
    $this->usuario = new Usuario($this->db);
  }

 
  public function create($data) {
    if (!isset($data->nome) || !isset($data->usuario) || !isset($data->senha) || !isset($data->perfil)) {
      echo json_encode(["error" => "Campos obrigatórios não informados."]);
      return;
    }

    $this->usuario->nome = $data->nome;
    $this->usuario->usuario = $data->usuario;
    $this->usuario->senha = $data->senha;
    $this->usuario->perfil = $data->perfil;

    if ($this->usuario->create()) {
      echo json_encode(["message" => "Usuário criado com sucesso!"]);
    } else {
      echo json_encode(["error" => "Erro ao criar usuário."]);
    }
  }

  public function readAll() {
    $stmt = $this->usuario->readAll();
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($usuarios);
  }

  public function login($data) {
    if (!isset($data->usuario) || !isset($data->senha)) {
      echo json_encode(["error" => "Usuário e senha são obrigatórios."]);
      return;
    }

    $stmt = $this->usuario->findByUsuario($data->usuario);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($data->senha, $user['senha'])) {
      $token = base64_encode(random_bytes(24));

      session_start();
      $_SESSION['user'] = [
        "id" => $user['id'],
        "nome" => $user['nome'],
        "usuario" => $user['usuario'],
        "perfil" => $user['perfil'],
        "token" => $token
      ];

      echo json_encode(["message" => "Login bem-sucedido!", "token" => $token, "usuario" => $_SESSION['user']]);
    } else {
      echo json_encode(["error" => "Usuário ou senha inválidos."]);
    }
  }

  
  public function logout() {
    session_start();
    session_destroy();
    echo json_encode(["message" => "Logout realizado com sucesso."]);
  }
}
?>
