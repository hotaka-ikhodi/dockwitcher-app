<!--<script setup>
import { ref } from 'vue'
const formaciones = ref([])
const nuevaFormacion = ref('')
const addFormacion = () => {
  formaciones.value.push(nuevaFormacion.value)
  nuevaFormacion.value = ''
}
</script>-->

<template>
    <div>
      <h2>Formulario Nuevo Conductor</h2>
    </div>
    <div class="container">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="NombreConductor" class="form-label">Nombre Completo</label>
          <input type="text" class="form-control" id="NombreConductor" required />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Es necesario ingresar el Nombre completo del conductor</div>
        </div>
        <div class="col-md-4">
          <label for="" class="numIdentificacionConductor"
            >Número Identificación (DNI, SSN, etc.)</label
          >
          <input type="text" class="form-control" id="numIdentificacionConductor" required />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Es necesario ingresar el Nombre completo del conductor</div>
        </div>
        <div class="col-md-4">
          <label for="" class="numLicenciaConductor">Número de Licencia</label>
          <input type="text" class="form-control" id="numLicenciaConductor" required />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Es necesario ingresar el Nombre completo del conductor</div>
        </div>
        <div class="col-md-4">
          <label for="" class="categLicencia">Categoría de Licencia</label>
          <input type="text" class="form-control" id="categLicencia" required />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Es necesario ingresar el Nombre completo del conductor</div>
        </div>
        <div class="col-md-4">
          <label for="" class="fechaCaducLicencia">Fecha caducidad de Licencia</label>
          <input type="date" class="form-control" id="fechaCaducLicencia" required />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Es necesario ingresar el Nombre completo del conductor</div>
        </div>
        <div class="col-md-4">
          <label for="" class="categLicencia">Categoría de Licencia</label>
          <input type="text" class="form-control" id="categLicencia" required />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Es necesario ingresar el Nombre completo del conductor</div>
        </div>
        <div class="col-md-4">
          <label for="" class="telConductor">Teléfono</label>
          <input type="text" class="form-control" id="telConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="" class="emailConductor">Email</label>
          <input type="email" class="form-control" id="emailConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="" class="formacionesConductor">Formaciones</label>
          <input type="email" class="form-control" id="formacionesConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="" class="observacionesConductor">Observaciones</label>
          <input type="email" class="form-control" id="observacionesConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="" class="experienciaConductor">Experiencia</label>
          <input type="email" class="form-control" id="experienciaConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="" class="disponibilidadConductor">Disponibilidad</label>
          <input type="email" class="form-control" id="disponibilidadConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-12">
          <label for="" class="historialConductor">Historial</label>
          <input type="email" class="form-control" id="historialConductor" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-secondary" type="submit">Nuevo</button>
        </div>
      </form>
    </div>
  </template>
  <script>
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  ;(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        'submit',
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        },
        false
      )
    })
  })()
  </script>
  