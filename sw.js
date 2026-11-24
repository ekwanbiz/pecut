// PECUT lama telah berpindah ke /mathmotion/pecut/. Buang simpanan lama dan nyahdaftar.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('pecut-')).map(n=>caches.delete(n)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('/mathmotion/pecut/'))))});
self.addEventListener('fetch',()=>{});
