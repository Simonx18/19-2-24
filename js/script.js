const alborosie = document.querySelector("#alborosieSection");
const eminem = document.querySelector("#eminemSection");
const metallica = document.querySelector("#metallicaSection");
const queen = document.querySelector("#queenSection");
const modalBtn = document.querySelector("#modalBtn");

const createAlbums = (song, artist) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h5");
    div.id = "cardAlbum";
    div.classList.add("col", "col-3");
    img.classList.add("w-100");
    img.src = song.album.cover_xl;
    title.innerText = song.title;
    div.append(img, title);
    artist.append(div);
}

const getAlborosieAlbums = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=alborosie");
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const alborosieAlbums =  getAlborosieAlbums().then(res => {
    for (let index = 0; index < 4; index++) {
        createAlbums(res[index], alborosie);
    }
})

const getEminemAlbums = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem");
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const eminemAlbums = getEminemAlbums().then(res => {
    for (let index = 0; index < 4; index++) {
        createAlbums(res[index], eminem);
    }
})

const getMetallicaAlbums = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica");
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const metallicaAlbums = getMetallicaAlbums().then(res => {
    for (let index = 0; index < 4; index++) {
        createAlbums(res[index], metallica);
    }
})

const getQueenAlbums = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const queenAlbums = getQueenAlbums().then(res => {
    for (let index = 0; index < 4; index++) {
        createAlbums(res[index], queen);
    }
})

modalBtn.addEventListener("click", () => {
    const songList = document.querySelector("#songList");
    const cardAlbumTitle = document.querySelectorAll("#cardAlbum > h5");
    const list = document.createElement("ul");
    songList.innerHTML = "";
    cardAlbumTitle.forEach(title => {
        const song = document.createElement("li");
        song.innerHTML = `<p>${title.innerText}</p>`;
        list.append(song);
    })
    songList.append(list);
})

class Person {
    constructor(age, firstName, surname){
        this.age = age;
        this.firstName = firstName;
        this.surname = surname;
    }
    getNameAndSurname(){
        return `${this.age} ${this.firstName} ${this.surname}`;
    }
}

const myPerson = new Person(40, "Andrea", "Marangione");
console.log(myPerson);

console.log(myPerson.getNameAndSurname());