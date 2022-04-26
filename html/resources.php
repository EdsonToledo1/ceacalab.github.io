<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
    <link rel="stylesheet" href="../styles/style.css" />
    <title>Recursos</title>
  </head>
  <body>
    <header class="header" id="header">
      <nav class="nav container">
        <a href="../index.html" class="nav__logo">Logo</a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="inventory.html" class="nav__link">
                <i class="uil uil-cube nav__icon"></i> Inventario
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                <i class="uil uil-file nav__icon"></i> Recursos
              </a>
            </li>
            <li class="nav__item">
              <a href="login.html" class="nav__link">
                <i class="uil uil-user nav__icon"></i> ¿Eres administrativo?
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link"></a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>
        <div class="nav__btns">
          <i class="uil uil-moon change-theme" id="theme-button"></i>

          <div class="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="resources__content">
        <h1>Recursos</h1>
        <div>
        <?php
            $path = "../upload";
            $dh = opendir($path);
            $i=1;
            while (($file = readdir($dh)) !== false) {
                if($file != "." && $file != ".." && $file != "index.php" && $file != ".htaccess" && $file != "error_log" && $file != "cgi-bin") {
                    echo "<div style=\"margin-top: 0.8rem; border-radius: 0.8rem; background-color: #f2f6ff; padding: 0.8rem; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);\"><a href='$path/$file' style=\"text-decoration: none; color: hsl(var(--hue-color), 69%, 61%); font-weight:600;\">$file</a></div>";
                    $i++;
                }
            }
            closedir($dh);
        ?> 
      </div>
        </div>
    </main>
    <script src="../js/main.js" defer></script>
  </body>
</html>
