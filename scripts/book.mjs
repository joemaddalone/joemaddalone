// node scripts/book.mjs 978-1-60309-057-5

import { downloadFile } from './download.mjs';

const isbn = process.argv[2];
const getBook = async (isbn) => {
    try {
        const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('not fetched');
        throw new Error(err);
    }
};

const b = await getBook(isbn);
const formatted = {
    title: b[`ISBN:${isbn}`].title,
    subtitle: b[`ISBN:${isbn}`].subtitle,
    author: b[`ISBN:${isbn}`].authors[0].name,
    isbn: isbn,
};

console.log(JSON.stringify(formatted, null, 2));

if(b[`ISBN:${isbn}`].cover) {
	const cover = b[`ISBN:${isbn}`].cover.large;
	downloadFile(cover, `../src/content/2023-books/${isbn}.jpg`);
}
else { 
	console.log('no cover');
	console.log(JSON.stringify(b, null, 2));
}
