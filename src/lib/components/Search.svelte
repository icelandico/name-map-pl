<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { searchStore } from '$lib/stores/searchStore.svelte';
</script>

<div>
	<input
		class="border rounded p-1 focus:bg-grey-100 border-blue-500"
		placeholder={m.type_phrase()}
		bind:value={searchStore.value}
	/>
	<button
		class="bg-blue-500 p-1 rounded cursor-pointer text-yellow-100 hover:bg-blue-400"
		onclick={() => searchStore.handleSearch()}
		>{m.search()}
	</button>
</div>
<button
	class="mt-2 bg-gray-300 p-1 rounded cursor-pointer hover:bg-gray-200"
	onclick={() => searchStore.reset()}>Reset</button
>
