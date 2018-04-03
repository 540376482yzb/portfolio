/* global $ consoleControl store */
let timeId = setTimeout(loop, 20)

function loop() {
  // console.log('looping')
  consoleControl.processAnimateText()
  if (!store.waiting) {
    timeId = setTimeout(loop, 20)
  }
}

const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(navItem => {
  navItem.addEventListener('click', e => {
    navItems.forEach(navItem => navItem.classList.remove('select'))
    e.target.classList.add('select')
  })
})

const works = document.querySelector('#works')
let id = -1
const renderWorks = store.projects.map(project => {
  const stacks = project.stacks.map(stack => {
    return `<span class='stack'>${stack}</span>`
  })
  const about = `<div class='about'>
  <i>Created : ${project.created}</i>
</div>`
  ++id

  return `<div id='${id}' class='thumbnail'>
          <a href="${project.urls[1]}" target="_blank"><img class='work-image' src='${project.urls[0]}'></a>
            <title class='title'></title>
            <h3 class='title-text'>${project.title}</h3>
            <div class='stack-holder'></div>
            <div class='stack-span'>
              ${stacks.join(' ')}
              ${about}
            </div>
          </div>`
})
works.innerHTML = `<section class="grid">${renderWorks.join(' ')}</section>`

// this.timerId
// works.querySelectorAll.forEach(thumbnail => {
//   thumbnail.addEventListener('mouseover', e => {
//     console.log(works)
//     clearTimeout(this.timerId)
//     this.timerId = setTimeout(() => {
//       let id = -1
//       const copyWorks = store.projects.map(project => {
//         const stacks = project.stacks.map(stack => {
//           return `<span class='stack'>${stack}</span>`
//         })
//         const about = `<div class='about'>
//         <i>Created : ${project.created} by ${project.author}</i>
//       </div>`
//         ++id
//         return `<div id='${id}' class='thumbnail'>
//                 <a href="https://placeholder.com"><img class='work-image focus-image' src='${project.urls[0]}'></a>
//                   <title class='title hidden'></title>
//                   <h3 class='title-text hidden'>${project.title}</h3>
//                   <div class='stack-span'>
//                     ${stacks.join(' ')}
//                     ${about}
//                   </div>
//                 </div>`
//       })
//       works.innerHTML = `<section class="grid">${copyWorks.join(' ')}</section>`
//     }, 100)
//   })
// })
