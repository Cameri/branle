import Generate from '../components/Generate.vue'
import Publish from '../components/Publish.vue'
import Reply from '../components/Reply.vue'
import Post from '../components/Post.vue'

export default ({app}) => {
  app.component('Generate', Generate)
  app.component('Publish', Publish)
  app.component('Reply', Reply)
  app.component('Post', Post)
}
