<script lang="ts">
	import './layout.css';
	let { children } = $props();
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Search from '$lib/components/Search.svelte';
	import Options from '$lib/components/Options.svelte';
	import { mapStore } from '$lib/stores/mapStore.svelte';
	import '@maptiler/sdk/dist/maptiler-sdk.css';
	import PredefinedOptions from '$lib/components/PredefinedOptions.svelte';
	import Author from '$lib/components/Author.svelte';
	import LangToggle from '$lib/components/LangToggle.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	const appName = getLocale() === 'pl' ? 'Nazwowo' : 'Place Finder PL';

	onMount(async () => {
		mapStore.setMap();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{appName}</title>
</svelte:head>

<div id="map" style="width: 100%; height: 100vh;"></div>
<div class="absolute top-2 left-2 z-10 bg-gray-100 p-2 rounded-md shadow-md">
	<LangToggle />
	<div class="flex gap-4 mt-2">
		<Options />
		<PredefinedOptions />
	</div>
	<Search />
	<Author />
</div>

{@render children()}
