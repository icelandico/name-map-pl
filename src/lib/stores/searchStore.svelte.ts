import { mapStore } from './mapStore.svelte';

export enum SearchOption {
	ALL = 'all',
	PREFIX = 'prefix',
	SUFFIX = 'suffix'
}
export const searchStore = $state({
	value: undefined as string | undefined,
	predefined: '',
	option: SearchOption.ALL,
	handleSearch() {
		mapStore.updateMapFilter();
	},
	reset() {
		this.value = undefined;
		this.predefined = '';
		this.option = SearchOption.ALL;
		mapStore.clearMapFilter();
	},
	handleChangePredefined(value: string) {
		this.predefined = value;
		if (value.startsWith('-')) {
			this.option = SearchOption.SUFFIX;
			this.value = value.slice(1);
		} else if (value.endsWith('-')) {
			this.option = SearchOption.PREFIX;
			this.value = value.slice(0, -1);
		} else {
			this.option = SearchOption.ALL;
			this.value = value;
		}

		mapStore.updateMapFilter();
	}
});
