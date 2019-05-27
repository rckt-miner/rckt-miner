<?

include("../s.php");
global $conn;

$act = $_GET["act"];
if($act == "updateLog") {
	
	$sql = "SELECT * FROM `log` ORDER BY id DESC LIMIT 5";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			
			echo  "<p>".$row["text"]."</p>";
			
		}
	}else{
		return null;
	}

}
	$conn->close();

?>