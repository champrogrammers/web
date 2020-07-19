<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


    $json = file_get_contents('php://input');
    $dataObject = json_decode($json);

    $emailClient = "prograchamp@gmail.com";

    $name = $dataObject->name;
    $sureName = $dataObject->sureName;
    $email = $dataObject->email;
    $developmet = $dataObject->development;
    $idea = $dataObject->idea;

    echo "SendTo: ". $emailClient;
    echo "Nombre: ". $name;
    echo "Apellido: ". $sureName;
    echo "email: ". $email;
    echo "Tipo:". $developmet;
    echo "Descripcion: ". $idea;

    $subject = $name. " Cotización desde la pagina web";

    $message = "
        <html>
            <head>
                <title>Mail from us website</title>
            </head>

        <body>
        <div style='background:#A22C29;width:65%;padding:0.5rem;margin:auto;color: #D6D5C9;'>
            <p style='text-align: center;font-size: 2rem;'>Posible cliente</p>
            
            <p style='text-align: center;margin-top: -1rem;font-size: 1.3rem;'>
            Ha contactado desde la página web</p>
            
            <div style='padding: 3rem;padding-top: 0;background: white;padding-bottom: 0;'>
            <div style='padding: 1rem'>
                <p style='font-size: 1.4rem;color: black;'>Nombre: $name</p>
                <p style='font-size: 1.4rem;color: black;'>Apellido: $sureName</p>
                <p style='font-size: 1.4rem;color: black;'>Email: $email</p>
                <p style='font-size: 1.4rem;color: black;'>Requiero: $developmet</p>
                <p style='font-size: 1.4rem;color: red;'>Descrición:</p>
                <p style='color: black;font-size: 17px;'>$idea</p>
            </div>
                
            </div>
            
        </div>
            
        </body>
        </html>
";

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


    // send email
    mail($emailClient, $subject ,$message, $headers) or die ("Su mensaje no se envio.");
    

?>