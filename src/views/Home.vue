<template>
  <div class="home">

  </div>
</template>



<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
  methods: {
    createUser: function() {

    },

    showUser: function() {

    },

    updateUser: function() {

    },

    destroyUser: function() {

    }
  }
};
</script>