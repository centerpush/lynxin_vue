<template>
  <div class="cats-edit">
    <h1>Edit Profile</h1>

    <ul>
      <li v-for="error in errors"{{ error }}</li>
    </ul>
    
    <form v-on:submit.prevent="submit()">
      <div>
        First Name: <input v-model="cat.first_name" placeholder="First Name">
      </div>
      <div>
        Family Name: <input v-model="cat.family_name" placeholder="Family Name">
      </div>
      <div>
        Title: <input v-model="cat.title" placeholder="Title">
      </div>
      <div>
        Education  <input v-model="cat.education" placeholder="Education">
      </div>
      <div>
        Experience  <input v-model="cat.experience" placeholder="Experience">
      </div>
      <div>
        Location  <input v-model="cat.location" placeholder="Location">
      </div>
      <div>
        Owner: <input v-model="cat.owner" placeholder="Owner">
      </div>
      <div>
        Summary: <input v-model="cat.summary" placeholder="Summary">
      </div>
      <div>
        Profile url: <input v-model="cat.profile_url" placeholder="Profile url">
      </div>
      <div>
        Accomplishments: <input v-model="cat.accomplishments" placeholder="Accomplishments">
      </div>
      <div>
        Endorsements: <input v-model="cat.endorsements" placeholder="Endorsements">
      </div>
      <div>
        Skills  <input v-model="cat.skills" placeholder="Skills">
      </div>
      
      <input type="submit" value="Update" class="btn btn-warning">
    </form>
  </div>
</template>


<style>
  
</style>


<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      cat: {
              first_name: "",
              family_name: "",
              title: "",
              education: "",
              experience: "",
              location: "",
              owner: "",
              summary: "",
              profile_url: "",
              accomplishments: "",
              endorsements: "",
              skills: "",
              user_id: ""
              },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/cats/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.cat = response.data;
      })
  },
  methods: {
    submit: function() {
      var params = {
                    first_name: this.cat.first_name,
                    family_name: this.cat.family_name,
                    title: this.cat.title,
                    education: this.cat.education,
                    experience: this.cat.experience,
                    location: this.cat.location,
                    owner: this.cat.owner,
                    summary: this.cat.summary,
                    profile_url: this.cat.profile_url,
                    accomplishments: this.cat.accomplishments,
                    endorsements: this.cat.endorsements,
                    skills: this.cat.skills,
                    user_id: this.cat.user_id
                    };
      axios.patch("/api/cats/" + this.cat.id, params)
        .then(response => {
          this.$router.push("/cats/" + this.cat.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>