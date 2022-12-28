export const userService = {
    getUser,
    setUser
}

var currUser = {
    name: 'Mr rando', balance: 100, email: 'randoo@bing.com', moves: []
}


function setUser(user) {
    currUser = user
}

function getUser() {
    return currUser
}