import { describe, expect, it } from '@jest/globals';

import * as Authors from '../src/entities/Authors/AuthorsModels';
import * as Books from '../src/entities/Books/BooksModels';
import { BooksPropertiesI } from '../src/entities/Books/BooksEntity';
import { AuthorsPropertiesI, Country } from '../src/entities/Authors/AuthorsEntity';
import { detachBookFromAuthor, getAuthorBooks, linkBookToAuthor } from '../src/entities/Books/BooksRelation';

export const TestBooksAuthorsRelation = () => {
	describe('Step 4 - Books / Authors relation', () => {
		let books: BooksPropertiesI[] = [];
		let author: AuthorsPropertiesI;

		const authorProps: Omit<AuthorsPropertiesI, 'id'> = {
			firstname: 'John',
			lastname: 'Doe',
			pseudonym: 'John Doe',
			age: 30,
			country: Country.FRA,
		};

		const bookProps: Omit<BooksPropertiesI, 'id'> = {
			title: "Books' title",
			summary: "Books' description",
			rate: 10,
			price: 20,
			pages: 200,
		};

		describe('Initialize database', () => {
			it('Create author', async () => {
				author = await Authors.createAuthor(authorProps);

				for (let i = 0; i !== 3; i += 1) {
					// eslint-disable-next-line no-await-in-loop
					books.push(await Books.createBook(bookProps));
				}
			});
		});

		describe('0 - Create Relation', () => {
			it('Create Relation', async () => {
				const linkedAuthors = await linkBookToAuthor(books[0].id, author.id);

				if (!linkedAuthors) {
					fail();
				}

				const test = () => {
					expect(author).toHaveProperty('id');

					// Check firstname
					expect(linkedAuthors).toHaveProperty('firstname');
					expect(authorProps.firstname).toBe(linkedAuthors.firstname);

					// Check lastname
					expect(linkedAuthors).toHaveProperty('lastname');
					expect(authorProps.lastname).toBe(linkedAuthors.lastname);

					// Check age
					expect(linkedAuthors).toHaveProperty('age');
					expect(authorProps.age).toBe(linkedAuthors.age);

					// Check pseudonym
					expect(linkedAuthors).toHaveProperty('pseudonym');
					expect(authorProps.pseudonym).toBe(linkedAuthors.pseudonym);

					// Check country
					expect(linkedAuthors).toHaveProperty('country');
					expect(authorProps.country).toBe(linkedAuthors.country);

					// Check books
					expect(linkedAuthors).toHaveProperty('books');
					expect(linkedAuthors.books).toHaveLength(1);
				};
				test();
			});
		});

		describe('1 - Get Authors relations', () => {
			it('Get authors', async () => {
				await linkBookToAuthor(books[1].id, author.id);
				await linkBookToAuthor(books[2].id, author.id);

				const authorBooks = await getAuthorBooks(author.id);

				if (!authorBooks) {
					fail();
				}
				expect(authorBooks.books).toHaveLength(3);

				authorBooks.books.forEach((book) => {
					const test = () => {
						expect(book).toHaveProperty('id');

						// Check title
						expect(book).toHaveProperty('title');
						expect(bookProps.title).toBe(book.title);

						// Check summary
						expect(book).toHaveProperty('summary');
						expect(bookProps.summary).toBe(book.summary);

						// Check price
						expect(book).toHaveProperty('price');
						expect(bookProps.price).toBe(book.price);

						// Check rate
						expect(book).toHaveProperty('rate');
						expect(bookProps.rate).toBe(book.rate);

						// Check pages
						expect(book).toHaveProperty('pages');
						expect(bookProps.pages).toBe(book.pages);
					};
					test();
				});
			});
		});

		describe('2 - Detach relation', () => {
			it('Detach relation', async () => {
				await detachBookFromAuthor(books[0].id, author.id);
				const authorBooks = await getAuthorBooks(author.id);

				if (!authorBooks) {
					fail();
				}
				expect(authorBooks.books).toHaveLength(2);
			});
		});

		describe('Clean database', () => {
			it('Clean database', async () => {
				await Authors.deleteAuthor(author.id);

				await Promise.all(books.map(async (book) => Books.deleteBook(book.id)));
			});
		});
	});
};
