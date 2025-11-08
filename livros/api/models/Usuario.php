<?php
class Usuario {
  private $conn;
  private $table = "usuarios";

  public $id;
  public $nome;
  public $usuario;
  public $senha;
  public $perfil;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function create() {
    $query = "INSERT INTO {$this->table} (nome, usuario, senha, perfil)
              VALUES (:nome, :usuario, :senha, :perfil)";
    $stmt = $this->conn->prepare($query);
    $this->senha = password_hash($this->senha, PASSWORD_BCRYPT);
    $stmt->bindParam(':nome', $this->nome);
    $stmt->bindParam(':usuario', $this->usuario);
    $stmt->bindParam(':senha', $this->senha);
    $stmt->bindParam(':perfil', $this->perfil);
    return $stmt->execute();
  }

  public function readAll() {
    $query = "SELECT id, nome, usuario, perfil FROM {$this->table} ORDER BY id";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return $stmt;
  }

  public function findByUsuario($usuario) {
    $query = "SELECT * FROM {$this->table} WHERE usuario = :usuario LIMIT 1";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':usuario', $usuario);
    $stmt->execute();
    return $stmt;
  }
}
?>
