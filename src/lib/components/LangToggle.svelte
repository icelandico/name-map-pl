<script lang="ts">
	import { onMount } from 'svelte';
	import { locales, getLocale, setLocale } from '$lib/paraglide/runtime';

	let languageTag: string = 'en';

	onMount(() => {
		try {
			languageTag = getLocale();
		} catch {
			languageTag = 'en';
		}
	});

	function handleChange(e: Event) {
		const target = e.target as HTMLSelectElement;
		const newTag = target.value as 'en' | 'pl';
		setLocale(newTag);
	}
</script>

<div>
	<select bind:value={languageTag} on:change={handleChange} aria-label="Language">
		{#each locales as tag}
			<option value={tag}>{tag === 'en' ? 'English' : tag === 'pl' ? 'Polski' : tag}</option>
		{/each}
	</select>
</div>
