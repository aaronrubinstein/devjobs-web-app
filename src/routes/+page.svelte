<script>
    import { dataStore, filteredData, filterOverlay } from '$lib/stores.js';
    import Filters from '$lib/components/Filters.svelte';
    import FilterOverlay from '$lib/components/FilterOverlay.svelte';
    import JobCard from '$lib/components/JobCard.svelte';

    export let data;

    $dataStore = data.jobs.map(job => ({
        ...job,
        searchTerms: `${job.position} ${job.company}`
    }));

    const closeOverlay = e => {
        if (e.target.id === 'overlay-bg') $filterOverlay = false;
    }

</script>

{#if $filterOverlay}
    <div id="overlay-bg" on:click={closeOverlay} on:keyup={closeOverlay} role="button" tabindex="-1">
        <FilterOverlay />
    </div>    
{/if}

<Filters />

<main>
    {#each $filteredData as job}
        <JobCard
            id={job.id}
            company={job.company}
            logo={job.logo}
            logoBackground={job.logoBackground} 
            position={job.position}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location} />
    {/each}
</main>


<style>
    main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 65px 30px;
    }

    #overlay-bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 3;
        display: grid;
        place-items: center;
        padding: 24px;
    }

    @media (max-width: 1150px) {
        main {
            grid-template-columns: 1fr 1fr;
            gap: 65px 11px;
        }
    }

    @media (max-width: 750px) {
        main {
            grid-template-columns: 1fr;
            row-gap: 49px;
            justify-items: center;
        }
    }

</style>