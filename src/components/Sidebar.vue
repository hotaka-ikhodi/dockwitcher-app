<script setup>
import DockwitcherLogo from './icons/DockwitcherLogo.vue'
</script>

<template>
  <div class="sidebar">
    <div class="title-container">
      <h2 class="title">dockwitcher</h2>
    </div>
    <div class="line"></div>
    <div class="side-options">
      <ul>
        <li>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
              <img id="planification-icon" src="../assets/images/icons8-todo-list-24.png" />
              Camiones
            </div>
            <button
              class="btn btn-primary"
              id="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <img
                id="collapse-icon"
                src="../assets/images/icons8-chevron-abajo-24.png"
                width="15"
              />
            </button>
          </div>
          <div class="collapse" id="collapseExample">
            <div>
              <RouterLink to="/trucks">Camiones</RouterLink>
            </div>  
            <div> 
              <RouterLink to='/drivers'>Conductores</RouterLink>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
              <img id="planification-icon" src="../assets/images/icons8-todo-list-24.png" />
              Planificacion
            </div>
            <button
              class="btn btn-primary"
              id="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <img
                id="collapse-icon"
                src="../assets/images/icons8-chevron-abajo-24.png"
                width="15"
              />
            </button>
          </div>
          <div class="collapse" id="collapseExample">
            <div>
              <a href="#">Panel</a>
              <a href="#">Recepciones</a>
              <a href="#">Expediciones</a>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
              <img id="planification-icon" src="../assets/images/list-solid.svg" width="15" />
              Planificacion
            </div>
            <button
              class="btn btn-primary"
              id="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <img
                id="collapse-icon"
                src="../assets/images/icons8-chevron-abajo-24.png"
                width="15"
              />
            </button>
          </div>
          <div class="collapse" id="collapseExample">
            <div>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Panel</a></li>
                  <li class="breadcrumb-item">
                    <a href="../views/PlanificacionView.vue">Planificacion</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../views/DashboardView.vue">Dashboard</a>
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Recepciones</a></li>
                  <li class="breadcrumb-item">
                    <a href="../views/PlanificacionView.vue">Planificacion</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../views/IncommingsView.vue">Incommings</a>
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Panel</a></li>
                  <li class="breadcrumb-item">
                    <a href="../views/PlanificacionView.vue">Planificacion</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="../views/OutgoingsView.vue">Outgoings</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </li>
        <div class="d-flex justify-content-between align-items-center">
          <div class="">
            <img id="Camiones-icon" src="../assets/images/list-solid.svg" width="15" />
            Camiones
          </div>
          <button
            class="btn btn-primary"
            id="collapse-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img id="collapse-icon" src="../assets/images/icons8-chevron-abajo-24.png" width="15" />
          </button>
        </div>
        <div class="collapse" id="collapseExample">
          <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Camiones</a></li>
                <li class="breadcrumb-item"><a href="../views/TrucksView.vue">Trucks</a></li>
              </ol>
            </nav>
            <p>Drivers</p>
          </div>
        </div>
        <li>
          <img id="control-muelle-icon" src="../assets/images/user-nurse-solid.svg" width="24" />
          Control de muelle
        </li>
        <li>
          <img id="camion-icon" src="../assets/images/truck-solid.svg" width="24" />
          Transporte
        </li>
        <li>
          <img id="configuration-icon" src="../assets/images/gear-solid.svg" width="24" />
          Configuración
        </li>
      </ul>
    </div>
  </div>
</template>
