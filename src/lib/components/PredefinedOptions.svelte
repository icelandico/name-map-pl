<script lang="ts">
	import { PREDEFINED_OPTIONS } from '$lib/const';
	import { searchStore } from '$lib/stores/searchStore.svelte';
</script>

<div>
	<h2>Predefined options</h2>
	<select
		bind:value={searchStore.predefined}
		on:change={(e) => searchStore.handleChangePredefined(e.currentTarget.value)}
	>
		<option disabled value="">Select an option</option>
		{#each PREDEFINED_OPTIONS as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
