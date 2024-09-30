function abrir() {
  const ventana1 = window.open("", "", "width=200, height=200");
  const ventana2 = window.open("", "", "width=200, height=200, left=210");
  const ventana3 = window.open("", "", "width=200, height=200, left=420");
  const ventana4 = window.open("", "", "width=200, height=200, left=630");
  const ventana5 = window.open("", "", "width=200, height=200, left=840");

  ventana1.document.write(
    `<br><button onclick="cerrar()">cerrar</button>
        <script>
            function cerrar() {
            close();
            }
        </script>`
  );
  ventana2.document.write(
    `<br><button onclick="cerrar()">cerrar</button>
        <script>
            function cerrar() {
            close();
            }
        </script>`
  );
  ventana3.document.write(
    `<br><button onclick="cerrar()">cerrar</button>
        <script>
            function cerrar() {
            close();
            }
        </script>`
  );
  ventana4.document.write(
    `<br><button onclick="cerrar()">cerrar</button>
        <script>
            function cerrar() {
            close();
            }
        </script>`
  );
  ventana5.document.write(
    `<br><button onclick="cerrar()">cerrar</button>
        <script>
            function cerrar() {
            close();
            }
        </script>`
  );
}
