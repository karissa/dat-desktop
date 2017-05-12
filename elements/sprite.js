const microcomponent = require('microcomponent')
const datIcons = require('dat-icons')

module.exports = svgSprite

function svgSprite () {
  const component = microcomponent('svg-sprite')
  component.on('render', render)
  component.on('update', update)
  return component

  function render () {
    const _el = document.createElement('div')
    _el.innerHTML = datIcons()
    return _el.childNodes[0]
  }

  function update () {
    return false
  }
}
