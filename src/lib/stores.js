import { derived, writable } from 'svelte/store';

export const dataStore = writable([]);

export const filterStore = writable({
    details: '',
    location: '',
    contract: ''
});

export const filteredData = derived(
    [dataStore, filterStore],
    ([$d, $f]) => (
        $d.filter(job => job.searchTerms.toLowerCase().includes($f.details.toLowerCase()))
        .filter(job => job.location.toLowerCase().includes($f.location.toLowerCase()))
        .filter(job => job.contract.includes($f.contract))
    )
);