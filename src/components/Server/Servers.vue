<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <!-- ToDo: Use the Server component selector with the name you gave it below -->
      <!-- ToDo: Loop through the servers data and give the individual item the name of server(Don't forget to assign a key) -->
      <!-- ToDo: Pass server as a property to the Server component (remember to bind to the property name from Server.vue) -->
    </ul>
  </div>
</template>

<script>
// ToDo: import Server.vue component and give it name Server

export default {
  data () {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Normal' }
      ]
    }
  }
  // ToDo: Initialize Server Component
}
</script>
