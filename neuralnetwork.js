const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// Example to determine who got a grade in school
// Subjects: Sally, Dexter and Amy

const sallyReportCard = { Biology: 100, Math: 100, English: 100 }
const dexterReportCard = { Biology: 60, Math: 60, English: 60 }
const amyReportCard = { Biology: 0, Math: 0, English: 0 }

network.train([ { input: sallyReportCard, output: { evaluation: 1 } },
                { input: dexterReportCard, output: { evaluation: 0.6 } },
                { input: amyReportCard, output: { evaluation: 0 } }
            ]);

const katherineReportCard = { Biology: 68, Math: 90, English: 55 }

const results = network.run(katherineReportCard);

console.log(`These are the results of Katherine's performance: ${JSON.stringify(results)}`);