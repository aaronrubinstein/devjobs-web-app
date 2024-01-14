<script>
    import '$lib/app.css';
    import Toggle from '$lib/components/Toggle.svelte';
</script>

<svelte:head>
    <title>Devjobs</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
    <header>
        <img src="$lib/assets/images/logo.svg" alt="Devjobs logo">
        <div class="theme-toggle">
            <img src="$lib/assets/images/icon-sun.svg" alt="Sun icon">
            <Toggle />
            <img src="$lib/assets/images/icon-moon.svg" alt="Moon icon">
        </div>
    </header>
    
    <slot />
</div>


<style>
    .container {
        max-width: 1150px;
        padding: 0 20px;
        margin: 0 auto;
    }
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 44px 0;
    }

    .theme-toggle {
        width: 112px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 1150px) {
        .container {
            max-width: 729px;
        }
    }
</style>