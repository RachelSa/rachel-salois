const textColumn = document.getElementById("inner-text")
const catModeEl = document.getElementById("cat-mode")

window.onload = () => {
  console.log( "What is the difference between a cat and a comma?" )
  catModeEl.addEventListener("click", checkMode)
  humanMode()
}

function checkMode(){
  if (catModeEl.id === "cat-mode"){
    catMode()
  }
  else {
    humanMode()

  }
}

function catMode(){
  console.log( "One has the paws before the claws and the other has the clause before the pause." )
  catModeEl.innerHTML = "<a href='#'>human mode</a>"
  catModeEl.id = 'human-mode'
  textColumn.innerHTML = ""
  textColumn.innerHTML = CAT_CONTENT
}

function humanMode(){
  catModeEl.innerHTML = "<a href='#'>cat mode</a>"
  catModeEl.id = 'cat-mode'
  textColumn.innerHTML = ""
  textColumn.innerHTML = HUMAN_CONTENT
}
