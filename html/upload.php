<html>
    <body>
        <?php
            /* Obtiene el nombre del archivo a subir */
            $filename = $_FILES['file']['name'];

            /* Escoge la ubicación a donde serán subidos los archivos */
            $location = "../upload/".$filename;

            /* Salva el archivo subido en el directorio */

            if(move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
                echo '<p>El archivo ha sido subido exitosamente </p>';
            } else {
                echo '<p>Error al subir el archivo </p>';
            }
        ?>
    </body>
</html>