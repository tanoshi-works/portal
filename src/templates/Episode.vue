<template>
  <Layout>
    <h1>{{ $page.episode.slug }} - {{ $page.episode.title }}</h1>
    <div class="item-title" v-html="$page.episode.date" />
    <div class="content" v-html="$page.episode.content" />
    <span class="social-twitter">
      <a href="https://twitter.com/tanoshii_works?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @tanoshii_works</a>
    </span>
    <span class="social-twitter">
      <a href="https://twitter.com/intent/tweet?button_hashtag=たのしいWorks&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #たのしいWorks</a>
    </span>
    <div class="player" v-html="$page.episode.player" />
    <h2>ネタ帳</h2>
    <ul v-for="link in $page.episode.links" :key="link.title">
      <li>
        <a :href="link.url" target="_blank">
          <span v-html="link.title" />
        </a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Episode ($path: String!) {
    episode (path: $path) {
      title
      date (format: "収録日: YYYY/MM/DD")
      slug
      player
      content
      links {
        title
        url
      }
    }
  }
</page-query>

<style scoped>
.social-twitter {
  margin: 10px;
}
</style>