<script lang="ts">
	import { searchStore } from '$lib/stores/searchStore.svelte';
</script>

<div>
	<input
		class="border rounded p-1 focus:bg-grey-100 border-blue-500"
		placeholder="Type your phrase"
		bind:value={searchStore.value}
	/>
	<button
		class="bg-blue-500 p-1 rounded cursor-pointer text-yellow-100 hover:bg-blue-400"
		onclick={() => searchStore.handleSearch()}
		>Search
	</button>
</div>
<!-- <button
	class="mt-2 bg-gray-300 p-1 rounded cursor-pointer hover:bg-gray-200"
	on:click={() => (searchStore.value = '')}>Clear search</button
> -->
