import { format } from "../node_modules/date-fns/format";

interface Comic {
    id: number;
    day: number;
    month: number;
    year: number;
    img: string;
    alt: string;
    title: string;
    safe_title: string;
}

// const options = {
//     year: 'number',
//     month: 'long',
//     day: 'number',
// }

async function fetchInitialData() {
    const params = new URLSearchParams({
        'email': 'k.greshnov@innopolis.university',
    });
    return await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString()).then(r => { return r.json() });
}

async function fetchComicData(receivedId : number): Promise<Comic> {
    const params = new URLSearchParams({
        'id': receivedId.toString(),
    });
    return await fetch('https://fwd.innopolis.university/api/comic?' + params.toString()).then(r => { return r.json() });
}

async function display() {
    const fetchResult : Comic = await fetchComicData(await fetchInitialData());

    const section = document.getElementById('fetch-comic');
    const divEl = document.createElement('div');
    const imgEl = document.createElement('img');
    imgEl.id = 'fetch-image'

    const titleEl = document.createElement('p');
    titleEl.id = 'fetch-title';
    const titleText = document.createTextNode(fetchResult.safe_title);
    titleEl.appendChild(titleText);

    imgEl.src = fetchResult.img;
    imgEl.alt = fetchResult.alt;

    const dateEl = document.createElement('p');
    dateEl.id = 'fetch-date';
    const dateTemp = format(new Date(fetchResult.year, fetchResult.month, fetchResult.day), "MMM d, y");
    const dateText = document.createTextNode(dateTemp);
    dateEl.appendChild(dateText);

    divEl.appendChild(titleEl);
    divEl.appendChild(imgEl);
    divEl.appendChild(dateEl);

    if (section != null) {
        section.appendChild(divEl);
    }
}

display();