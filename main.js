let checkbox = document.querySelector('.theme-checkbox')

if(localStorage.getItem('theme') == "true") {
  theme.setAttribute('href', 'dark.css')
  checkbox.checked = true
}

checkbox.onchange = function() {
  if(this.checked) {
    localStorage.setItem('theme', true)
    theme.setAttribute('href', 'dark.css')
  } else {
    localStorage.setItem('theme', false)
    theme.setAttribute('href', 'light.css')
  }
}