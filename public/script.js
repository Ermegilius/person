let users = document.querySelector('#users-grid-box');
console.log(users);

//get all user's info from the server
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        console.log(data);

        data.forEach(element => {
            let id = element.id;
            let name = element.name;
            let userName = element.username;
            let userEmail = element.email;

            users.appendChild(document.createElement("div"));
            let currentUser = users.lastChild;
            currentUser.classList.add("card");
            currentUser.appendChild(document.createElement("img"));
            let avatar = currentUser.firstChild;
            avatar.classList.add("user-avatar");
            avatar.src = `https://robohash.org/wewillruketheworld${id}.png?set=set4`;
            avatar.alt = "avatar";
            currentUser.appendChild(document.createElement("div"));
            currentUser.lastChild.classList.add("user-info");

            currentUser.lastChild.appendChild(document.createElement("h4"));
            let currentUserName = currentUser.querySelector("h4");
            currentUserName.innerText = name;

            currentUser.lastChild.appendChild(document.createElement("h3"));
            let currentUseruserNickName = currentUser.querySelector("h3");
            currentUseruserNickName.innerText = userName;

            currentUser.lastChild.appendChild(document.createElement("p"));
            let currentUserEmail = currentUser.querySelector("p");
            currentUserEmail.innerText = userEmail;
        });




        // cat.style.width = `${data[0].width}px`;
        // cat.style.height = `${data[0].height}px`;
        // cat.src = `${data[0].url}`;
        // console.log(cat);

    } catch (error) {
        console.error('Error', error)
    }
}


//get current year for copyright in the footer:
document.getElementById("year").innerHTML = new Date().getFullYear();


window.addEventListener('load', getUsers);