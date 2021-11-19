import {Component} from '../core/component'

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
  }
  
  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))
  }
}

function submitHandler(event) {
  event.preventDefault()
}