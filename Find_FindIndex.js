function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
        return user.username === username
    })
}

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
]
findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined

function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
        return user.username === username
    })
    if(foundIndex === -1)
        return;
    return usersArray.splice(foundIndex,1)[0]
}

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined