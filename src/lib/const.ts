export const getFilterPrefix = (value: string) => [
	'all',
	['has', 'name'],
	['>=', ['index-of', value, ['get', 'name']], 0]
];

export const getFilterSuffix = (value: string) => [
	'all',
	['has', 'name'],
	['>', ['index-of', value, ['get', 'name']], -1],
	['==', ['index-of', value, ['get', 'name']], ['-', ['length', ['get', 'name']], value.length]]
];
