// Start snowfall when page loads
window.addEventListener('load', startSnowfall)

let section = document.querySelector('section')
let j = 0
while (j < 180) {
  let star = document.createElement('i')
  let x = Math.floor(Math.random() * window.innerWidth)
  star.style.left = `${x}px`

  let y = Math.floor(Math.random() * window.innerHeight)
  star.style.top = `${y}px`

  let size = Math.random() * 4
  star.style.width = `${1 + size}px`
  star.style.height = `${1 + size}px`

  let duration = Math.random() * 2
  star.style.animationDuration = `${duration + 3}s`

  section.appendChild(star)
  j++
}

function createSnowflake() {
  const snowflake = document.createElement('div')
  snowflake.classList.add('snowflake')

  // Random horizontal position
  snowflake.style.left = Math.random() * 100 + 'vw'

  // Random size between 2 and 10 pixels
  const size = Math.random() * 8 + 2
  snowflake.style.width = `${size}px`
  snowflake.style.height = `${size}px`

  // Random fall duration between 3 and 10 seconds
  snowflake.style.animationDuration = `${Math.random() * 7 + 3}s`

  // Random opacity
  snowflake.style.opacity = Math.random()

  section.appendChild(snowflake)

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove()
  }, 10000)
}

// Create snowflakes periodically
function startSnowfall() {
  setInterval(createSnowflake, 100)
}
