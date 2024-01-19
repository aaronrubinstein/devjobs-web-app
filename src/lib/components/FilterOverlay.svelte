<script>
    import { filterStore, filterOverlay } from '$lib/stores.js';
    import Button from '$lib/components/Button.svelte';
</script>

<div class="card">
    <input 
        bind:value={$filterStore.location}
        class="location-filter"
        type="text"
        name="location-filter"
        id="location-filter"
        placeholder="Filter by location"
        aria-label="Filter by location" >
        
    <div class="contract-filter-container">
        <input 
            bind:checked={$filterStore.fulltime}
            type="checkbox" 
            name="contract-filter" 
            id="contract-filter" >
        <label for="contract-filter"></label>
    </div>
    <div class="btn-container">
        <Button label="Search" on:click={() => $filterOverlay = false} />
    </div>
</div>

<style>
    .card {
        width: 100%;
        margin: 0 24px;
        border-radius: 6px;
        background: var(--card-bg);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    input[type="text"] {
        width: 100%;
        height: 72px;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 400;
        color: var(--heading-text);
        background-color: var(--card-bg);
        background-image: url('$lib/assets/images/icon-location.svg');
        background-position: 24px 24px;
        background-repeat: no-repeat;
        background-origin: border-box;
        border-bottom: 1px solid var(--input-border);
        padding-left: 57px;
    }

    input::placeholder {
        opacity: 0.7;
    }

    .contract-filter-container {
        display: flex;
        align-items: center;
        height: 72px;
    }

    input[type="checkbox"] {
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 3px;
        background-color: var(--checkbox-bg);
        cursor: pointer;
        margin-left: 24px;
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

    .btn-container {
        margin: 0 24px 24px 24px;
    }


</style>