var person1 = ['Sid', 35, 'Livelong'];
console.log(person1[2]);

var person1 = ['Sid', 'Livelong', 35];
console.log(person1[2]);

var person = {
    name: 'Sid',
    age: 35,
    hometown: 'Livelong',
    friends: ['Bob', 'Dylan', 'Aizee', 'Deezee'],
    isFriendly: true,
    birthday: function() {
        this.age++;
        return this.age;
    }
}

person.friends.forEach(function(friends) {
    console.log(friends)
})


// Blog
var postsOutput = document.getElementById("posts")
var posts = [
    {
        author: "Author numero uno",
        title: "Trainforests are rainy",
        comments: ["Yeah dude totally!", "Rainy Raint!", "YEEEEH BOIII", "who asked?", "sus"]
    },
    {
        author: "Numero dos",
        title: "Cities of the world",
        comments: ["Big cities we have", "No more cities", "A city?"]
    }
];

posts.forEach(function(posts) {
    postsOutput.innerHTML += `<br> <span class="postKey">Author: </span>${posts.author} <br> <span class="postKey">Title: </span> ${posts.title} <br> <span class="postKey">Comments: </span> ${posts.comments} <br>`
}) 

var personInfo = document.getElementById("person");
personInfo.innerHTML = `Name: ${person.name} <br> Age: ${person.age} <br> Home Town: ${person.hometown} <br>`;

var input = document.getElementById("updateCity")
input.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        personInfo.innerHTML = 
        `Name: ${person.name} <br> 
        Age: ${person.age} <br> 
        Home Town: ${person.hometown = input.value} <br>`;
        input.value = "";
    }
})

var btnCelebrate = document.getElementById("celebrate")

btnCelebrate.addEventListener("click", () => {
    person.birthday();
    personInfo.innerHTML = 
    `Name: ${person.name} <br> 
    Age: ${person.age} <br> 
    Home Town: ${person.hometown} <br>`;
}) 

/*
******************************************
Create your own code - movieDR
******************************************
*/

// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate trough the array with a forEach and print out something that looks like:
/*
- You have seen "Frozen" - 4.5 stars
- You have not seen "Django" - 5 stars
- You have seen "Vaiana" - 5 stars
- You have not seen "Shawnshank redemtion" - 5 stars 
*/

var movieRatings = document.getElementById("movies")
var movies = [
    {
        rating: 4.5,
        title: "Frozen",
        hasWatched: "You have seen"
    },
    {
        rating: 4.5,
        title: "Django",
        hasWatched: "You have not seen"
    },
    {
        rating: 5,
        title: "Vaiana",
        hasWatched: "You have seen"
    },
    {
        rating: 5,
        title: "Shawnshank Redemtion",
        hasWatched: "You have not seen"
    },
];
movies.forEach(function(movies)  {
    movieRatings.innerHTML += `<br>${movies.hasWatched} ${movies.title} - ${movies.rating} stars<br>`
});
var div = document.getElementById("animals")
var animalBtn = document.getElementsByClassName("animalBtn")
var aDog = document.getElementById("audioDog")
var aCat = document.getElementById("audioCat")
var aCow = document.getElementById("audioCow")
var aWolf = document.getElementById("audioWolf")




var animalSound = {
    dog: function() {
        div.innerHTML = "Woof"
        aDog.play();
    },
    cat: function() {
        div.innerHTML = "Meow"
        aCat.play();

    },
    wolf: function() {
        div.innerHTML = "Auoo"
        aWolf.play();

    },
    cow: function() {
        div.innerHTML = "Moo"
        aCow.play();

    },
}

for(var i = 0; i < animalBtn.length; i++) {
    animalBtn[i].addEventListener("click", function() {
        switch (this.innerHTML) {
            case 'Dog': {
                animalSound.dog();
                break;
            }
            case 'Cat': {
                animalSound.cat();
                break;
            }
            case 'Wolf': {
                animalSound.wolf();
                break;
            }
            case 'Cow': {
                animalSound.cow();
                break;
            }
        }
    })
}

var theFriends = document.getElementById("friends");
var friends = ["Jacob", "Karl", "Steven"]
var removeFriend = document.getElementById("removeFriend")
var addFriend = document.getElementById("addFriend")


friends.forEach(function(friends) {
    theFriends.innerHTML += `Name: ${friends} <br>`;
})


addFriend.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        theFriends.innerHTML += 
        `Name: ${friends.push(input.value)} <br>`;
        input.value = "";
    }
})

removeFriend.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        friends.pop();
        theFriends.innerHTML += `Name: ${friends} <br>`;
        input.value = "";
    }
})

// var btnFriend = document.querySelector('.friend')
// var btnFriend = document.querySelector('.friend')


// var user = {
//     friends: ["Jacob", "Karl", "Steven"],
//     addFriend: function(friend) {
//         this.friends.push(friend);
//     },
//     removeFriend: function(index) {
//         this.friends.splice(index, 1);
//     }
// }

// btnUnfriend.addEventListener('click', function(){
//     user.addFriend(prompt)
// })
    
        
