<template>
  <nav class="container">
    <ul class="social-bar">
      <li>
        <a href="https://www.linkedin.com/in/scryt/" target="_blank">
          <i class="fab fa-linkedin social-icon"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/Scryt" target="_blank">
          <i class="fab fa-github social-icon"></i>
        </a>
      </li>
    </ul>
    <ul class="menu-bar">
      <li>
        <a href="#" class="nav-button">Home</a>
      </li>
      <li>
        <a href="#" class="nav-button">About</a>
      </li>
      <li>
        <a href="#" class="nav-button">Projects</a>
      </li>
      <li>
        <a href="#" class="nav-button">Blog</a>
      </li>
      <li>
        <a href="#" class="nav-button">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #CAD8DE;
  z-index: 1;
  box-shadow: 1px 1px 3px 1px #CAD8DE;
  opacity: 0.8;
}

.menu-bar li a:link,
.menu-bar li a:visited,
.social-bar li a:link,
.social-bar li a:visited {
  display: inline-block;
  margin: 15px;
  color: #0f2531;
  text-transform: uppercase;
  font-weight: bold;
}

.social-bar li a:hover,
.menu-bar li a:hover {
  color: #F55C2B;
}

.social-bar,
.menu-bar {
  width: 50%;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.social-bar {
  justify-content: flex-start;
}

.menu-bar {
  justify-content: flex-end;
}
</style>