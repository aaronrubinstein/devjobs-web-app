<script>
    export let label;
    export let width = '100%';
    export let secondary = false;
</script>

<button 
    type="button"
    class:secondary
    style="width: {width};" >
    {label}
</button>

<style>
    button {
        height: 48px;
        border-radius: 5px;
        background: var(--violet);
        font-size: 16px;
        font-weight: 700;
        color: var(--white);
    }

    button:hover {
        background: var(--light-violet);
    }

    button.secondary {
        background: var(--secondary-button);
        color: var(--secondary-button-text);
    }

    button.secondary:hover {
        background: var(--secondary-button-hover);
    }
</style>
