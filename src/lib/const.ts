import { m } from '$lib/paraglide/messages';
import { getLocale } from '$lib/paraglide/runtime';

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
	{ label: m.option_ending({ phrase: '-wiec' }), value: '-wiec' },
	{ label: m.option_ending({ phrase: '-owa' }), value: '-owa' },
	{ label: m.option_ending({ phrase: '-owo' }), value: '-owo' },
	{ label: m.option_ending({ phrase: '-izna' }), value: '-izna' },
	{ label: m.option_ending({ phrase: '-icze' }), value: '-icze' }
];

export function pointTypeMapper(type: string) {
	if (getLocale() === 'pl') return type;

	switch (type) {
		case 'miasto':
			return m.point_type_city();
		case 'wieś':
			return m.point_type_village();
		case 'część miasta':
			return m.point_type_district();
		case 'osada osady':
			return m.point_type_hamlets_hamlet();
		case 'osada':
			return m.point_type_hamlet();
		case 'kolonia':
			return m.point_type_colony();
		case 'przysiółek':
			return m.point_type_przysiolek();
		case 'osiedle':
			return m.point_type_neighborhood();
		default:
			return m.point_type_other();
	}
}
