<template>
  <div>
    <text-box
      header="Temp Header"
      body="This is some information"
    ></text-box>
    <game-button routeURL="/" buttonText="Back"></game-button>
    <game-button routeURL="/" buttonText="Next"></game-button>
  </div>
</template>

<script>
import GameButton from '../GameButton';
import Textbox from '../Textbox';

export default {
  name: 'MedicalAdventureGame',
  components: {
    GameButton,
    Textbox
  }
}
</script>
