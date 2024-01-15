<script>
    import { filterStore } from '$lib/stores.js';
    import Button from '$lib/components/Button.svelte';
    let detailsFilter = '';
    let locationFilter = '';
    let contractFilter = false;

    $: {
        $filterStore.details = detailsFilter;
        $filterStore.location = locationFilter;
        $filterStore.contract = contractFilter ? 'Full Time' : '';
    } 

</script>

<div class="container">
    <input 
        bind:value={detailsFilter}
        class="details-filter wide"
        type="text"
        name="details-filter"
        id="details-filter"
        placeholder="Filter by title, companies, expertise..."
        aria-label="Filter by job title, companies, or expertise" >
    <input 
        bind:value={detailsFilter}
        class="details-filter narrow"
        type="text"
        name="details-filter-small"
        id="details-filter-small"
        placeholder="Filter by title..."
        aria-label="Filter by job title, companies, or expertise" >
    <input 
        bind:value={locationFilter}
        class="location-filter"
        type="text"
        name="location-filter"
        id="location-filter"
        placeholder="Filter by location"
        aria-label="Filter by location" >
    <input 
        bind:checked={contractFilter}
        type="checkbox" 
        name="contract-filter" 
        id="contract-filter" >
    <label for="contract-filter"></label>
    <Button label="Search" />
</div>

<style>
    .container {
        height: 80px;
        border-radius: 6px;
        background: var(--card-bg);
        overflow: hidden;
        display: flex;
        align-items: center;
        margin-bottom: 105px;
        --btn-width: 123px;
        --btn-margin: 0 16px 0 auto;
    }

    input.details-filter.narrow {
        display: none;
    }

    input[type="text"] {
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 400;
        color: var(--heading-text);
        background-color: var(--card-bg);
        background-position: 32px 28px;
        background-repeat: no-repeat;
        background-origin: border-box;
        height: 100%;
    }

    input::placeholder {
        opacity: 0.7;
    }

    input.details-filter {
        flex: 0 1 463px;
        background-image: url('$lib/assets/images/icon-search.svg');
        padding-left: 72px;
    }

    input.location-filter {
        flex: 0 1 300px;
        border-left: 1px solid var(--input-border);
        border-right: 1px solid var(--input-border);
        background-position: 23px 28px;
        background-image: url('$lib/assets/images/icon-location.svg');
        padding-left: 56px;
    }

    input[type="checkbox"] {
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 3px;
        background-color: var(--checkbox-bg);
        cursor: pointer;
        margin-left: 32px;
    }

    input[type="checkbox"]:checked {
        background-color: var(--violet);
        background-image: url('$lib/assets/images/icon-check.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    label::after {
        content:"Full Time Only";
        cursor: pointer;
        color: var(--heading-text);
        font-size: 16px;
        font-weight: 700;
        margin-left: 16px;
    }

    @media (max-width: 1150px) {
        .container {
            --btn-width: 80px;
        }
        
        label::after {
            content: "Full Time"
        }

        input[type="text"] {
            background-position: 24px 28px;
        }

        input.details-filter.narrow {
            display: initial;
        }

        input.details-filter.wide {
            display: none;
        }

        input.details-filter {
            flex: 0 1 222px;
            padding-left: 64px;
            max-width: 222px;
        }

        input.location-filter {
            flex: 0 1 213px;
            background-position: 24px 28px;
            padding-left: 57px;
            max-width: 213px;
        }

        input[type="checkbox"] {
            margin-left: 20px;
        }
    }

</style>