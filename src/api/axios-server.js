const axios = require('axios');
const LRU = require('lru-cache');

export function API(){
	// It has a maximum size of 1000 items and items older than 10 minutes are expired.
	axios.server = true;
	axios.cachedItems = LRU({
		max: 1000,
		maxAge: 1000 * 60 * 10
	});
	
	return axios;
}
