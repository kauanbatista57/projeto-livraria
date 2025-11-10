<?php
class Usuario {
  private $conn;
  private $table = "usuarios";

  public $id;
  public $nome_completo;
  public $email;
  public $senha;
  public $data_nascimento;

  public function __construct($db) {
    $this->conn = $db;
  }

  // Cadastrar
  public function cadastrar() {
    $query = "INSERT INTO " . $this->table . " (nome_completo, email, senha, data_nascimento)
              VALUES (:nome_completo, :email, :senha, :data_nascimento)";

    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":nome_completo", $this->nome_completo);
    $stmt->bindParam(":email", $this->email);
    $senhaHash = password_hash($this->senha, PASSWORD_DEFAULT);
    $stmt->bindParam(":senha", $senhaHash);
    $stmt->bindParam(":data_nascimento", $this->data_nascimento);

    return $stmt->execute();
  }

  // Login
  public function login() {
    $query = "SELECT * FROM " . $this->table . " WHERE email = :email LIMIT 1";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":email", $this->email);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario && password_verify($this->senha, $usuario['senha'])) {
      unset($usuario['senha']); // não retornar senha
      return $usuario;
    }
    return false;
  }
}
?>
