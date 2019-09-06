<template>
  <Layout>
    
    <g-image alt="logo" src="./img/logo_transparent.png" />
    <h1 class="center">Portal</h1>
    <p class="center">
      最近気になるIT業界の話をするPodcast、たのしいWorksのポータルサイトです。<br>
      ご意見ご感想は、Twitterで「<a href="https://twitter.com/search?q=%23たのしいWorks" target="_blank" rel="noopener">#たのしいWorks</a>」をつけて、呟いてみてください。<br>
      Podcastを続けていく上での参考にさせていただきます。ぜひお待ちしています！<br>
    </p>
    <div class="social-container">
      <span class="social-twitter">
        <a href="https://twitter.com/tanoshii_works?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @tanoshii_works</a>
      </span>
      <span class="social-twitter">
        <a href="https://twitter.com/intent/tweet?button_hashtag=たのしいWorks&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #たのしいWorks</a>
      </span>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'たのしいWorks Portal'
  }
}
</script>

<style scope>
.home-links a {
  margin-right: 1rem;
}

h1 {
  margin-top: 15px;
}

img{
  max-width: 100%;
}

.center {
  text-align: center;
}

.social-container {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.social-twitter {
  margin: 10px;
}
</style>
