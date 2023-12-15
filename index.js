//palette buttons
const p1 = document.querySelector("#p0")
const p2 = document.querySelector("#p1")
const p3 = document.querySelector("#p2")
const p4 = document.querySelector("#p3")
const p5 = document.querySelector("#p4")

//clear button 
const clearB = document.querySelector("#clear")

//lists and variables are assigned the same way
const colours = {
  red: ["#ff4242","#96031a","#c1292e","#ed6a5a"],
  orange: ["#fc6203", "#e76f51", "#fe621d", "#ffad69"],
  yellow: ["#f5c45b", "#f5e663", "#f49f0a", "#efca08"],
  green:["#77bd51", "#1e3f20", "#4a7856", "#3ddc97"],
  blue: ["#51bdb7", "#264653", "#495867", "#2c363f", "#1f7a8c"],
  purple: ["#412b5c", "5b1865", "#6d545d", "#9888a5", "#9d79bc"],
  pink: ["#F283B6", "#ce796b", "#e7ad99","ee7674", "#A7333F"],
  brown: ["#5c473f", "#251101", "#dfa06e", "#412722"],
  black: ["#000000", "#222222", "#101419", "#1c1d21"],
  white: ["white", "#f2f5ea", "#d6dbd2"],
}

const palette = []

function updatePalette(event){
  if (palette.length > 5) return
  const colourList = colours[event.target.id]
  const colour = colourList[Math.floor(Math.random()*colourList.length)]
  palette.push(colour)
  render()
}

function render(){
  for (index in palette){
    document.getElementById("p" + index).style.backgroundColor = palette[index]
    document.getElementById("p" + index).childNodes[0].nodeValue= palette[index]
  }
}

function clearPalette(){
  for (index in palette){
    document.getElementById("p" + index).style.backgroundColor = "#FFFFFF"
    document.getElementById("p" + index).childNodes[0].nodeValue= "..."
  }
  palette.length = 0;
}

document.getElementById("buttons").addEventListener("click", updatePalette)
document.getElementById("clear").addEventListener("click", clearPalette)

