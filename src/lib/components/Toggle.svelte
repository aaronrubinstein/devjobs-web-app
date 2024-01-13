<label class="switch" aria-label="Toggle dark/light mode">
    <input type="checkbox">
    <span class="slider"></span>
</label>

<style>    
    .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 24px;
        background: var(--card-bg);
        transition: background-color .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        border-radius: 50%;
        left: 5px;
        bottom: 5px;
        background-color: var(--violet);
        transition: .4s;
    }

    input:checked + .slider:before {
        transform: translateX(21px);
    }

    .switch:hover .slider:before {
        background: var(--light-violet);
    }
    
</style>