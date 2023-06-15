document
  .getElementById("evaluacionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;

    // Realiza la lógica de evaluación de seguridad e higiene con los valores obtenidos

    // Ejemplo: Verifica si el participante es mayor de edad
    if (edad >= 18) {
      alert(
        "El participante " + nombre + " es mayor de edad. ¡Evaluación aprobada!"
      );
    } else {
      alert(
        "El participante " +
          nombre +
          " es menor de edad. ¡Evaluación no aprobada!"
      );
    }

    // Puedes realizar más evaluaciones y mostrar resultados de acuerdo a tus necesidades

    // Reinicia el formulario
    document.getElementById("evaluacionForm").reset();
  });
