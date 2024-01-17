<script>
    export let id;
    export let company;
    export let logo;
    export let logoBackground;
    export let position;
    export let postedAt;
    export let contract;
    export let location;
</script>

<div class="card">
    <div class="logo-box" style:background={logoBackground}>
        <img src={logo} alt="{company} logo">
    </div>
    <p>{postedAt} <span class="bullet"></span> {contract}</p>
    <h2>
        <a href="/{id}">{position}</a>
    </h2>
    <p>{company}</p>
    <p class="location">{location}</p>
</div>

<style>
    .card {
        width: 350px;
        height: 228px;
        border-radius: 6px;
        background: var(--card-bg);
        padding: 49px 32px 36px 32px;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .logo-box {
        width: 50px;
        height: 50px;
        border-radius: 15px;
        display: grid;
        place-items: center;
        position: absolute;
        top: -25px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: var(--text);
    }

    h2 {
       font-size: 20px;
       font-weight: 700; 
       color: var(--heading-text);
       margin: 16px 0 17px 0;
       cursor: pointer;
    }

    h2:hover {
        color: var(--text);
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    p.location {
        font-size: 14px;
        font-weight: 700;
        color: var(--violet);
        margin-top: auto;
    }

    .bullet::after {
        content: "\2022";
        margin: 0 8px 0 8px;
        font-weight: 700;
    }

    @media (max-width: 1150px) {
        .card {
            width: 339px;
        }
    }

    @media (max-width: 750px) {
        .card {
            width: 327px;
        }
    }


</style>