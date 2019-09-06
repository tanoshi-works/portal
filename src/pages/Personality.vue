<template>
  <Layout>
    <h1>Personality</h1>
    <div class="container">
      <div class="card">
        <div class="card-left">
          <img src="./img/icon-kameneko.jpg" alt="icon">
        </div>
        <div class="card-right">
          <h2>NAME</h2>
          <p>profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. profile text. </p>
        </div>
      </div>
      <div class="social-link">
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Personality'
  }
}
</script>

<style scope>
.container {
  padding: 5px;
  margin: 5px;
}

.card {
  max-width: 760px;
}

.card-left {
  max-width: 200px;
  width: 100%;
  margin-right: 10px;
  margin-top: 30px;
}

.card-left > img {
  display: block;
  width: 200px;
}

.card-right {
  width: 100%;
}

.social-link {
  max-width: 760px;
  width: 100%;
}

.social-link > ul{
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.social-link > ul > li > a{
  margin: 0 5px;
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 10px;
  color: gray;
  background: #90ee90;
  font-size: 14pt;
}

@media screen and (min-width: 479px) {
  .card {
    display: flex;
  }
}

@media screen and (max-width: 479px) {

}
</style>