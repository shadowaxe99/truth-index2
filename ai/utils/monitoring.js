const Prometheus = require('prom-client');

const register = new Prometheus.Registry();

// Metrics definition
const ideolDetectionDuration = new Prometheus.Histogram({
  name: 'ideological_detection_duration_seconds',
  help: 'Duration of ideological detection process',
  registers: [register],
  buckets: [0.1, 5, 15, 50, 100, 500],
});

const ideolDetectionErrors = new Prometheus.Counter({
  name: 'ideological_detection_errors_total',
  help: 'Total errors in ideological detection process',
  registers: [register],
});

// Function to start the timer and return a function that stops the timer
function startTimer() {
  const start = process.hrtime();
  return function stop() {
    const delta = process.hrtime(start);
    const durationSeconds = delta[0] + delta[1] / 1e9;
    ideolDetectionDuration.observe(durationSeconds);
  };
}

// Function to increment the error counter
function incrementErrorCounter() {
  ideolDetectionErrors.inc();
}

// Function to collect metrics
function collectMetrics() {
  return register.metrics();
}

module.exports = {
  startTimer,
  incrementErrorCounter,
  collectMetrics,
};