<script>
    import Filters from '$lib/components/Filters.svelte';
    import JobCard from '$lib/components/JobCard.svelte';

    export let data;
    const { jobs } = data;

</script>

<Filters />

<main>
    {#each jobs as job}
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

    @media (max-width: 1150px) {
        main {
            grid-template-columns: 1fr 1fr;
            gap: 65px 11px;
        }
    }

</style>