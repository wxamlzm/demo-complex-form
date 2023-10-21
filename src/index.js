import _ from 'lodash'
function component () {
  console.log(_)
  const element = document.createElement('div')
  // 改用import引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
