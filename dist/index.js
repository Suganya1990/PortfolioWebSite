//change the nav bar to be at the bottom when width of the screen is over px 375

//first get the width of the screen when user resizes the window

//compare the width of the window with px 375

getWindowSize = () => {
  let width = window.body.clientWidth
  if (width > 412) {
    document.getElementById('navBar').classList.add('fixed-bottom')
    document.getElementById('navBar').classList.add('navbar-expand')
    document.getElementById('navbarNavAltMarkup').classList.remove('collapse')
  } else {
    document.getElementById('navBar').classList.remove('fixed-bottom')
    document.getElementById('navbarNavAltMarkup').classList.add('collapse')
    document.getElementById('navBar').classList.remove('navbar-expand')
  }
}
