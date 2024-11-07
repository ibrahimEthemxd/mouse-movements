const container = document.querySelector(".container")

const colors = [
    ' #4c6ca8 ',
    ' #3e86f0 ',
    ' #b79cd0 ',
    ' #b5d09c ',
    ' #c3add8 ',
    ' #6a329f ',
    ' #ae7bb5 ',
    ' #ac8fa5 ',
    ' #a78eb8 ',
    ' #1345aa ',
    ' #94b1ff ',
    ' #00bfff ',
    ' #ffe505 ',
    ' #de37d0 ',
    ' #f8f8ff ',
    ' #715fd1 ',
    ' #9999ff ',
    ' #00bfff ',
    ' #fed85d ',
    ' #9999ff ',
    ' #94b1ff ',
    ' #f2d100 ',
    ' #003f35 ',
    ' #ffffff ',
    ' #333333 ',
    ' #70ae6e ',
    ' #3c6e71 ',
    ' #1345ab ',
    ' #13ab45 ',
    ' #1345bb ',
    ' #1345aa ',
    ' #4513ba ',
    ' #ab1345 ',
    ' #c03865 ',
    ' #fd0e35 ',
    ' #c32148 ',
    ' #00ff00 ',
    ' #1f5109 ',
    ' #ed0a3f ',
    ' #ffffff ',
    ' #fff7fc ',
    ' #ffcfee ',
]
const SQUARE = 300

for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))

    container.appendChild(square)
}

function setColor(div) {
    const randomColor = getRandomColor()
    div.style.backgroundColor = getRandomColor()
    div.style.boxShadow = `1px 2px ${randomColor} , 3px 6px 12px ${randomColor}`
}
function removeColor(div){
    div.style.backgroundColor = '#111'
    div.style.boxShadow = '0 0 2px #000'
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

