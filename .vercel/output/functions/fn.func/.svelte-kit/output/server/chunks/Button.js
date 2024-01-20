import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: "button.svelte-1vsl5bw{display:var(--btn-display, inline-block);height:48px;width:var(--btn-width, 100%);margin:var(--btn-margin, 0);border-radius:5px;background:var(--violet);font-size:16px;font-weight:700;color:var(--white)}button.svelte-1vsl5bw:hover{background:var(--light-violet)}button.secondary.svelte-1vsl5bw{background:var(--secondary-button);color:var(--secondary-button-text)}button.secondary.svelte-1vsl5bw:hover{background:var(--secondary-button-hover)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { secondary = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css);
  return `<button type="button" class="${["svelte-1vsl5bw", secondary ? "secondary" : ""].join(" ").trim()}">${escape(label)} </button>`;
});
export {
  Button as B
};
