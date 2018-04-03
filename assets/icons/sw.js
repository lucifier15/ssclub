
self.addEventListener('install',function(event){
	console.log('sw installed');
	event.waitUntil(caches.open('static')
		.then(function(cache){
			// cache.add('/');
			// cache.add('/index.html');
		 cache.addAll([
		 		'/',
		 		'/index.html'
		 	]);
		})
	);
	
});

self.addEventListener('activate',function(){
	console.log('sw activated');
});

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request)
		 .then(function(res){
		 	if(res)
		 		return res;
		 	else{
		 		return fetch(event.request);
		 	}
		 })
	);
});