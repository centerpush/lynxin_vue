<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top justify-content-between" style="background-color: #2c3e49;" >
      <router-link class="navbar-brand" to="/cats">LynxIn 🐈 </router-link>
      <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle dropright" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </button>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/">Signup</router-link>
          <router-link class="dropdown-item" to="/login">Login</router-link>
          <router-link class="dropdown-item" to="/cats/3">My Profile</router-link>
          <router-link class="dropdown-item" to="/cats/3/edit">Edit Profile</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/logout">Logout</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.navbar{
  height: 52px;
}
.navbar-brand{
  font-size: 35px;
}
.nav-link{
  color: white;
}
</style>
