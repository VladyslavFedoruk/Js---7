console.log('1. Створити сторінку, що показує нумерований список пісень:')

const playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }
];

const songsList = document.querySelector("header");

function createPlayList(item) {

    // Созданиние элементов
    let songItem = document.createElement("div");
    let songAuthor = document.createElement("h2");
    let songName = document.createElement("p");

    // Добавление
    songAuthor.textContent = item.author;
    songName.textContent = item.song;

    //вызов обьектов
    songItem.append(songAuthor, songName);
    return songItem;
}
// for (const key in playList) {
//     const item = playList[key];
//     let song = createPlayList(item);
//     body.prepend(song);
// }
// document.body();

playList.map((i) => {
    let song = createPlayList(i);
    songsList.append(song);
})