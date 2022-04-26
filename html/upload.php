<html>
    <body>
    <?php
/* Obtiene el nombre del archivo a subir */
$filename = $_FILES['file-upload']['name'];

/* Escoge la ubicación a donde serán subidos los archivos */
$location = "../upload/".$filename;

/* Salva el archivo subido en el directorio */

if(move_uploaded_file($_FILES['file-upload']['tmp_name'], $location)) {
    echo "<p style=\"display: flex; justify-content: center; align-items: center; font-family: \"Poppins\", sans-serif; font-size: 4.8rem;\">El archivo ha sido subido exitosamente </p>";
} else {
    echo "<p style=\"display: flex; justify-content: center; align-items: center; color: red; font-family: \"Poppins\", sans-serif; font-size: 4.8rem;\">Error al subir el archivo </p>";
}
?>
    </body>
</html>