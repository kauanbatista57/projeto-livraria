<?php
class Usuario {
  private $conn;
  private $table_name = "usuarios";

  public $id;
  public $nome_completo;
  public $email;
  public $senha;
  public $data_nascimento;
  public $estoque;

  public function __construct($db) {
    $this->conn = $db;
  }

  // Cadastrar usuário
  public function cadastrar() {
    $query = "INSERT INTO " . $this->table_name . " 
      (nome_completo, email, senha, data_nascimento,estoque) 
      VALUES (:nome_completo, :email, :senha, :data_nascimento, 0)";
    $stmt = $this->conn->prepare($query);

    $senhaHash = password_hash($this->senha, PASSWORD_DEFAULT);

    $stmt->bindParam(":nome_completo", $this->nome_completo);
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":senha", $senhaHash);
    $stmt->bindParam(":data_nascimento", $this->data_nascimento);

    return $stmt->execute();
  }

  public function adicionarEstoque($qtd) {
    $query = "UPDATE " . $this->table_name . " 
              SET estoque = estoque + :qtd 
              WHERE id = :id";

    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":qtd", $qtd);
    $stmt->bindParam(":id", $this->id);

    return $stmt->execute();
}

  // Fazer login
  public function login() {
    $query = "SELECT * FROM " . $this->table_name . " WHERE email = :email LIMIT 1";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":email", $this->email);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario && password_verify($this->senha, $usuario['senha'])) {
      unset($usuario['senha']);
      return [
        "success" => true,
        "message" => "Login realizado com sucesso.",
        "usuario" => $usuario
      ];
    }

    return ["success" => false, "message" => "E-mail ou senha incorretos."];
  }
}
?>
