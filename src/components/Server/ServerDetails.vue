<template>
  <div class="col-xs-12 col-sm-6">
    <!-- ToDo: Put a v-if !server that shows this paragraph -->
    <p>Server Details are currently not updated</p>
    <!-- ToDo: Add a v-else to the below empty paragraph that shows Server #{{ server.id }} selected, Status: {{ server.status }} -->
    <p></p>
    <hr>
    <!-- ToDo: Add click event that calls the resetStatus method below -->
    <button>Change to Normal</button>
  </div>
</template>

<script>
// ToDo: Import the { eventBus } from main.js

export default {
  data () {
    return {
      // ToDo: Create a server data property and set it to null
    }
  },
  methods: {
    // ToDo: Create a method called resetStatus that takes server.status and sets it to a string of Normal
  },
  created () {
    // ToDo: Set the server variable from above equal to the the server data coming through the event bus using eventBus.$on('customEventName', (server) => {
    //   set data here
    // })
  }
}
</script>
