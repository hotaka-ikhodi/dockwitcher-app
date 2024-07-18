<template>
  <div>
    <h2>Formulario Nuevo Conductor</h2>
  </div>
  <div class="container">
    <Form class="row g-3" @submit="onSubmit">
      <div class="col-md-4">
        <label for="NombreConductor">Nombre Completo</label>
        <Field
          name="nombre"
          type="text"
          v-model="conductor.nombreConductor"
          rules="required"
          class="form-control"
          id="NombreConductor"
        />
      </div>
      <div class="col-md-4">
        <label for="numIdentificacionConductor">Número Identificación (DNI, SSN)</label>
        <Field
          name="numIdentificacion"
          type="text"
          v-model="conductor.numIdentificacion"
          class="form-control"
          id="numIdentificacionConductor"
        />
      </div>
      <div class="col-md-4">
        <label for="numLicenciaConductor">Número de Licencia</label>
        <Field
          name="numLicencia"
          type="text"
          v-model="conductor.numLicencia"
          class="form-control"
          id="numLicenciaConductor"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="categLicencia">Categoría de Licencia</label>
        <Field
          name="catLicencia"
          type="text"
          v-model="conductor.catLicencia"
          class="form-control"
          id="categLicencia"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="fechaCaducLicencia">Fecha caducidad de Licencia</label>
        <Field
          name="fechaCaducidad"
          type="date"
          v-model="conductor.fechaCaducidad"
          class="form-control"
          id="fechaCaducLicencia"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="telConductor">Teléfono</label>
        <input type="text" v-model="conductor.telefono" class="form-control" id="telConductor" />
      </div>
      <div class="col-md-4">
        <label for="emailConductor">Email</label>
        <Field
          name="emailCond"
          type="email"
          v-model="conductor.email"
          :rules="validateEmail"
          class="form-control"
          id="emailConductor"
        />
        <ErrorMessage name="emailCond" />
      </div>
      <div class="col-md-4">
        <label for="formacionesConductor">Formaciones</label>
        <Field
          name="formacion"
          type="text"
          v-model="formacion"
          class="form-control"
          id="formacionesConductor"
        />
        <button v-on:click="agregarFormacion()">Agregar</button>
        <div>
        <ul>
          <li v-for="(elem, index) in conductor.formaciones" :key="index">{{ elem }}</li>
        </ul>
      </div>
      </div>
     
      <div class="col-md-4">
        <label for="observacionesConductor">Observaciones</label>
        <Field
          name="observacion"
          type="text"
          v-model="conductor.observaciones"
          class="form-control"
          id="observacionesConductor"
        />
      </div>
      <div class="col-md-4">
        <label for="experienciaConductor">Experiencia</label>
        <Field
          name="experiencia"
          type="text"
          v-model="conductor.experiencia"
          class="form-control"
          id="experienciaConductor"
        />
      </div>
      <div class="col-md-4">
        <label for="disponibilidadConductor">Disponibilidad</label>
        <Field
          name="disponibilidad"
          type="text"
          v-model="conductor.disponibilidad"
          class="form-control"
          id="disponibilidadConductor"
        />
      </div>
      <div class="col-md-4">
        <label for="historialConductor">Historial</label>
        <Field
          name="historial"
          type="text"
          v-model="conductor.historial"
          class="form-control"
          id="historialConductor"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-outline-secondary" type="submit">Nuevo</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let conductor = ref({
  nombreConductor: '',
  numIdentificacion: '',
  numLicencia: '',
  catLicencia: '',
  fechaCaducidad: '',
  telefono: '',
  email: '',
  formaciones: [],
  observaciones: '',
  experiencia: '',
  disponibilidad: '',
  historial: ''
})

let formacion = ref('')

const agregarFormacion = () => {
  conductor.value.formaciones.push(formacion.value)
  formacion.value=''
  
}
</script>



<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { defineRule } from 'vee-validate'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'This field is required'
  }
  return true
})

export default {
  components: {
    Field,
    Form,
    ErrorMessage
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
