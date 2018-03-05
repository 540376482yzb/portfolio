/* global $ store*/
const consoleControl = (function(){

  function processAnimateText(){
    if(store.wordCount === store.texts.length){
      document.querySelector('#blinker').classList.remove('blinker')
      document.querySelector('#blinker').classList.add('hide')
      return store.waiting = true
    }
    animateText(1)
  }

  function animateText(num){
    store.wordCount +=num
    store.buffer = store.texts.slice(0,store.wordCount)
    render()
  }

  function render(){
    // console.log(store.buffer, store.wordCount)
    $('#animate-text').text(store.buffer)
  }

  return {
    render,
    processAnimateText
  }
}())