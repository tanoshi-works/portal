import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faExternalLinkSquareAlt);

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}