export const getDefaultFilter = (value: string) => [
	'all',
	['has', 'name'],
	['>=', ['index-of', ['downcase', value], ['downcase', ['get', 'name']]], 0]
];

export const getFilterPrefix = (value: string) => [
	'all',
	['has', 'name'],
	['==', ['index-of', ['downcase', value], ['downcase', ['get', 'name']]], 0]
];

export const getFilterSuffix = (value: string) => [
	'all',
	['>=', ['index-of', ['downcase', value], ['downcase', ['get', 'name']]], 0],
	['>=', ['length', ['get', 'name']], ['length', value]],
	[
		'==',
		['index-of', ['downcase', value], ['downcase', ['get', 'name']]],
		['-', ['length', ['get', 'name']], ['length', value]]
	]
];
