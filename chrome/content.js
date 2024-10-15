function randomlyChangeWord(word) {
  if (word.length <= 3) return word
  newword = word.split('')
  
  for (let i = 1; i < newword.length - 1; i++) {
    if (Math.random() < 0.3) {
      let j = Math.floor(Math.random() * (newword.length - 2)) + 1
      [newword[i], newword[j]] = [newword[j], newword[i]]
    }
  }
  
  return newword.join('')
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

document.addEventListener('input', handleinput)
