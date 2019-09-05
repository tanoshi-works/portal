<template>
  <Layout>
    <h1>{{ $page.episode.slug }} / {{ $page.episode.title }}</h1>
    <div class="item-title" v-html="$page.episode.date" />
    <div class="content" v-html="$page.episode.content" />
    <div class="player" v-html="$page.episode.player" />
    <!-- <h2>エピソード内のリンク</h2>
    <ul v-for="link in $page.episode.links" :key="link.title">
      <li><a href="link.url" target="_blank"><span v-html="link.title" /></a></li>
    </ul> -->
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