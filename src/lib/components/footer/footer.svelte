<script>
	import EmailButton from './components/email-button.svelte';
	import GithubButton from './components/github_button.svelte';
	import TelegramButton from './components/telegram_button.svelte';
</script>

<footer
	class="bg-headerback flex text-logomain fixed min-h-16 min-w-[100%] m-0 l-0 justify-center bottom-0"
>
	<nav>
		<ul class="flex relative top-[18.75%]">
			<TelegramButton />
			<GithubButton />
			<EmailButton />
		</ul>
	</nav>
</footer>
