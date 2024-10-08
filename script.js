let cat = document.querySelector('#catImg');
console.log(cat);


async function getCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        console.log(data[0].url);

        cat.style.width = `${data[0].width}px`;
        cat.style.height = `${data[0].height}px`;
        cat.src = `${data[0].url}`;
        console.log(cat);

    } catch (error) {
        console.error('Error', error)
    }
}

getCat();