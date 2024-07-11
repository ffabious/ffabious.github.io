<script lang="ts">
	import { format } from '../../../node_modules/date-fns/format';
	import { type Comic, fetchComicData, getDate } from '$lib/api';
	let comic: Comic | null = null;
	fetchComicData().then((newComic) => {
		comic = newComic;
	});
</script>

<title>Comic | Kirill's Website</title>

{#if comic !== null}
	<h2 class="mt-[5%] ml-[20%] font-ConcertOne font-medium not-italic text-5xl text-logomain">
		Comic Section
	</h2>
	<br />
	<p class="font-Rubik font-normal text-logomain text-2xl ml-[20%]">
		{comic.safe_title}
	</p>
	<img src={comic.img} alt={comic.img} class="ml-[20%] mt-4" />
	<p class="font-Rubik font-normal text-logomain text-2xl ml-[20%] mt-4">
		{getDate(comic)}
	</p>
{:else}
	<h2 class="mt-[5%] ml-[20%] font-ConcertOne font-medium not-italic text-5xl text-logomain">
		Loading...
	</h2>
{/if}
