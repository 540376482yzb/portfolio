/* global $ store*/
const consoleControl = (function() {
  function processAnimateText() {
    if (store.wordCount === store.texts.length) {
      document.querySelector('#animate-text').classList.add('no-after')
      return (store.waiting = true)
    }
    animateText(1)
  }

  function animateText(num) {
    store.wordCount += num
    store.buffer = store.texts.slice(0, store.wordCount)
    render()
  }

  function render() {
    $('#animate-text').text(store.buffer)
  }

  return {
    render,
    processAnimateText
  }
})()
