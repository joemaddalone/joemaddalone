// node scripts/book.mjs 978-1-60309-057-5
import { commit } from './commit.mjs';
import { downloadFile } from './download.mjs';
import fs from 'fs';

// replace dashes with empty string
const isbn = (process.argv[2] || '').replace(/-/g, '');
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

const updateBooks = (formatted) => {
    const removeArticles = (str) => {
        const words = str.split(' ');
        if (words.length <= 1) return str;
        if (words[0] == 'a' || words[0] == 'the' || words[0] == 'an') return words.splice(1).join(' ');
        return str;
    };
    const books = JSON.parse(fs.readFileSync('../src/content/2024-books/2024-books.11tydata.json'));
    for (let i = 0; i < books.books2024.length; i++) {
        const aTitle = removeArticles(formatted.title.toLowerCase());
        const bTitle = removeArticles(books.books2024[i].title.toLowerCase());
        if (aTitle < bTitle) {
            books.books2024.splice(i, 0, formatted);
            break;
        }
    }
    fs.writeFileSync('../src/content/2024-books/2024-books.11tydata.json', JSON.stringify(books, null, 2));
};

updateBooks(formatted);

if (b[`ISBN:${isbn}`].cover) {
    const cover = b[`ISBN:${isbn}`].cover.large;
    try {
        await downloadFile(cover, `../src/content/2024-books/${isbn}.jpg`);
        commit(`add ${isbn}`);
    }
    catch (err) {
        console.log('no cover');
        console.log(JSON.stringify(b, null, 2));
    }
} else {
    console.log('no cover');
    console.log(JSON.stringify(b, null, 2));
}
