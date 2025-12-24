import { mapStore } from './mapStore.svelte';

export enum SearchOption {
	ALL = 'all',
	PREFIX = 'prefix',
	SUFFIX = 'suffix'
}
export const searchStore = $state({
	value: '',
	option: SearchOption.ALL,
	handleSearch() {
		mapStore.updateMapFilter();
	},
	reset() {
		this.value = '';
		mapStore.clearMapFilter();
	}
});
