El sitio web contiene 4 páginas princilaes.
1.- index.html: Es el home de la página y contiene información sobre el sitio como el objetivo y a quien va dirigido.
2.- inventory.html: Contiene el inventario del laboratorio de electroquímica de la UAQ.
    El inventario está almacenado en firestore que es una base de datos no relacional de google que es parte de su framework firebase.
    La página permite filtrar el inventario en base a la categoría del mismo mediante jquery.
3.- resources.html: Es una vista en donde un administrativo de la página podrá subir recursos.
4.- login.html: Es la página de inicio de sesión en donde hay un formulario en donde se debe ingresar el email y la contraseña del usuario.
    La validación de usuarios de igual manera que la administración de la base de datos se maneja mediante firebase con un modulo llamado firebase auth.
    Sólo los usuarios que estñan registrados en mi dashboard de firebase pueden iniciar sesión ya que sólo usuarios administrativos pueden tener acceso al manejo de recursos.
    Con propositos de testeo se registró un correo llamado example@test.com con contraseña 123456 que al ingresarló se desplegará una alerta con la autenticación exitosa. Cualquier otro correo será rechazado.