<script>
	import '../app.css';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<meta 
	name="author"
	content="Kirill Greshnov"
/>

<meta 
	name="description"
	content="Computer Science student at Innopolis University"
/>

<Header />
<slot />
<div class="min-h-24" />
<Footer />

<style>
	:global(body) {
		background-color: #a461e3;
	}
</style>
