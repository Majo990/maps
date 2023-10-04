<script lang="ts" src="./MapView.ts" />

<template>
  <div
    v-if="!isUserlocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando ...</span>
    </div>
  </div>

  <div v-show="isUserlocationReady"  class="map-container"
   ref="mapElement"/>
</template>

<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: red;
}

.loading-map {
  color: wheat;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
