const tf = require('@tensorflow/tfjs');
const natural = require('natural');

class IdeologicalDetection {
  constructor() {
    this.classifier = new natural.BayesClassifier();
  }

  async trainModel(trainingData) {
    trainingData.forEach((data) => {
      this.classifier.addDocument(data.text, data.label);
    });

    this.classifier.train();
  }

  async predict(text) {
    return this.classifier.classify(text);
  }

  async loadModel(modelPath) {
    this.classifier = natural.BayesClassifier.load(modelPath);
  }

  async saveModel(modelPath) {
    this.classifier.save(modelPath);
  }
}

module.exports = IdeologicalDetection;