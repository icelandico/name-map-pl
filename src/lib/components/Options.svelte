<script>
	import { SearchOption, searchStore } from '$lib/stores/searchStore.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div>
	<p class="font-bold">{m.choose_search_option()}</p>
	<input
		type="radio"
		id="option-all"
		name="search-option"
		value={SearchOption.ALL}
		bind:group={searchStore.option}
	/>
	<label for="option-all">{m.all()}</label><br />

	<input
		type="radio"
		id="option-prefix"
		name="search-option"
		value={SearchOption.PREFIX}
		bind:group={searchStore.option}
	/>
	<label for="option-prefix">{m.starting_with()}</label><br />

	<input
		type="radio"
		id="option-suffix"
		name="search-option"
		value={SearchOption.SUFFIX}
		bind:group={searchStore.option}
	/>
	<label for="option-suffix">{m.ending_with()}</label><br /><br />
</div>
