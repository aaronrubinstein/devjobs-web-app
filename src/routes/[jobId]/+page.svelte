<script>
    import Button from '$lib/components/Button.svelte';
    
    export let data;
    const job = data.job[0];
</script>

<div class="container"> 
    <header>
        <div class="logo-box" style:background={job.logoBackground}>
            <img src={job.logo} alt="{job.company} logo">
        </div>
        <div class="company-and-website">
            <h2>{job.company}</h2>
            <p>{job.company.replace(/\s+/g, '').toLowerCase()}.com</p>
        </div>
        <Button label="Company Site" secondary />
    </header>

    <main>
        <div class="main-header">
            <div class="job-details">
                <p>{job.postedAt} <span class="bullet"></span> {job.contract}</p>
                <h1>{job.position}</h1>
                <p class="location">{job.location}</p>
            </div>
            <Button label="Apply Now" />
        </div>
       
        <p class="body-text">{job.description}</p>
        
        <h3>Requirements</h3>
        <p class="body-text">{job.requirements.content}</p>
        <ul class="job-reqs">
            {#each job.requirements.items as item}
                <li class="job-req-item">{item}</li>
            {/each}
        </ul>
        
        <h3>What you will do</h3>
        <p class="body-text">{job.role.content}</p>
        <ol class="role-details">
            {#each job.role.items as item}
                <li class="role-item">{item}</li>
            {/each}
        </ol>
    </main>
    
    <footer>
        <div class="footer-content">
            <div class="footer-details">
                <h3>{job.position}</h3>
                <p>{job.company}</p>
            </div>
            <Button label="Apply Now" />
        </div>
    </footer>
</div>

<style>
    .container {
        max-width: 730px;
        margin: 0 auto;
    }
    
    header {
        height: 140px; 
        border-radius: 6px;
        background: var(--card-bg);
        overflow: hidden;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        gap: 40px;
        --btn-width: 147px;
        --btn-margin: 0 43px 0 auto;
    }

    .logo-box {
        flex: 0 0 140px;
        height: 100%;
        display: grid;
        place-items: center;
        padding: 0 30px;
    }

    img {
        width: 100%;
    }

    .company-and-website {
        display: flex;
        flex-direction: column;
        gap: 13px;
        justify-content: center;
    }

    h2 {
        font-size: 24px;
        font-weight: 700;
        color: var(--heading-text);
    }

    p, li {
       font-size: 16px;
       font-weight: 400;
       color: var(--text);
    }

    p.body-text, li {
        line-height: 26px;
    }

    main {
        background: var(--card-bg);
        border-radius: 6px;
        padding: 48px 43px 48px 48px;
        margin-bottom: 80px;
    }

    .main-header {
       height: 87px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-bottom: 40px;
       --btn-width: 141px;
    }

    .job-details {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .bullet::after {
        content: "\2022";
        margin: 0 8px 0 8px;
        font-weight: 700;
    }

    h1 {
        font-size: 28px;
        font-weight: 700;
        color: var(--heading-text);
    }

    p.location {
        font-size: 14px;
        font-weight: 700;
        color: var(--violet);
    }

    h3 {
        font-size: 20px;
        font-weight: 700;
        color: var(--heading-text);
        margin: 40px 0 28px 0;
    }

    .job-reqs {
        margin-top: 24px;
        list-style: none;
        padding-left: 32px;
    }

    li {
        margin-bottom: 8px;
    }

    .job-req-item::before {
        content: "•";
        color: var(--violet);
        font-weight: 700;
        font-size: 20px;
        line-height: 16px;
        display: inline-block;
        width: 32px;
        margin-left: -32px;
    }

    .role-details {
        margin-top: 24px;
        list-style: none;
        counter-reset: item;
    }

    .role-item {
        counter-increment: item;
        padding-left: 32px;
    }

    .role-item::before {
        content: counter(item);
        font-size: 16px;
        font-weight: 700;
        color: var(--violet);
        display: inline-block;
        line-height: 26px;
        width: 32px;
        margin-left: -32px;
    }

    footer {
        position: absolute;
        width: 100%;
        left: 0;
        height: 96px;
        background: var(--card-bg);
    }

    .footer-content {
        max-width: 730px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        --btn-width: 141px;
    }

    footer h3 {
        margin: 0;
    }

    .footer-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
    }

    @media (max-width: 1150px) {
        .footer-content {
            max-width: 689px;
        }
    }

    @media (max-width: 750px) {
        
        header {
            height: 205px; 
            margin-bottom: 24px;
            flex-direction: column;
            align-items: center;
            gap: initial;
            --btn-margin: auto auto 32px auto;
            position: relative;
            overflow: initial;
        }

        .logo-box {
            position: absolute;
            flex: 0 0;
            width: 50px;
            height: 50px;
            border-radius: 15px;
            display: grid;
            place-items: center;
            padding: 5px;
            top: -25px;
        }

        img {
            width: initial;
        }

        .company-and-website {
            display: flex;
            flex-direction: column;
            gap: 9px;
            justify-content: flex-start;
            align-items: center;
        }

        h2 {
            font-size: 20px;
            margin-top: 49px;
            line-height: 20px;
        }

        p, li {
        font-size: 16px;
        font-weight: 400;
        color: var(--text);
        }

        main {
            padding: 40px 25px 40px 24px;
            margin-bottom: 64px;
        }

        .main-header {
            height: 175px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
            --btn-width: 100%;
        }

        .job-details {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .bullet::after {
            content: "\2022";
            margin: 0 6px 0 6px;
            font-weight: 700;
        }

        h1, h3 {
            font-size: 20px;
        }

        footer {
            padding: 0 24px;
        }

        .footer-content {
            height: 100%;
            --btn-width: 100%;
        }

        footer h3 {
            margin: 0;
        }

        .footer-details {
            display: none;
        }

    }

</style>