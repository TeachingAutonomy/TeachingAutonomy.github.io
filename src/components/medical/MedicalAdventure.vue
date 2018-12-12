<template>
  <div>
    <textbox></textbox>
    <hr>
    <game-button routeURL="/stageone/game" buttonText="Begin"></game-button>
  </div>
</template>

<script>
import Textbox from '../Textbox';
import GameButton from '../GameButton';

export default {
  name: 'MedicalAdventure',
  components: {
    Textbox,
    GameButton
  }
}
</script>
