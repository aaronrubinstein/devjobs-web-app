import * as universal from '../entries/pages/_jobId_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_jobId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[jobId]/+page.js";
export const imports = ["_app/immutable/nodes/3.KLQhjCkt.js","_app/immutable/chunks/scheduler.N3FIMnd2.js","_app/immutable/chunks/index.RG5rZPgf.js","_app/immutable/chunks/Button.TViM06G-.js"];
export const stylesheets = ["_app/immutable/assets/3.jkFn8Mck.css","_app/immutable/assets/Button.0pi9Mz6v.css"];
export const fonts = [];
