const naturalLanguage = require('natural');
const tokenizer = new natural.WordTokenizer();

/**
 * Function to tokenize the input text
 * @param {string} text - The text to be tokenized
 * @returns {Array} - Returns an array of words
 */
function tokenizeText(text) {
    return tokenizer.tokenize(text);
}

/**
 * Function to perform stemming on the input text
 * @param {string} text - The text to be stemmed
 * @returns {string} - Returns the stemmed text
 */
function stemText(text) {
    return natural.PorterStemmer.stem(text);
}

/**
 * Function to perform sentiment analysis on the input text
 * @param {string} text - The text for sentiment analysis
 * @returns {Object} - Returns an object with score, comparative, words, positive, and negative arrays
 */
function analyzeSentiment(text) {
    const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
    return analyzer.getSentiment(tokenizeText(text));
}

module.exports = {
    tokenizeText,
    stemText,
    analyzeSentiment
};