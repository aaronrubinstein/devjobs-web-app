

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.MMNU-PDl.js","_app/immutable/chunks/scheduler.N3FIMnd2.js","_app/immutable/chunks/index.RG5rZPgf.js"];
export const stylesheets = ["_app/immutable/assets/0.JFjUBN9s.css"];
export const fonts = [];
