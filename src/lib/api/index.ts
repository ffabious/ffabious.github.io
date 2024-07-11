import { format } from '../../../node_modules/date-fns/format';
import axios from 'axios';

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

async function fetchInitialData(): Promise<number> {
	const params = new URLSearchParams({
		email: 'k.greshnov@innopolis.university'
	});
	const response = await axios.get('https://fwd.innopolis.university/api/hw2?' + params.toString());
	const id: number = Number.parseInt(response.data);
	return id;
}

async function fetchComicData(): Promise<Comic> {
	const receivedId: number = await fetchInitialData();
	const params = new URLSearchParams({
		id: receivedId.toString()
	});
	const response = await axios.get(
		'https://fwd.innopolis.university/api/comic?' + params.toString()
	);
	const result: Comic = response.data as Comic;
	return result;
}

function getDate(comic: Comic) {
	return format(new Date(comic.year, comic.month, comic.day), 'MMM d, y');
}

export { type Comic, fetchComicData, getDate };
