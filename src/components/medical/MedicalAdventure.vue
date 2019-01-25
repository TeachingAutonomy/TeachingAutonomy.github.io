<template>
  <div>
    <textbox
      header="Medical Devices"
      body="Your company has created a medical device that can detect heart attacks. If a patient is showing unhealthy signs the device has the ability to correct and prevent the heart attack. "
    ></textbox>
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
