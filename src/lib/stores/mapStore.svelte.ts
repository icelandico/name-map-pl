import type { FilterSpecification, Map } from '@maptiler/sdk';
import * as maptilersdk from '@maptiler/sdk';
import { SearchOption, searchStore } from './searchStore.svelte';
import { getDefaultFilter, getFilterPrefix, getFilterSuffix } from '$lib/const';
import { PUBLIC_MAPTILER_API, PUBLIC_MAPTILER_TILE_ID } from '$env/static/public';

export const mapStore = $state({
	map: null as Map | null,
	setMap() {
		maptilersdk.config.apiKey = PUBLIC_MAPTILER_API;
		const map = new maptilersdk.Map({
			container: 'map',
			style: maptilersdk.MapStyle.BASIC_V2,
			center: [18.1, 52.2],
			zoom: 6
		});

		this.map = map;

		map.on('load', () => {
			if (this.map) {
				this.map.addSource('miejscowosci', {
					type: 'vector',
					url: `https://api.maptiler.com/tiles/${PUBLIC_MAPTILER_TILE_ID}/tiles.json`
				});
				this.map.addLayer({
					id: 'points-data',
					type: 'circle',
					source: 'miejscowosci',
					'source-layer': 'prng_miejscowosci_shp',
					paint: {
						'circle-radius': 4,
						'circle-color': '#204a8c',
						'circle-opacity': 0.8
					}
				});
			}
		});

		map.on('click', 'points-data', function (e) {
			const coordinates = e?.features?.[0].geometry.coordinates.slice();
			const pointName = e?.features?.[0].properties.name;
			const pointType = e?.features?.[0].properties.rodzaj;
			const popupHTML = `
			<div class="popup-content">
				<h1 class="popup-title">Nazwa: ${pointName}</h1>
				<h1 class="popup-type">Typ miejscowości: ${pointType}</h1>
			</div>
			`;

			while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
				coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			}

			new maptilersdk.Popup().setLngLat(coordinates).setHTML(popupHTML).addTo(map);
		});
		map.on('mouseenter', 'points-data', function () {
			map.getCanvas().style.cursor = 'pointer';
		});

		map.on('mouseleave', 'points-data', function () {
			map.getCanvas().style.cursor = '';
		});
	},
	currentFilter() {
		if (searchStore.option === SearchOption.SUFFIX) {
			return getFilterSuffix(searchStore.value) as FilterSpecification;
		}
		if (searchStore.option === SearchOption.PREFIX) {
			return getFilterPrefix(searchStore.value) as FilterSpecification;
		}
		if (searchStore.option === SearchOption.ALL) {
			return getDefaultFilter(searchStore.value) as FilterSpecification;
		}
		return getDefaultFilter('') as FilterSpecification;
	},
	updateMapFilter() {
		if (this.map) {
			this.map.setFilter('points-data', this.currentFilter());
		}
	},
	clearMapFilter() {
		if (this.map) {
			this.map.setFilter('points-data', null);
		}
	}
});
