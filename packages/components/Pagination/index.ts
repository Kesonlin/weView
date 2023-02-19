import { App } from 'vue'
import Pagination from './index.vue'

Pagination.install = (app: App): void => {
  app.component(Pagination.name, Pagination)
}

export default Pagination
