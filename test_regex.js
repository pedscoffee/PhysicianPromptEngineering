const fullText = `
## Few‑Shot Examples

Asthma
Mild persistent asthma with current flare and daily albuterol use. Start Flovent 44 mcg 2 puffs BID with spacer and continue albuterol PRN; no testing or referrals today.
`;

const match = fullText.match(/## Few.*?Shot[^\n]*\n/i);
if (match) {
    const parts = fullText.split(match[0]);
    if (parts.length > 1) {
        let exampleSection = parts[1].split('---')[0].trim();
        const lines = exampleSection.split('\n');
        let startIndex = 0;
        while (startIndex < lines.length && (lines[startIndex].trim() === '' || lines[startIndex].includes('Remember') || lines[startIndex].includes('own for best effect'))) {
            startIndex++;
        }
        sampleText = lines.slice(startIndex).join('\n').trim();
        console.log("MATCH! sampleText is:\n" + sampleText);
    }
} else {
    console.log("No match");
}
