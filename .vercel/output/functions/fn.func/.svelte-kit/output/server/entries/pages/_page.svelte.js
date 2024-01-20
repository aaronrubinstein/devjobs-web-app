import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component, d as add_styles, e as escape, f as set_store_value, h as each } from "../../chunks/ssr.js";
import { d as derived, w as writable } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
const dataStore = writable([]);
const filterStore = writable({
  details: "",
  location: "",
  fulltime: false
});
const filteredData = derived(
  [dataStore, filterStore],
  ([$d, $f]) => $d.filter((job) => job.searchTerms.toLowerCase().includes($f.details.toLowerCase())).filter((job) => job.location.toLowerCase().includes($f.location.toLowerCase())).filter((job) => job.contract.includes($f.fulltime ? "Full Time" : ""))
);
const filterOverlay = writable(false);
const ___ASSET___0 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.108%200H.86a.86.86%200%2000-.764.455.833.833%200%2000.068.884l6.685%209.202.007.01c.242.32.374.708.375%201.107v7.502a.825.825%200%2000.248.594.865.865%200%2000.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009%206.685-9.202c.19-.26.217-.6.068-.884A.86.86%200%200019.108%200z'%20fill='%236E8098'%20fill-rule='nonzero'/%3e%3c/svg%3e";
const ___ASSET___1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.112%2015.059h-1.088l-.377-.377a8.814%208.814%200%20002.15-5.784A8.898%208.898%200%20008.898%200%208.898%208.898%200%20000%208.898a8.898%208.898%200%20008.898%208.899c2.211%200%204.23-.808%205.784-2.143l.377.377v1.081l6.845%206.832%202.04-2.04-6.832-6.845zm-8.214%200A6.16%206.16%200%20118.9%202.737a6.16%206.16%200%20010%2012.322z'%20fill='%23FFFFFF'%20fill-rule='nonzero'/%3e%3c/svg%3e";
const css$3 = {
  code: `.container.svelte-1ey2u9z{height:80px;border-radius:6px;background:var(--card-bg);overflow:hidden;display:flex;align-items:center;margin-bottom:105px;--btn-width:123px;--btn-margin:0 16px 0 auto}input.details-filter.narrow.svelte-1ey2u9z{display:none}input[type="text"].svelte-1ey2u9z{border:none;outline:none;font-size:16px;font-weight:400;color:var(--heading-text);background-color:var(--card-bg);background-position:32px 28px;background-repeat:no-repeat;background-origin:border-box;height:100%}input.svelte-1ey2u9z::placeholder{opacity:0.7}input.details-filter.svelte-1ey2u9z{flex:0 1 463px;background-image:url('$lib/assets/images/icon-search.svg');padding-left:72px}input.location-filter.svelte-1ey2u9z{flex:0 1 300px;border-left:1px solid var(--input-border);border-right:1px solid var(--input-border);background-position:23px 28px;background-image:url('$lib/assets/images/icon-location.svg');padding-left:56px}input[type="checkbox"].svelte-1ey2u9z{appearance:none;width:24px;height:24px;border-radius:3px;background-color:var(--checkbox-bg);cursor:pointer;margin-left:32px}input[type="checkbox"].svelte-1ey2u9z:checked{background-color:var(--violet);background-image:url('$lib/assets/images/icon-check.svg');background-repeat:no-repeat;background-position:center}label.svelte-1ey2u9z::after{content:"Full Time Only";cursor:pointer;color:var(--heading-text);font-size:16px;font-weight:700;margin-left:16px}.filter-btn.svelte-1ey2u9z,.search-btn-mobile.svelte-1ey2u9z{display:none}@media(max-width: 1150px){.container.svelte-1ey2u9z{--btn-width:80px}label.svelte-1ey2u9z::after{content:"Full Time"
        }input[type="text"].svelte-1ey2u9z{background-position:24px 28px}input.details-filter.narrow.svelte-1ey2u9z{display:initial}input.details-filter.wide.svelte-1ey2u9z{display:none}input.details-filter.svelte-1ey2u9z{flex:0 1 222px;padding-left:64px;max-width:222px}input.location-filter.svelte-1ey2u9z{flex:0 1 213px;background-position:24px 28px;padding-left:57px;max-width:213px}input[type="checkbox"].svelte-1ey2u9z{margin-left:20px}}@media(max-width: 750px){.container.svelte-1ey2u9z{justify-content:space-between;margin-bottom:57px;--btn-display:none}input.details-filter.wide.svelte-1ey2u9z{display:none}input.details-filter.narrow.svelte-1ey2u9z{display:initial}input.details-filter.svelte-1ey2u9z{flex:0 1 210px;background-image:none;padding-left:24px}input.location-filter.svelte-1ey2u9z{display:none}input[type="checkbox"].svelte-1ey2u9z{display:none
        }.filter-btn.svelte-1ey2u9z{display:block;margin-left:auto;position:relative}.filters-active-dot.svelte-1ey2u9z{position:absolute;right:-2px;width:8px;height:8px;border-radius:50%;background:#ff0303}label.svelte-1ey2u9z{display:none}.search-btn-mobile.svelte-1ey2u9z{display:inline-block;width:48px;height:48px;border-radius:5px;background-color:var(--violet);margin:0 16px 0 24px}.search-icon-mobile.svelte-1ey2u9z{width:20px;height:20px}}`,
  map: null
};
const Filters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtersActive;
  let $filterStore, $$unsubscribe_filterStore;
  let $$unsubscribe_filterOverlay;
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  $$unsubscribe_filterOverlay = subscribe(filterOverlay, (value) => value);
  $$result.css.add(css$3);
  filtersActive = $filterStore.location.length > 0 || $filterStore.fulltime;
  $$unsubscribe_filterStore();
  $$unsubscribe_filterOverlay();
  return `<div class="container svelte-1ey2u9z"><input class="details-filter wide svelte-1ey2u9z" type="text" name="details-filter" id="details-filter" placeholder="Filter by title, companies, expertise..." aria-label="Filter by job title, companies, or expertise"${add_attribute("value", $filterStore.details, 0)}> <input class="details-filter narrow svelte-1ey2u9z" type="text" name="details-filter-small" id="details-filter-small" placeholder="Filter by title..." aria-label="Filter by job title, companies, or expertise"${add_attribute("value", $filterStore.details, 0)}> <input class="location-filter svelte-1ey2u9z" type="text" name="location-filter" id="location-filter" placeholder="Filter by location" aria-label="Filter by location"${add_attribute("value", $filterStore.location, 0)}> <input type="checkbox" name="contract-filter" id="contract-filter" class="svelte-1ey2u9z"${add_attribute("checked", $filterStore.fulltime, 1)}> <label for="contract-filter" class="svelte-1ey2u9z"></label> <button class="filter-btn svelte-1ey2u9z" type="button" aria-label="Open filters">${filtersActive ? `<div class="filters-active-dot svelte-1ey2u9z"></div>` : ``} <img${add_attribute("src", ___ASSET___0, 0)} alt="Filter icon"></button> ${validate_component(Button, "Button").$$render($$result, { label: "Search" }, {}, {})} <button type="button" class="search-btn-mobile svelte-1ey2u9z" aria-label="Search" data-svelte-h="svelte-x56du1"><img class="search-icon-mobile svelte-1ey2u9z"${add_attribute("src", ___ASSET___1, 0)} alt="Search icon"></button> </div>`;
});
const css$2 = {
  code: `.card.svelte-5pr9a1{width:100%;margin:0 24px;border-radius:6px;background:var(--card-bg);overflow:hidden;display:flex;flex-direction:column}input[type="text"].svelte-5pr9a1{width:100%;height:72px;border:none;outline:none;font-size:16px;font-weight:400;color:var(--heading-text);background-color:var(--card-bg);background-image:url('$lib/assets/images/icon-location.svg');background-position:24px 24px;background-repeat:no-repeat;background-origin:border-box;border-bottom:1px solid var(--input-border);padding-left:57px}input.svelte-5pr9a1::placeholder{opacity:0.7}.contract-filter-container.svelte-5pr9a1{display:flex;align-items:center;height:72px}input[type="checkbox"].svelte-5pr9a1{appearance:none;width:24px;height:24px;border-radius:3px;background-color:var(--checkbox-bg);cursor:pointer;margin-left:24px}input[type="checkbox"].svelte-5pr9a1:checked{background-color:var(--violet);background-image:url('$lib/assets/images/icon-check.svg');background-repeat:no-repeat;background-position:center}label.svelte-5pr9a1::after{content:"Full Time Only";cursor:pointer;color:var(--heading-text);font-size:16px;font-weight:700;margin-left:16px}.btn-container.svelte-5pr9a1{margin:0 24px 24px 24px}`,
  map: null
};
const FilterOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filterStore, $$unsubscribe_filterStore;
  let $$unsubscribe_filterOverlay;
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  $$unsubscribe_filterOverlay = subscribe(filterOverlay, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_filterStore();
  $$unsubscribe_filterOverlay();
  return `<div class="card svelte-5pr9a1"><input class="location-filter svelte-5pr9a1" type="text" name="location-filter" id="location-filter" placeholder="Filter by location" aria-label="Filter by location"${add_attribute("value", $filterStore.location, 0)}> <div class="contract-filter-container svelte-5pr9a1"><input type="checkbox" name="contract-filter" id="contract-filter" class="svelte-5pr9a1"${add_attribute("checked", $filterStore.fulltime, 1)}> <label for="contract-filter" class="svelte-5pr9a1"></label></div> <div class="btn-container svelte-5pr9a1">${validate_component(Button, "Button").$$render($$result, { label: "Search" }, {}, {})}</div> </div>`;
});
const css$1 = {
  code: '.card.svelte-1tqardt{width:350px;height:228px;border-radius:6px;background:var(--card-bg);padding:49px 32px 36px 32px;display:flex;flex-direction:column;position:relative}.logo-box.svelte-1tqardt{width:50px;height:50px;border-radius:15px;display:grid;place-items:center;position:absolute;top:-25px}p.svelte-1tqardt{font-size:16px;font-weight:400;color:var(--text)}h2.svelte-1tqardt{font-size:20px;font-weight:700;color:var(--heading-text);margin:16px 0 17px 0;cursor:pointer}h2.svelte-1tqardt:hover{color:var(--text)}a.svelte-1tqardt{color:inherit;text-decoration:inherit}p.location.svelte-1tqardt{font-size:14px;font-weight:700;color:var(--violet);margin-top:auto}.bullet.svelte-1tqardt::after{content:"•";margin:0 8px 0 8px;font-weight:700}@media(max-width: 1150px){.card.svelte-1tqardt{width:339px}}@media(max-width: 750px){.card.svelte-1tqardt{width:327px}}',
  map: null
};
const JobCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { company } = $$props;
  let { logo } = $$props;
  let { logoBackground } = $$props;
  let { position } = $$props;
  let { postedAt } = $$props;
  let { contract } = $$props;
  let { location } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.logoBackground === void 0 && $$bindings.logoBackground && logoBackground !== void 0)
    $$bindings.logoBackground(logoBackground);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.postedAt === void 0 && $$bindings.postedAt && postedAt !== void 0)
    $$bindings.postedAt(postedAt);
  if ($$props.contract === void 0 && $$bindings.contract && contract !== void 0)
    $$bindings.contract(contract);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  $$result.css.add(css$1);
  return `<div class="card svelte-1tqardt"><div class="logo-box svelte-1tqardt"${add_styles({ "background": logoBackground })}><img${add_attribute("src", logo, 0)} alt="${escape(company, true) + " logo"}"></div> <p class="svelte-1tqardt">${escape(postedAt)} <span class="bullet svelte-1tqardt"></span> ${escape(contract)}</p> <h2 class="svelte-1tqardt"><a href="${"/" + escape(id, true)}" class="svelte-1tqardt">${escape(position)}</a></h2> <p class="svelte-1tqardt">${escape(company)}</p> <p class="location svelte-1tqardt">${escape(location)}</p> </div>`;
});
const css = {
  code: "main.svelte-ueb97w{display:grid;grid-template-columns:repeat(3, 1fr);gap:65px 30px;margin-bottom:40px}#overlay-bg.svelte-ueb97w{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.5);z-index:3;display:grid;place-items:center;padding:24px}@media(max-width: 1150px){main.svelte-ueb97w{grid-template-columns:1fr 1fr;gap:65px 11px}}@media(max-width: 750px){main.svelte-ueb97w{grid-template-columns:1fr;row-gap:49px;justify-items:center}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filterOverlay, $$unsubscribe_filterOverlay;
  let $dataStore, $$unsubscribe_dataStore;
  let $filteredData, $$unsubscribe_filteredData;
  $$unsubscribe_filterOverlay = subscribe(filterOverlay, (value) => $filterOverlay = value);
  $$unsubscribe_dataStore = subscribe(dataStore, (value) => $dataStore = value);
  $$unsubscribe_filteredData = subscribe(filteredData, (value) => $filteredData = value);
  let { data } = $$props;
  set_store_value(
    dataStore,
    $dataStore = data.jobs.map((job) => ({
      ...job,
      searchTerms: `${job.position} ${job.company}`
    })),
    $dataStore
  );
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_filterOverlay();
  $$unsubscribe_dataStore();
  $$unsubscribe_filteredData();
  return `${$filterOverlay ? `<div id="overlay-bg" role="button" tabindex="-1" class="svelte-ueb97w">${validate_component(FilterOverlay, "FilterOverlay").$$render($$result, {}, {}, {})}</div>` : ``} ${validate_component(Filters, "Filters").$$render($$result, {}, {}, {})} <main class="svelte-ueb97w">${each($filteredData, (job) => {
    return `${validate_component(JobCard, "JobCard").$$render(
      $$result,
      {
        id: job.id,
        company: job.company,
        logo: job.logo,
        logoBackground: job.logoBackground,
        position: job.position,
        postedAt: job.postedAt,
        contract: job.contract,
        location: job.location
      },
      {},
      {}
    )}`;
  })} </main>`;
});
export {
  Page as default
};
