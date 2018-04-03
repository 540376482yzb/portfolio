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

Chart.defaults.global.defaultFontColor = 'red'
var ctx = document.getElementById('myChart')
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Javascript', 'CSS3', 'Responsive Design', 'React/Redux', 'Vue'],
    datasets: [
      {
        label: 'front end skills',
        borderColor: 'rgba(126,120,217,0.9)',
        backgroundColor: 'rgba(121,164,210,0.78)',
        data: [75, 70, 70, 75, 50]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    scale: {
      ticks: {
        max: 90,
        min: 0,
        stepSize: 10
      },
      pointLabels: {
        fontSize: 14,
        fontColor: '#1B100E'
      }
    }
  }
})
