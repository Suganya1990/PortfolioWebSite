const listOfSkills = [
  'dist/img/c.svg',
  'dist/img/cplus.svg',
  'dist/img/html.svg',
  'dist/img/js.svg',
  'dist/img/css.svg',
  'dist/img/github.svg',
  'dist/img/mysql.svg',
  'dist/img/nodejs.svg',
  'dist/img/react.svg',
  'dist/img/responsive.svg',
  'dist/img/sass.svg',
  'dist/img/vscode.svg',
]

getWindowSize = () => {
  let width = window.body.clientWidth
  navResize(width)
  dynamicGrid(width)
}

//function that injects bootstrap classes that will either place the nav bar as a mobile version or put the nav bar on the bottom when its over 430.
const navResize = (width) => {
  if (width > 430) {
    document.getElementById('navBar').classList.remove('fixed-top')
    document.getElementById('navBar').classList.add('fixed-bottom')
    document.getElementById('navBar').classList.add('navbar-expand')
    document.getElementById('navbarNavAltMarkup').classList.remove('collapse')
  } else {
    document.getElementById('navBar').classList.remove('fixed-bottom')
    document.getElementById('navBar').classList.add('fixed-top')
    document.getElementById('navbarNavAltMarkup').classList.add('collapse')
    document.getElementById('navBar').classList.remove('navbar-expand')
  }
}
// skills - dynamically inject bootstrap grid layout

const createGridLayout = () => {
  let container = document.createElement('div')
  container.classList.add('container')
  document.getElementById('skills').appendChild(container)
  let row = document.createElement('div')
  container.appendChild(row)
  createGrid = (item) => {
    var column = document.createElement('div')
    var image = document.createElement('img')
    image.src = item
    row.classList.add('row')
    column.classList.add('col')
    column.classList.add('text-center')
    column.appendChild(image)

    row.appendChild(column)
  }

  listOfSkills.forEach(createGrid)
}
createGridLayout()
addCol = (item, col) => {}

dynamicGrid = (width) => {
  var arr = document.getElementsByClassName('col')
  if (width <= 411) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove('col-4')
      arr[i].classList.remove('col-3')
      arr[i].classList.add('col-6')
    }
  } else if (width > 450 && width <= 1024) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove('col-6')
      arr[i].classList.remove('col-3')
      arr[i].classList.add('col-4')
    }
  } else {
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove('col-6')
      arr[i].classList.remove('col-4')
      arr[i].classList.add('col-3')
    }
  }
}
