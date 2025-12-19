const fs = require('fs');
const readmePath = 'README.md';

const date = new Date().toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    dateStyle: 'short',
    timeStyle: 'medium'
});

let currentContent = fs.readFileSync(readmePath, 'utf8');

const newContent = `Dernière maj : ${date}`;


if (currentContent.includes('')) {
    const updatedContent = currentContent.replace(
        /.*/, 
        newContent
    );
    
    fs.writeFileSync(readmePath, updatedContent);
}