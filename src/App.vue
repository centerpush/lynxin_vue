<template>
  <div id="app">
    <div id="nav">

    </div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2c3e49;" >
      <router-link class="navbar-brand" to="/cats">LynxIn 🐈 </router-link>
      <ul class="nav">
        <li class="nav-item justify-content-end">
          <div v-if="">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </div>
        </li>
        <li>
          <div v-if="">
            <router-link class="nav-link" to="/login">Login</router-link>
          </div>
        </li>
      </ul>
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
