const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification
  ('This is invalid data', 'success'))

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(types ? types : 'getRandomType()')

  notif.innerText = messages ? messages : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomtype() {
  return types[Math.floor(Math.random() * types.length)]
}
