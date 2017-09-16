var pico8_buttons = [0,0,0,0,0,0,0,0];

const map = {
  "left": 1,
  "right": 2,
  "up": 4,
  "down": 8,
  "z": 16,
  "x": 32
}

const container = document.createElement("div")
const butns = document.createElement("div")
container.appendChild(butns)
butns.id = "btns"
document.querySelector('body').appendChild(container)

function addButton(button, text) {
  const btn = document.createElement("div")
  btn.classList.add("button")
  const img = document.createElement("img")
  img.src = "xz.png"
  btn.appendChild(img)
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault()
    pico8_buttons[0] += map[button]
    const val = pico8_buttons[0].toString(2)
  })
  btn.addEventListener('touchend', (e) => {
    e.preventDefault()
    pico8_buttons[0] -= map[button]
  })
  btn.addEventListener('touchmove', (e) => {
    e.preventDefault()
  })
  butns.appendChild(btn)
}

function addXY(button, text) {
  const btn = document.createElement("div")
  btn.classList.add("button")
  btn.classList.add("xy")
  const img = document.createElement("img")
  img.src = "dpad.png"
  btn.appendChild(img)
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault()
    const coords = e.target.getBoundingClientRect()
    // const pageX = e.pageX
    // const pageY = e.pageY
    const pageX = e.changedTouches[0].pageX
    const pageY = e.changedTouches[0].pageY
    const x = pageX - (coords.left + coords.width/2)
    const y = -(pageY - (coords.top + coords.height/2))
    if (Math.abs(x) > coords.width/2 || Math.abs(y) > coords.height/2) return;
    if (x > 20) {
      pico8_buttons[0] += map["right"]
    } else if (x < -20) {
      pico8_buttons[0] += map["left"]
    } 
    if (y > 20) {
      pico8_buttons[0] += map["up"]
    } else if (y < -20) {
      pico8_buttons[0] += map["down"]
    }
  })


  btn.addEventListener('touchend', (e) => {
    e.preventDefault()
    const val = calculateButtons(pico8_buttons)
      .filter(x => x == 5 || x == 4)
      .reduce((acc, curr) => acc + Math.pow(2, curr), 0);
    pico8_buttons[0] = val
  })


  btn.addEventListener('touchmove', (e) => {
    e.preventDefault()
    const coords = e.target.getBoundingClientRect()
    // const pageX = e.pageX
    // const pageY = e.pageY
    const pageX = e.changedTouches[0].pageX
    const pageY = e.changedTouches[0].pageY
    const x = pageX - (coords.left + coords.width/2)
    const y = -(pageY - (coords.top + coords.height/2))
    const btns = calculateButtons(pico8_buttons)

    //if move out of area
    if (x < 10 + (40 * y/(coords.height/2))) {
      if (btns.includes(1))
      pico8_buttons[0] -= map["right"]
    } 
    if (x > -(10 + (40 * y/(coords.height/2)))) {
      if (btns.includes(0))
      pico8_buttons[0] -= map["left"]
    } 
    if (y < 10 + (40 * x/(coords.width/2)) ){
      if (btns.includes(2))
      pico8_buttons[0] -= map["up"]
    }
    if (y > -10 + (40 * x/(coords.width/2)) ){
      if (btns.includes(3))
      pico8_buttons[0] -= map["down"]
    }
    
    //if move into area
    if (x > 10 + (40 * y/(coords.height/2))) {
      if (!btns.includes(1))
      pico8_buttons[0] += map["right"]
    }
    if (x < -(10 + (40 * y/(coords.height/2)))) {
      if (!btns.includes(0)) 
      pico8_buttons[0] += map["left"]
    } 
    if (y > 10 + (40 * x/(coords.width/2))) {
      if (!btns.includes(2))
      pico8_buttons[0] += map["up"]
    } 
    if (y < -10 + (40 * x/(coords.width/2))) {
      if (!btns.includes(3))
      pico8_buttons[0] += map["down"]
    }
  })
  butns.appendChild(btn)
}

function calculateButtons(picobtns) {
  val = picobtns[0]
  .toString(2)
  .split('')
  .reverse()
  .reduce((acc, cur, i) => {
    if (cur == '1') {
      acc.push(i);
      return acc;
    }
    return acc;
  }, [])

  return val
}
addButton("x","X")
// addButton("z","Z")
addXY("xy", "XY")



