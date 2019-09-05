## Episode Template


### Template
```
---
title: {{ title }}
date: {{ date }}
slug: {{ slug }}
player: {{ player }}
links: 
  - title: {{ link-title }}
    url: {{ link-url }}
---

{{ content }}
```

#### parameter
- title: エピソードのタイトル
- date: 収録日(yyyy-mm-dd)
- slug: エピソード番号(ep01, sp01)
- player: Anchorの埋め込みリンク
- links: ネタのリンク
  - title: ネタのタイトル
  - url: ネタのURL
- content: エピソードの説明など自由に

### Example

```
---
title: たのしいWorks
date: 2018-10-27
slug: ep01
player: <iframe src="https://anchor.fm/tanoshii-works/embed/episodes/ep01-Works-e2furo" height="120px" width="100%" frameborder="0" scrolling="no"></iframe>
links:
  - title: "google"
    url: "https://google.com"
---

「なにかアウトプットしたい。」そう思った3人が集まったPodcastの初回です。
```