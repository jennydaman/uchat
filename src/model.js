function getUser () {
  return {
    name: 'Jennings Zhang',
    pic: 'https://jennydaman.github.io/assets/square_swan.jpg'
  }
}

/**
 * @returns Array
 */
function getConversations () {
  return [
    {
      name: 'Noah Singer',
      pic: 'https://angstromctf.com/assets/images/people/Noah%20Singer.jpg'
    },
    {
      name: 'Noah Kim',
      pic: 'https://angstromctf.com/assets/images/people/Noah%20Kim.jpg'
    },
    {
      name: 'Ian Rackow',
      pic: 'https://angstromctf.com/assets/images/people/Ian%20Rackow.jpg'
    }
  ]
}

function getMessageStream () {
  return [
    {
      platform: 'discord',
      isAuthor: false,
      author: 'Noah Singer',
      messages: ['hey', 'how are you?']
    },
    {
      platform: 'discord',
      isAuthor: true,
      author: 'Jennings Zhang',
      messages: [
        'they ask you how you are',
        "and you have to say you're fine",
        "but you're not really fine"
      ]
    },
    {
      platform: 'hangouts',
      isAuthor: false,
      author: 'Noah Singer',
      messages: [
        'And in conclusion, we have found MySQL to be an excellent database for our website. Any questions?',
        'That is an excellent question.',
        'We have evaluated several NoSQL databases and concluded that the options are all too immature for our production needs.'
      ]
    },
    {
      platform: 'hangouts',
      isAuthor: false,
      author: 'Noah Singer',
      messages: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem arcu, pulvinar eu mauris eget, vestibulum aliquam nisi. Etiam blandit leo lorem, quis gravida nunc faucibus non. Suspendisse potenti. Nam auctor mollis mi sit amet eleifend. Donec nec ornare sem. Integer diam sem, auctor ac ex eget, molestie maximus quam. Fusce pellentesque nisl ac erat vestibulum hendrerit. Praesent ultricies malesuada rhoncus.',
        'Morbi facilisis, augue sit amet imperdiet varius, dui ipsum vestibulum orci, in tempus enim massa nec neque. Fusce facilisis a mi vitae ornare. Phasellus in enim lorem. Praesent malesuada varius lectus vel eleifend. Sed tempus metus et est tempus, nec eleifend sem posuere. Donec laoreet vitae purus quis varius. Aliquam semper lacus sed laoreet consectetur.',
        'Sed eget malesuada ligula. Vivamus a tempor magna. Ut ultricies vel lectus eu viverra. Donec at ligula nunc. Nam tempor a magna at auctor. Morbi nec pulvinar elit. Donec tincidunt elit massa, tristique facilisis odio ultrices quis. Ut accumsan a urna in luctus. Donec porttitor sed odio ac molestie.',
        'In hac habitasse platea dictumst. Integer massa quam, scelerisque vel tellus eu, hendrerit porta turpis. Aliquam erat volutpat. Vestibulum varius lacus sit amet porttitor vulputate. Quisque et justo sed leo pharetra egestas. Integer finibus consectetur metus ac auctor. Aenean purus dui, finibus vel metus eget, convallis tempor ligula. Suspendisse ac accumsan dui. Sed sagittis, tortor sit amet sollicitudin sollicitudin, leo nibh venenatis ipsum, non condimentum turpis velit maximus magna. Nullam non libero eu elit bibendum ullamcorper. Duis a dui sit amet sapien bibendum rhoncus. Aenean sagittis dignissim ipsum, ut finibus ex vestibulum eget. Suspendisse eu nibh pulvinar, pellentesque ipsum quis, vehicula nibh. Nulla aliquet sagittis semper.'
      ]
    }
  ]
}

export {getUser, getConversations, getMessageStream}
