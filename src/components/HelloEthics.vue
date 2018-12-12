<template>
  <div>
    <header class="pen-intro">
      <h1>Choose an Adventure</h1>
      <p>Get ready to explore how ethics and tradeoffs effect engineering decisions.</p>
    </header>
    <hr />
    <router-link to="/stageone">
      <button class="eightbit-btn">Stage One</button>
    </router-link>
    <hr />
    <router-link to="/stagetwo">
      <button click="" class="eightbit-btn eightbit-btn--proceed">Stage Two</button>
    </router-link>
    <hr />
    <router-link to="/stagethree">
      <button class="eightbit-btn eightbit-btn--reset">Final Round</button>
    </router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloEthics'
}
</script>
