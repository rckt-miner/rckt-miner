<?
	
	include("host.php");
	
	function shi($str) {
		$str =  str_replace("И", "%i%",  $str);
		$str =  str_replace("ш", "%s%",  $str);
		return $str;
	}
	
	$gid = shi($_POST['gid']);
	$f_name = shi($_POST['f_name']);
	$l_name = shi($_POST['l_name']);
	$country = shi($_POST['country']);
	$city = shi($_POST['city']);
	$adress = shi($_POST['adress']);
	$phone = shi($_POST['phone']);
	$m = $_POST['m'];
	
	

	$url = $host.'/sg.php';


	
	
	$data = array('gid' => $gid, 'f_name' => $f_name, 'l_name' => $l_name, 'country' => $country, 'city' => $city, 'adress' => $adress, 'phone' => $phone);

	$options = array(
		'http' => array(
			'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);


	header("Location: oferta.php?gid=$gid#to");


?>