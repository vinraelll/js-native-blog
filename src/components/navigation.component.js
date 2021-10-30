import {Component} from '../core/component'

export class NavigationComponent extends Component {
  constructor(id) {
    super(id) 
  }

  init() {
    this.$el.addEventListener('click', tabsHandler.bind(this))
  }
}

function tabsHandler(e) {
  e.preventDefault()

  Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
    tab.classList.remove('active')
  })

  if (e.target.classList.contains('tab')) {
    e.target.classList.add('active')
  }
}