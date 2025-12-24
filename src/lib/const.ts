export const getFilterPrefix = (value: string) => [
	'all',
	['has', 'name'],
	['==', ['index-of', ['downcase', value], ['downcase', ['get', 'name']]], 0]
];

export const getFilterSuffix = (value: string) => [
	'all',
	['has', 'name'],
	[
		'==',
		['index-of', ['downcase', value], ['downcase', ['get', 'name']]],
		['-', ['length', ['get', 'name']], ['length', ['downcase', value]]]
	]
];

export const getDefaultFilter = (value: string) => [
	'all',
	['has', 'name'],
	['>=', ['index-of', ['downcase', value], ['downcase', ['get', 'name']]], 0]
];
