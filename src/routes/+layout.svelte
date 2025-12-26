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

	onMount(async () => {
		mapStore.setMap();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="map" style="width: 100%; height: 100vh;"></div>
<div class="absolute top-4 left-4 z-10 bg-gray-100 p-2 rounded-md">
	<div class="flex gap-4">
		<Options />
		<PredefinedOptions />
	</div>
	<Search />
</div>

{@render children()}
