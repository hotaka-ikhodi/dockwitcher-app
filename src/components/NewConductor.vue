<template>
  <div>
    <h2>Formulario Nuevo Conductor</h2>
  </div>
  <div class="container">
    <Form class="row g-3" @submit="onSubmit">
      <div class="col-md-4">
        <label for="NombreConductor">Nombre Completo</label>
        <Field name="nombre" type="text" class="form-control" id="NombreConductor" required />
      </div>
      <div class="col-md-4">
        <label for="">Número Identificación (DNI, SSN)</label>
        <Field
          name="numIdentificacion"
          type="text"
          class="form-control"
          id="numIdentificacionConductor"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="" class="numLicenciaConductor">Número de Licencia</label>
        <Field
          name="numLicencia"
          type="text"
          class="form-control"
          id="numLicenciaConductor"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="" class="categLicencia">Categoría de Licencia</label>
        <Field name="catLicencia" type="text" class="form-control" id="categLicencia" required />
      </div>
      <div class="col-md-4">
        <label for="" class="fechaCaducLicencia">Fecha caducidad de Licencia</label>
        <Field
          name="fechaCaducidad"
          type="date"
          class="form-control"
          id="fechaCaducLicencia"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="" class="telConductor">Teléfono</label>
        <input type="text" class="form-control" id="telConductor" />
      </div>
      <div class="col-md-4">
        <label for="">Email</label>
        <Field name="emailCond" type="email" :rules="validateEmail" class="form-control" id="emailConductor" />
        <ErrorMessage name="emailCond" />
      </div>
      <div class="col-md-4">
        <label for="" class="formacionesConductor">Formaciones</label>
        <Field name="formacion" type="text" class="form-control" id="formacionesConductor" />
      </div>
      <div class="col-md-4">
        <label for="" class="observacionesConductor">Observaciones</label>
        <Field name="observacion" type="text" class="form-control" id="observacionesConductor" />
      </div>
      <div class="col-md-4">
        <label for="" class="experienciaConductor">Experiencia</label>
        <Field name="experiencia" type="text" class="form-control" id="experienciaConductor" />
      </div>
      <div class="col-md-4">
        <label for="" class="disponibilidadConductor">Disponibilidad</label>
        <Field
          name="disponibilidad"
          type="text"
          class="form-control"
          id="disponibilidadConductor"
        />
      </div>
      <div class="col-md-4">
        <label for="" class="historialConductor">Historial</label>
        <Field name="historial" type="text" class="form-control" id="historialConductor" />
      </div>
      <div class="col-12">
        <button class="btn btn-outline-secondary" type="submit">Nuevo</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(values)
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }
      // All is good
      return true
    }
  }
}
</script>
