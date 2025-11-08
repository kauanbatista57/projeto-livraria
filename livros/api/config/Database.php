<?php
class Database {
  private $host = "localhost";
  private $db_name = "livraria";
  private $username = "user_livraria";
  private $password = "123456"; 
  public $conn;

  public function getConnection() {
    $this->conn = null;
    try {
      // Driver pgsq
      $this->conn = new PDO(
        "pgsql:host={$this->host};dbname={$this->db_name}",
        $this->username,
        $this->password
      );
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $exception) {
      echo json_encode(["error" => "Erro de conexão: " . $exception->getMessage()]);
    }
    return $this->conn;
  }
}
?>
