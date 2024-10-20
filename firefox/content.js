function randomlychangeword(word) {
  if (word.length <= 3) return word
  let middle = word.slice(1, -1).split('')
  for (let i = middle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[middle[i], middle[j]] = [middle[j], middle[i]]
  }
  return word[0] + middle.join('') + word[word.length - 1]
}

function handleinput(event) {
  const target = event.target
  const text = target.value || target.textContent
  const words = text.split(/\s+/)
  const changedwords = words.map(randomlychangeword)
  const newtext = changedwords.join(' ')
  
  if (target.value !== undefined) {
    target.value = newtext
  } else {
    target.textContent = newtext
  }
}

document.addEventListener('keydown', handleinput)
