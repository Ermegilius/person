let users = document.querySelector('#users-grid-box');
console.log(users);

//get all user's info from the server
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        data.forEach(element => {
            users.appendChild(document.createElement("div"));
            let user = users.lastChild;
            user.classList.add("card");
            user.appendChild(document.createElement("img"));
            let avatar = user.firstChild;
            avatar.classList.add("user-avatar");
            avatar.src = ""
            avatar.alt = "avatar";
            user.appendChild(document.createElement("div"));
            user.lastChild.classList.add("user-info");
            user.lastChild.appendChild(document.createElement("h4"));
            let userName = user.querySelector("h4");
            userName.innerText = element.name;
            user.lastChild.appendChild(document.createElement("h3"));

            user.lastChild.appendChild(document.createElement("p"));









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