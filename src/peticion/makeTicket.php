<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    
    date_default_timezone_set('America/Mexico_City');

    $json = file_get_contents('php://input');
    $dataObject = json_decode($json);

    $name = $dataObject->name;
    $sureName = $dataObject->sureName;
    $email = $dataObject->email;
    $developmet = $dataObject->development;
    $idea = $dataObject->idea;
    
    $fecha = date('l jS \of F Y h:i:s A');
    
    $content = 

        "******NUEVA COTIZACIÓN****** \n".
        "Fecha: $fecha"."\n\n".
        "-----NOMBRE Y MAIL-----"."\n\n".
        $name." ".$sureName."\n".
        $email."\n\n".
        "--------REQUIERE--------\n".
        $developmet."\n\n".
        "--------DESCRIPCIÓN--------\n".
        $idea
    ;

    //Nombre de fichero
    $fileName = "solicitud";
    $counter = 0;

    if(!file_exists("solicitudes/".$fileName."0.txt")){
            $fp = fopen("solicitudes/".$fileName."0.txt","wb");
            fwrite($fp,$content);
            fclose($fp);
            exit();
    }
    else{
        while (file_exists("solicitudes/".$fileName.$counter.".txt")){
            $counter ++ ;
         }
         $fp = fopen("solicitudes/".$fileName.$counter.".txt","wb");
         fwrite($fp,$content);
         fclose($fp);

    }
       
?>