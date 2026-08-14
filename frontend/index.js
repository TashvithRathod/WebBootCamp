var users = [
    {
        "name": "john doe",
        "gender": "male",
        "image": "john.png"
    },
    {
        "name": "jane doe",
        "gender": "female",
        "image": "jane.png"
    }
];

var curId = 0;

function toggleUser() {
    curId = (curId + 1) % 2;

    var userName = document.getElementById("user-name");
    var userImage = document.getElementById("user-image");
    var userGender = document.getElementById("user-gender");

    userName.innerHTML = users[curId].name;
    userGender.innerHTML = users[curId].gender;
    userImage.src = users[curId].image;
}


function randomUser(){
    fetch("https://randomuser.me/api")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
             var userName = document.getElementById("user-name");
             var userImage = document.getElementById("user-image");
             var userGender = document.getElementById("user-gender");

             var newUserName = data.results[0].name.first + "" + data.results[0].name.last;
             var newUserGender = data.results[0].gender;
             var newUserImage = data.results[0].picture.large;

             userName.innerHTML= newUserName;
             userGender.innerHTML= newUserGender;
             userImage.src = newUserImage;
        })
        .catch(function(err){
            console.log("Error occured : " + err);
        });
}