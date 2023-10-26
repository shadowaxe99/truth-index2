const tf = require('@tensorflow/tfjs');
const natural = require('natural');

class MachineLearningUtils {
  constructor() {
    this.classifier = new natural.BayesClassifier();
  }

  async trainModel(trainingData) {
    trainingData.forEach((data) => {
      this.classifier.addDocument(data.text, data.label);
    });

    this.classifier.train();
  }

  classifyText(text) {
    return this.classifier.classify(text);
  }

  async createModel(inputShape) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [inputShape]}));
    model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

    model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy', metrics: ['accuracy']});

    return model;
  }

  async trainModel(model, inputs, labels) {
    const history = await model.fit(inputs, labels, {
      batchSize: 32,
      epochs: 50,
      shuffle: true,
      validationSplit: 0.2
    });

    return history;
  }

  predict(model, input) {
    return model.predict(input);
  }
}

module.exports = MachineLearningUtils;