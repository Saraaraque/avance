 window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
 function actualizarDisponibilidadCamiones() {
    // Simular la actualización de disponibilidad (esto se conectaría con el backend en una implementación real)
    const camiones = document.querySelectorAll('.camion');
    camiones.forEach(camion => {
        const disponibilidad = Math.random() < 0.5 ? 'Disponible' : 'Ocupado';
        camion.querySelector('.disponibilidad').textContent = disponibilidad;
    });
}

setInterval(actualizarDisponibilidadCamiones, 5 * 60 * 1000);

actualizarDisponibilidadCamiones();
// Agregar al final del archivo

// Función para simular la carga de datos del servidor
function simularCargaDatos(callback) {
    setTimeout(callback, 1000);
  }
  
  // Inicializar gráficos si estamos en la página de administrador
  if (document.getElementById('grafico-rendimiento-mensual')) {
    simularCargaDatos(() => {
      const ctx = document.getElementById('grafico-rendimiento-mensual').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
          datasets: [{
            label: 'Ingresos Mensuales',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    });
  }
  
  // Inicializar tabla de usuarios si estamos en la página de administrador
  if (document.getElementById('lista-usuarios')) {
    simularCargaDatos(() => {
      const listaUsuarios = document.getElementById('lista-usuarios');
      const usuarios = [
        { id: 1, nombre: 'Juan Pérez', rol: 'Cliente', email: 'juan@example.com' },
        { id: 2, nombre: 'María López', rol: 'Transportador', email: 'maria@example.com' },
        { id: 3, nombre: 'Carlos Ruiz', rol: 'Dueño de Camiones', email: 'carlos@example.com' }
      ];
  
      listaUsuarios.innerHTML = usuarios.map(usuario => `
        <tr>
          <td>${usuario.id}</td>
          <td>${usuario.nombre}</td>
          <td>${usuario.rol}</td>
          <td>${usuario.email}</td>
          <td>
            <button class="btn btn-sm btn-primary">Editar</button>
            <button class="btn btn-sm btn-danger">Eliminar</button>
          </td>
        </tr>
      `).join('');
    });
  }

});
