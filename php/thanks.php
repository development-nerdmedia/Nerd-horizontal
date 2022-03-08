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
$myemails = 'development@nerdmedia.pe, alonso@nerdmedia.pe';
$name = $_POST['name'];
$tel = $_POST['telephone'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = $myemails;
$email_subject = "Contacto Nerd Video";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n 
Telefono: $tel \n Email: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
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
            <div class="owl-carousel owl-theme thanks-carousel">
            <div class="item box">
                <!-- <p>¡GRACIAS! EN BREVE TE ESCRIBÍMOS&nbsp;</p> -->
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
            </div>
          </div>
          <div class="slider-thanks2">
            <div class="owl-carousel owl-theme thanks-carousel2">
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
              <div class="item box">
                <p>TE ESCRIBÍMOS ¡GRACIAS! EN BREVE&nbsp;</p>
              </div>
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
