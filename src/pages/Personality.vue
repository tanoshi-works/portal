<template>
  <Layout>
    <h1>Personality</h1>
    <div class="container" v-for="edge in $page.personality.edges" :key="edge.node.id">
      <div class="personality-card">
        <div class="card-left">
          <g-image :src="edge.node.image" :alt="edge.node.name"/>
        </div>
        <div class="card-right">
          <h2 v-html="edge.node.name" />
          <p v-html="edge.node.content" />
        </div>
      </div>
      <div class="social-link">
        <ul>
          <li v-for="social in edge.node.social" :key="edge.node.social.title">
            <g-link :href="social.url" target="_blank" class="btn btn-success">
              <span v-html="social.title" />
            </g-link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Personality',
  },
};
</script>

<page-query>
  query {
    personality: allPersonality {
      edges {
        node {
          id
          name
          image
          content
          social {
            title
            url
          }
        }
      }
    }
  }
</page-query>


<style scoped>
.container {
  padding: 5px;
  margin: 5px;
}

.personality-card {
  max-width: 760px;
}

.card-left {
  max-width: 150px;
  width: 100%;
  margin-right: 10px;
  margin-top: 20px;
}

.card-left > img {
  display: block;
  width: 130px;
  margin: 10px;
}

.card-right {
  width: 100%;
}

.social-link {
  max-width: 750px;
  margin-left: 10px;
  width: 100%;
}

.social-link > ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.social-link > ul > li > a {
  margin: 0 5px;
}

@media screen and (min-width: 479px) {
  .personality-card {
    display: flex;
  }
}

@media screen and (max-width: 479px) {

}
</style>
