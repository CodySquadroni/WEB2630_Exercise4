<template>
  <!-- ToDo: Inside the list item tag add a click event that calls serverSelected -->
  <li class="list-group-item">
    <!-- ToDo: Output Server # {{ server.id }} -->
  </li>
</template>

<script>
// ToDo: Import the eventBus from main.js

export default {
  // ToDo: Create the props for server that is passed down from Servers.vue component 
  methods: {
    // ToDo: Create serverSelected that creates a custom event that sends the server data to the eventBus (tip: eventBus.$emit('customEventName', data))
  }
}
</script>