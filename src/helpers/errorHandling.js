const R = require('ramda')

function handleErrors (response) {
  const tryer = (response) => Boolean(response.ok)
  const catcher = (response) => { throw Error(response.statusText) }
  R.tryCatch(tryer, catcher)(response)
}

const errors = { // Possibly funny list of possible error messages
  codeMirror: [
    'External plugin CodeMirror made a HUGE mistake',
    'CodeMirror reflects nothing!'
  ],
  header: [
    'No header today',
    'Save buttons are missed'
  ],
  _wrong: [ // error(s) for wrong error reason
    'Really sad, but there is an error in the error message. Sorry.'
  ]
}

const messages = {
  _wrong: [ // message(s) for wrong error reason
    'Really sad, but there is an error in the error message. Sorry.'
  ]
}

export function displayMessage (message = 'others') {
  return displayRandomMessageFromArray(messages, message)
}

export function displayError (reason = 'others') {
  return displayRandomMessageFromArray(errors, reason)
}

function displayRandomMessageFromArray (list, type) {
  const messages = list[type] || list['_wrong']
  const random = Math.floor(Math.random() * Math.floor(messages.length))
  return messages[random]
}

export default [
  errors,
  messages,
  displayError,
  displayMessage,
  handleErrors
]
