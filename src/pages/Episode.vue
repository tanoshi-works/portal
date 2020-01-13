<template>
  <Layout>
    <h1>Episode</h1>
      <div class="card" v-for="{ node } in $page.allEpisode.edges" :key="node.id">
        <h4 class="card-title">
          <span v-html="node.slug" /> / 
          <span v-html="node.title"/>
        </h4>
        <div class="card-subtitle mb-2 text-muted" v-html="node.date" />
        <router-link :to="node.path" class="link-card">
        </router-link>
        
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Episode'
  }
}
</script>

<page-query>
  query episode ($page: Int) {
    allEpisode (page: $page) {
      edges {
        node {
          id
          title
          date (format: "公開日: YYYY/MM/DD")
          slug
          path
        }
      }
    }
  }
</page-query>

<style scoped>
.card {
  position: relative;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: solid 5px #90ee90
}

.card:hover {
  background: #dcdcdc
}

.card a {
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
}

</style>
