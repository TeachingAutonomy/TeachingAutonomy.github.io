<template>
  <div>
    <header class="pen-intro">
      <h1>{{header}}</h1>
    </header>
    <div class="dialogue">
      <p>{{body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  
  props: {
    header: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.dialogue {
  width: 50%;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 10px;
  padding: 20px;
  text-decoration: none;
  border: 3px solid white;
}
</style>
