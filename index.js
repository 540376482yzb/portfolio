/* global $ consoleControl store */
let timeId = setTimeout(loop,200)

function loop() {
  // console.log('looping')
  consoleControl.processAnimateText()
  if(!store.waiting){
    timeId = setTimeout(loop,200)
  }
}