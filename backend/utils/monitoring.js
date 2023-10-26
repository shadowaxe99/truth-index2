const Prometheus = require('prom-client');

const register = new Prometheus.Registry();
const httpRequestsTotal = new Prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method'],
  registers: [register],
});

const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  registers: [register],
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500] 
});

function monitor(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestsTotal.inc({ method: req.method });
    httpRequestDurationMicroseconds.observe({ method: req.method, route: req.route.path, code: res.statusCode }, duration);
  });
  next();
}

module.exports = {
  monitor,
  register
};