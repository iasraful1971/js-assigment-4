// solution 4 
function perfectFriend(friends){
// err handling of object
if(typeof (friends) != 'object'){
    return 'enter valid friendlist';
}

    for(friend of friends){
        if(friend.length  ==  5){
            return friend;
        }
    }
}

let friends = ['asraful' , 'babu', 'mansu' , 'kabu' , 'dabu' ,'himu', 'masum', 'sk'];

// output 
const result = perfectFriend(friends);
console.log(result);

