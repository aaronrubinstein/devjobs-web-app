<script>
    import '$lib/app.css';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
    <title>Devjobs</title>
</svelte:head>

<header>
    <!-- <img src="$lib/assets/images/logo.svg" alt="Devjobs logo"> -->
</header>

<slot />

<style>
    header {
        max-width: 1110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 44px auto;
    }
</style>