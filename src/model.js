function getUser () {
  return fetch('/uchat/mock/user.json').then(response => response.json())
}

function getConversations () {
  return fetch('/uchat/mock/conversations.json').then(response => response.json())
}

function getMessageStream (id) {
  return fetch(`/uchat/mock/stream/${id}.json`).then(response => response.json())
}

export {getUser, getConversations, getMessageStream}
