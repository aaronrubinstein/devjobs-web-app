<script>
    export let label;
    export let secondary = false;
</script>

<button 
    type="button"
    class:secondary >
    {label}
</button>

<style>
    button {
        display: var(--btn-display, inline-block);
        height: 48px;
        width: var(--btn-width, 100%);
        margin: var(--btn-margin, 0);
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
