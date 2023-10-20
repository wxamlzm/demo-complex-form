function component () {
  console.log(_)
  const element = document.createElement('div')
  //
  element.interHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
