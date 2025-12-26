<script lang="ts">
	import { PREDEFINED_OPTIONS } from '$lib/const';
	import { m } from '$lib/paraglide/messages';
	import { searchStore } from '$lib/stores/searchStore.svelte';
</script>

<div>
	<p class="font-bold">{m.predefined_options()}</p>
	<select
		bind:value={searchStore.predefined}
		on:change={(e) => searchStore.handleChangePredefined(e.currentTarget.value)}
	>
		<option disabled value="">{m.choose_option()}</option>
		{#each PREDEFINED_OPTIONS as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
