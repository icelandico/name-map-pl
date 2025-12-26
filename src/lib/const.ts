import { m } from '$lib/paraglide/messages';

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
	{ label: m.option_starting({ phrase: 'Now' }), value: 'now-' },
	{ label: m.option_starting({ phrase: 'Star' }), value: 'star-' },
	{ label: m.option_starting({ phrase: 'Mał' }), value: 'mał-' },
	{ label: m.option_ending({ phrase: '-jmy' }), value: '-jmy' },
	{ label: m.option_ending({ phrase: '-szki' }), value: '-szki' },
	{ label: m.option_ending({ phrase: '-ork' }), value: '-ork' },
	{ label: m.option_ending({ phrase: '-ów' }), value: '-ów' },
	{ label: m.option_ending({ phrase: '-ówek' }), value: '-ówek' },
	{ label: m.option_ending({ phrase: '-chów' }), value: '-chów' },
	{ label: m.option_ending({ phrase: '-szew' }), value: '-szew' },
	{ label: m.option_ending({ phrase: '-góra' }), value: '-góra' },
	{ label: m.option_ending({ phrase: '-rsk' }), value: '-rsk' },
	{ label: m.option_ending({ phrase: '-wieś' }), value: '-wieś' },
	{ label: m.option_ending({ phrase: '-miasto' }), value: '-miasto' },
	{ label: m.option_ending({ phrase: '-wiec' }), value: '-wiec' }
];
