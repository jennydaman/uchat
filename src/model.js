function getUser () {
  return fetch('/mock/user.json').then(response => response.json())
}

function getConversations () {
  return fetch('/mock/conversations.json').then(response => response.json())
}

function getMessageStream (id) {
  return fetch(`/mock/stream/${id}.json`).then(response => response.json())
}

export {getUser, getConversations, getMessageStream}
