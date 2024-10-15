```dataviewjs
const pages = dv.pages()
    .sort(p => p.file.ctime, 'desc')
    .limit(20); // Limit to 10 notes

Promise.all(pages.map(async (p) => {
    const content = await dv.io.load(p.file.path); // Load the content
    const firstFiveLines = content.split("\n").slice(0, 10).join("\n"); // Get the first 10 lines
    return [
        dv.fileLink(p.file.path), // Make title clickable
        firstFiveLines,
        p.file.ctime.toFormat('yyyy-MM-dd'),
        
    ];
})).then(rows => {
    const table = dv.table(["Title", "First 5 lines", "Created" ], rows);
});

```
