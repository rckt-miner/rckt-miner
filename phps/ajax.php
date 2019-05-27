<?

include("../s.php");
global $conn;

$act = $_GET["act"];

if($act == "gidInfo") {
	$gid = $_GET["gid"];
	
	$sql = "SELECT * FROM `members` WHERE gid='$gid'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			echo "<img src='".$row["ava"]."' /><br><br>";
			echo "<p>GID: ".$row["gid"]."</p>";
			echo "<p>Имя: ".$row["f_name"]."</p>";
			echo "<p>Фамилия: ".$row["l_name"]."</p>";
			echo "<p>VK: <a target='_blank' href='https://vk.com/id".$row["uid"]."'>".$row["uid"]."</a></p>";
exit;

			
		}
	}else{
		return null;
	}

}




if($act == "updateLog") {
	
	$sql = "SELECT * FROM `log` ORDER BY id DESC LIMIT 11";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$date = gmdate("H:i:s", $row["date"] + 10800);
			$onclick  = 'gidInfo("'.$row["gid"].'")';
			
			if($row["type"] == "newuser") {
				echo  "<li class='list-group-item' style='padding: 0.75rem 1.25rem;'><strong>$date</strong> / Новый пользователь <a href='javascript:void(0)' onclick='$onclick'>".$row["gid"]."</a></li>";
			}
			
			if($row["type"] == "pay") {
				echo  "<li class='list-group-item list-group-item-warning' style='padding: 0.50rem 1.25rem;'><strong>$date</strong> / [".$row["count"]."] Переход на оплату <a href='javascript:void(0)' onclick='$onclick'>".$row["gid"]."</a></li>";
			}
		}
	}else{
		return null;
	}

}
	$conn->close();

?>