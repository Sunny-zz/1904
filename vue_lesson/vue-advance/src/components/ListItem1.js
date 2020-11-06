export default {
  render (h) {
    return <li>
      {
        this.render ? this.render(h, this.item) : <span>{this.item}</span>
      }
    </li>
  },
  props: {
    item: {
      type: String,
      required: true
    },
    render: {
      type: Function
    }
  }
}