<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="../img/favicon-1.png" />
    <link rel="stylesheet" href="../css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css"
    />
    <title>NERD - CONTACTO</title>
  </head>
  <body>
  <?php 
$myemails = 'development@nerdmedia.pe, alonso@nerdmedia.pe, hola@nerdsvideo.com';
$name = $_POST['name'];
$tel = $_POST['telephone'];
$email = $_POST['email'];
$message = $_POST['message'];

$cuerpo = '
<html>  
<body>  
<h1>Hola Nerd Video!</h1> 
<p>Tienes un nuevo mensaje:</p>
<p> <b>Nombre :</b> '.$name .'</p>
<p> <b>Teléfono :</b> '.$tel .'</p>
<p> <b>Email :</b> '.$email .'</p>
<p> <b>Mensaje :</b> '.$message .'</p>
</body> 
</html> 
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

$to = $myemails;
$email_subject = "Contacto Nerd Video Studio";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n 
Telefono: $tel \n Email: $email \n Mensaje: \n $message";
$headers .= "From: $email";


mail($to, $email_subject, $cuerpo, $headers);
?>
    <div class="page-loader">
      <div><img src="../img/gif_loading.gif" alt="" /></div>
    </div>
    <main>
      <section class="thankspage">
        <div class="container">
          <div class="top">
            <img src="../img/video-studio.png" alt="" class="video-studio-n" />
            <a href="../index.html" class="close-contacto">
              <img src="../img/equis.svg" alt="" />
            </a>
          </div>
        </div>

        <div class="contenido-thanks">
          <div class="slider-thanks">
            <!-- <div class="owl-carousel owl-theme thanks-carousel">
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
            </div> -->
            <div class="marquee">
              <ul class="marquee-content">
                <li>¡GRACIAS! TE ESCRIBÍMOS EN BREVE</li>
                <li>¡GRACIAS! TE ESCRIBÍMOS EN BREVE</li>
                <li>¡GRACIAS! TE ESCRIBÍMOS EN BREVE</li>
              </ul>
            </div>
          </div>
          <div class="slider-thanks2">
            <!-- <div class="owl-carousel owl-theme thanks-carousel2">
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
            </div> -->
            <div class="marquee">
              <ul class="marquee-content marquee-content2">
                <li>TE ESCRIBÍMOS EN BREVE ¡GRACIAS!</li>
                <li>TE ESCRIBÍMOS EN BREVE ¡GRACIAS!</li>
                <li>TE ESCRIBÍMOS EN BREVE ¡GRACIAS!</li>
              </ul>
            </div>
          </div>
          <div class="content-btn">
            <!-- <a class="btn-thanks" href="index.html">HOME</a> -->
            <a href="../index.html">
              <div class="btn-hover">
                <!-- <div class="btn-hover-atras"></div> -->
                <div class="button-home">
                  <div class="owl-carousel owl-theme btn-info">
                    <div class="item box">
                      <!-- <p>NECESITO UN VIDEO 🎬 - NECESITO FOTOS -</p> -->
                      <p>HOME - HOME - HOME - HOME - HOME - HOME</p>
                    </div>
                    <div class="item box">
                      <p>- HOME - HOME - HOME - HOME - HOME -</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script
    type="text/javascript"
    src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
  ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <script src="../js/main2.js"></script>
</html>
