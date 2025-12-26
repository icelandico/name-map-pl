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

export const PREDEFINED_OPTIONS = [
	{ label: 'Starting with "Now"', value: 'now-' },
	{ label: 'Starting with "Star"', value: 'star-' },
	{ label: 'Starting with "Mał"', value: 'mał-' },
	{ label: 'Ending with "-jmy"', value: '-jmy' },
	{ label: 'Ending with "-szki"', value: '-szki' },
	{ label: 'Ending with "-ork"', value: '-ork' },
	{ label: 'Ending with "-ów"', value: '-ów' },
	{ label: 'Ending with "-ówek"', value: '-ówek' },
	{ label: 'Ending with "-chów"', value: '-chów' },
	{ label: 'Ending with "-szew"', value: '-szew' },
	{ label: 'Ending with "-góra"', value: '-góra' },
	{ label: 'Ending with "-rsk"', value: '-rsk' },
	{ label: 'Ending with "-wieś"', value: '-wieś' },
	{ label: 'Ending with "-wieś"', value: '-miasto' },
	{ label: 'Ending with "-wieś"', value: '-wiec' }
];
