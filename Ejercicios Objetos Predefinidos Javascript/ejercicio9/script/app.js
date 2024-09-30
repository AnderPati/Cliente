function entrar() {
  if (document.getElementById("nombre").value != "") {
    const ventana = window.open("", "", "width=300, height=300");
    ventana.document.write(
      `Bienvenido ${document.getElementById("nombre").value}`
    );

    ventana.document.write(
      `<br><button onclick="redirigir()">Empezar a navegar</button>
            <script>
                function redirigir() {
                window.opener.window.location.href = "https://www.google.com/";
                close();
                }
            </script>`
    );
  }
}
