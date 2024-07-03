import React, { useEffect, useState } from "react";
import { format } from "../../node_modules/date-fns/format";

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

const fetchInitialData = async (): Promise<number> => {
    const params = new URLSearchParams({
        'email': 'k.greshnov@innopolis.university',
    });
    return await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString()).then(r => { return r.json() });
}

const fetchComicData = async (receivedId: number): Promise<Comic> => {
    const params = new URLSearchParams({
        'id': receivedId.toString(),
    });
    return await fetch('https://fwd.innopolis.university/api/comic?' + params.toString()).then(r => { return r.json() });
}

const ComicBlock: React.FC = () => {
    const [comic, setComic] = useState<Comic | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const id = await fetchInitialData();
            const comicData = await fetchComicData(id);
            setComic(comicData);
        };

        fetch();
    }, []);

    if (!comic) {
        return <div id="fetch-title">Comic wasn't received</div>
    }

    const date = format(new Date(comic.year, comic.month, comic.day), "MMM d, y");

    return (
        <div>
            <h2 className="font-section-name tab" style={{ marginTop: "5%" }}>
                Homeworks 2-3 Section
            </h2>
            <br />
            <div className="fetch-comic">
                <p id="fetch-title">
                    {comic.safe_title}
                </p>
                <img src={comic.img} alt={comic.alt} id="fetch-image" />
                <p id="fetch-date">
                    {date}
                </p>
            </div>
        </div>
    );
};

export default ComicBlock;