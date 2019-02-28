<template>
  <div class="cats-edit">

    <ul>
      <li v-for="error in errors"{{ error }}</li>
    </ul>
    <div class='container'>
      <h2>Edit Profile</h2>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>First Name: </label>
          <input class='form-control' type='text' v-model="cat.first_name" placeholder="First Name">
        </div>
        <div class="form-group">
          <label>Family Name: </label>
          <input class='form-control' type='text' v-model="cat.family_name" placeholder="Family Name">
        </div>
        <div class="form-group">
          <label>Title: </label>
          <input class='form-control' type='text' v-model="cat.title" placeholder="Title">
        </div>
        <div class="form-group">
          <label>Education: </label>
          <input class='form-control' type='text' v-model="cat.education" placeholder="Education">
        </div>
        <div class="form-group">
          <label>Experience: </label>
          <input class='form-control' type='text' v-model="cat.experience" placeholder="Experience">
        </div>
        <div class="form-group">
          <label>Location: </label>
          <input class='form-control' type='text' v-model="cat.location" placeholder="Location">
        </div>
        <div class="form-group">
          <label>Owner: </label>
          <input class='form-control' type='text' v-model="cat.owner" placeholder="Owner">
        </div>
        <div class="form-group">
          <label>Summary: </label>
          <input class='form-control' type='text' v-model="cat.summary" placeholder="Summary">
        </div>
        <div class="form-group">
          <label>Profile Picture URL: </label>
          <input class='form-control' type='text' v-model="cat.profile_url" placeholder="Profile url">
        </div>
        <div class="form-group">
          <label>Accomplishments: </label>
          <input class='form-control' type='text' v-model="cat.accomplishments" placeholder="Accomplishments">
        </div>
        <div class="form-group">
          <label>Endorsements: </label>
          <input class='form-control' type='text' v-model="cat.endorsements" placeholder="Endorsements">
        </div>
        <div class="form-group">
          <label>Skills: </label>
          <input class='form-control' id='' type='text' v-model="cat.skills" placeholder="Skills">
        </div>
        
        <input type="submit" value="Update" class="btn btn-primary">
      </form>
    </div>
  </div>
</template>


<style>
.btn{
  position: relative;
  align-self: center;
}
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
      console.log(this.cat.first_name);
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