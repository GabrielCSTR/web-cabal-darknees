<template>

  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" style="z-index: 99999;">
    <b-navbar-brand href="#">Cabal Darkness</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#home">home</b-nav-item>
        <b-nav-item href="#download">download</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#home">Cadastro</b-nav-item>
        <b-nav-item href="#home">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
    name: 'NavbarWeb',
}
</script>