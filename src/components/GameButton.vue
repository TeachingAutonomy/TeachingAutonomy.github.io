<template>
  <router-link to="stageone/game">
    <button class="eightbit-btn">{{buttonText}}</button>
  </router-link>
</template>

<script>
export default {
  name: 'GameButton',

  props: {
    buttonText: {
      type: String,
      default: ''
    },
    routeURL: {
      type: String,
      default: ''
    }
  }
}
</script>
