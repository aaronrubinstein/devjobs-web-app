export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["darkmode.js","data.json","favicon.png","logos/blogr.svg","logos/coffeeroasters.svg","logos/creative.svg","logos/crowdfund.svg","logos/maker.svg","logos/mastercraft.svg","logos/officelite.svg","logos/pod.svg","logos/pomodoro.svg","logos/scoot.svg","logos/typemaster.svg","logos/vector.svg"]),
	mimeTypes: {".js":"text/javascript",".json":"application/json",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.5rktHXbx.js","app":"_app/immutable/entry/app.mZvvj4bW.js","imports":["_app/immutable/entry/start.5rktHXbx.js","_app/immutable/chunks/entry.8ltP1X9F.js","_app/immutable/chunks/scheduler.N3FIMnd2.js","_app/immutable/chunks/index.HWAEoxz7.js","_app/immutable/entry/app.mZvvj4bW.js","_app/immutable/chunks/scheduler.N3FIMnd2.js","_app/immutable/chunks/index.RG5rZPgf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[jobId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"jobId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
