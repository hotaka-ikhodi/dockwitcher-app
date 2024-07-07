<template>
    <div><h2>Form</h2></div>
    <div>
      <h2>Formulario Nuevo Conductor</h2>
    </div>
    <div>
      <form>
        <div class="mb-3 row">
          <label for="nombreConductor" class="col-sm-2 col-form-label">Nombre Completo</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="nombreConductor" required />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="numIdentificacionConductor" class="col-sm-2 col-form-label"
            >Número Identificación (DNI, SSN, etc.)</label
          >
          <div class="col-sm-10">
            <input type="text" class="form-control" id="numIdentificacionConductor" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="numLicenciaConductor" class="col-sm-2 col-form-label">Número de Licencia</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="numLicenciaConductor" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="categLicencia" class="col-sm-2 col-form-label">Categoría de Licencia</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="categLicencia" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="fechaCaducidad" class="col-sm-2 col-form-label">Fecha Caducidad Licencia</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="fechaCaducidad" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="telefonoConductor" class="col-sm-2 col-form-label">Teléfono</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="telefonoConductor" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="emailConductor" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="emailConductor" />
          </div>
        </div>
        
        <!--var formaciones: List<String> = mutableListOf()-->
        <div class="mb-3 row">
          <label for="formacionConductor" class="col-sm-2 col-form-label">Formaciones</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="formacionConductor" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="observacionesConductor" class="col-sm-2 col-form-label">Observaciones</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="observacionesConductor" />
          </div>
        </div>
  
        <!--var experiencia: Experiencia = Experiencia()-->
        <div class="mb-3 row">
          <label for="experienciaConductor" class="col-sm-2 col-form-label">Experiencias</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="experienciaConductor" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="disponibilidadConductor" class="col-sm-2 col-form-label">Disponibilidad</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="disponibilidadConductor" />
          </div>
        </div>
  
        <!--var historial: List<Incidentes> = mutableListOf()-->
  
          <div class="mb-3 row">
          <label for="historialdConductor" class="col-sm-2 col-form-label">Historias</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="historialdConductor" />
          </div>
        </div>
  
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormConductor',
    data() {
      return {}
    }
  }
  
  </script>
  