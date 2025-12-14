<script>
	import { SearchOption, searchStore } from '$lib/stores/searchStore.svelte';
</script>

<div>
	<p>Choose search option</p>
	<input
		type="radio"
		id="option-all"
		name="search-option"
		value={SearchOption.ALL}
		bind:group={searchStore.option}
	/>
	<label for="option-all">Search all</label><br />

	<input
		type="radio"
		id="option-prefix"
		name="search-option"
		value={SearchOption.PREFIX}
		bind:group={searchStore.option}
	/>
	<label for="option-prefix">Prefix only</label><br />

	<input
		type="radio"
		id="option-suffix"
		name="search-option"
		value={SearchOption.SUFFIX}
		bind:group={searchStore.option}
	/>
	<label for="option-suffix">Suffix only</label><br /><br />
</div>
