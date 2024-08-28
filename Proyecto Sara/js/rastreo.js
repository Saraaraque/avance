document.addEventListener('DOMContentLoaded', function() {
    const rastreoForm = document.getElementById('rastreo-form');
    const resultadoRastreo = document.getElementById('resultado-rastreo');
  
    rastreoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const codigoRastreo = document.getElementById('codigo-rastreo').value;
      
      // Simular una llamada a la API de rastreo
      setTimeout(() => {
        const estadoEnvio = simularEstadoEnvio();
        mostrarResultadoRastreo(codigoRastreo, estadoEnvio);
      }, 1000);
    });
  
    function simularEstadoEnvio() {
      const estados = ['En tránsito', 'En el almacén', 'Entregado', 'Retrasado'];
      return estados[Math.floor(Math.random() * estados.length)];
    }
  
    function mostrarResultadoRastreo(codigo, estado) {
      resultadoRastreo.innerHTML = `
        <div class="alert alert-info">
          <h4>Resultado del rastreo para el código: ${codigo}</h4>
          <p>Estado actual: <strong>${estado}</strong></p>
          <p>Última actualización: ${new Date().toLocaleString()}</p>
        </div>
      `;
    }
  });