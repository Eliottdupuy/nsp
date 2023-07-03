```javascript
// Importing required libraries
const natural = require('natural');
const TfIdf = natural.TfIdf;

// Function to retrieve relevant information from the document
function retrieveInfo(pdfContent, userQuery) {
    let tfidf = new TfIdf();
    tfidf.addDocument(pdfContent);

    let relevantInfo = [];
    tfidf.tfidfs(userQuery, function(i, measure) {
        if(measure > 0) {
            relevantInfo.push({
                text: pdfContent[i],
                relevance: measure
            });
        }
    });

    // Sort the relevant information by relevance score
    relevantInfo.sort((a, b) => b.relevance - a.relevance);

    return relevantInfo;
}

module.exports = {
    retrieveInfo
};
```