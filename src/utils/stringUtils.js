function stringArrayToListText (array = []) {
  if (array.length === 0) {
    return ''
  } else if (array.length === 1) {
    return array[0]
  } else if (array.length === 2) {
    return `${array[0]} and ${array[1]}`
  } else if (array.length > 2) {
    let text = ''

    array.forEach((element, index) => {
      if (index === 0) {
        text += element
      } else if (index === array.length - 1) {
        text += `, and ${element}`
      } else {
        text += `, ${element}`
      }
    })

    return text
  }
}

export { stringArrayToListText }
