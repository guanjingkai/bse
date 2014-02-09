require('egg').startCluster({
	baseDir: __dirname,
	port: 7002,
	workers: 1, // default to cpu count
  https: true,
 	key: './key/214018990400740.key',
  cert: './key/214018990400740.pem'
});
