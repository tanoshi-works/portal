<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/">Home</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/episode">Episode</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/personality">Personality</g-link>
          </li>
          <li class="nav-item">
            <a class="nav__link nav-link"  href="https://docs.google.com/forms/d/e/1FAIpQLSeEzHEyG3deYC0ZdyWHaKT3w9n_AdqytCEn7jYlrxTbEQJLbg/viewform?embedded=true">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.nav {
  width: 100%;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
