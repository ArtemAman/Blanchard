<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    $fio = $_POST['fio'];
    $tel = $_POST['tel'];
    $fio = htmlspecialchars($fio);
    $tel = htmlspecialchars($tel);
    $fio = urldecode($fio);
    $tel = urldecode($tel);
    $fio = trim($fio);
    $tel = trim($tel);

    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'blanchardpost@mail.ru';                     //SMTP username
    $mail->Password   = 'ihanun32';                               //SMTP password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 25;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('blanchardpost@mail.ru', 'Mailer');
    $mail->addAddress('artyom.aman@yandex.ru', 'Joe User');      //Add a recipient



    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Заявка с сайта blanchard';
    $mail->Body    = "ФИО:".$fio.". Телефон: ".$tel;


    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


?>


<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://blanchard-site-online.tmweb.ru/");}
window.setTimeout("changeurl();",3000);
</script>




