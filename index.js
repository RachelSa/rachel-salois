$.getScript( "content.js", function() {
  console.log( "What is the difference between a cat and a comma?" )
})

$catMode = $( "#cat-mode" )
$textColumn = $( "#inner-text" )

$( document ).ready(function() {
    $textColumn.append( loadContent() )
})

$catMode.click(checkMode)

function checkMode(){
  if ($catMode.attr('id') === "cat-mode"){
    catMode()
  } 
  else {
    humanMode()
  } 
}

function loadContent(){
  var fullContent = ""
  $.each(CONTENT, function(index, value) {
    fullContent += "<p>"
    var val = value["content"]
    var partialContent = val.join("")
    fullContent += partialContent
    fullContent += "</p>"
   }) 
  return fullContent
}


function catMode(){
  $catMode.html("<a href=\"#\">human mode</a>")
  $catMode.prop('id', 'human-mode')
  $textColumn.empty()
  $textColumn.append( catContent() )  
}

function humanMode(){
  $catMode.html("<a href=\"#\">cat mode</a>")
  $catMode.prop('id', 'cat-mode')
  $textColumn.empty()
  $textColumn.append( loadContent() )
}

function catContent(){
  console.log( "One has the paws before the claws and the other has the clause before the pause." )
  var fullContent = ""
  $.each(CONTENT, function(index, value) {
    fullContent += "<p>"
    var val = value["content"]
    var partialContent = ""
    for (var part in val){
      if (isLink(val[part])) { 
        partialContent += ` ${val[part]}`}
      else if (isWords(val[part])) {
        partialContent += ` ${meowify(val[part])}`}
      else if (isPunct(part)) {
        partialContent += val[part]}
      else {
        partialContent += val[part]}  
    }
    fullContent += capitalize(partialContent)
    fullContent += "</p>"
   }) 
  return fullContent
}

function isLink(string){
  return string.includes("<a")
}

function isWords(string){
  var letters = /[a-zA-Z]/g
  return letters.test(string)
}

function isPunct(string){
  var punct = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
  return punct.test(string)
}

function meowify(text){
  var len = text.split(" ").length
  var meows = Array.apply(null, Array(len)).map(function () {return "meow"})
  return meows.join(" ")
}

function capitalize(text){
  var sentences = text.split(". ")
  var capitalized = sentences.map(function(sentence){
    var cap = sentence[1].toUpperCase()
    return cap + sentence.substr(2, sentence.length - 1)
  })
return capitalized[0]
}


// function findPunct(text){
//   var regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g, result, indices = []
//   while ( (result = regex.exec(text)) ) {
//     indices.push(result.index);
//   }
//   return indices
// }

// function linkSubstrings(id){
//   var text = document.getElementById(id).innerHTML
//   var indices = findLinks(id), end = text.length, links = []

//   for (index in indices){
//     endIndex = text.substr(index, end).search(">")
//     links.push([index, endIndex])
//   } 
//   return links
// }