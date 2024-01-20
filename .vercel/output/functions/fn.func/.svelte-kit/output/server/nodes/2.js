import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.J_mQ-qQK.js","_app/immutable/chunks/scheduler.N3FIMnd2.js","_app/immutable/chunks/index.RG5rZPgf.js","_app/immutable/chunks/Button.TViM06G-.js","_app/immutable/chunks/index.HWAEoxz7.js"];
export const stylesheets = ["_app/immutable/assets/2.BUCnd3ug.css","_app/immutable/assets/Button.0pi9Mz6v.css"];
export const fonts = [];
