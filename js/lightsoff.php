<?php 

// 1. initialize curl
$ch = curl_init();

// 2. set the options, including the url
curl_setopt($ch, CURLOPT_URL, "https://api.spark.io/v1/devices/53ff6a065067544838520687/relay");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "access_token=" . "f750faaf0ffc48d58c8a094f05da98498a777565" . "&params=" . "r1,LOW");
curl_exec($ch);
curl_close($ch);

?> 