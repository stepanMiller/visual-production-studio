// The container cannot enumerate network interfaces. Bind only to loopback.
const portConfig = require('./node_modules/@remotion/renderer/dist/port-config.js');
portConfig.getPortConfig = () => ({host: '127.0.0.1', hostsToTry: ['127.0.0.1']});
