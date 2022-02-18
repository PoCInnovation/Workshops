import { describe, it, expect } from '@jest/globals';

import { BooksPropertiesI } from '../src/entities/Books/BooksEntity';
import * as Books from '../src/entities/Books/BooksModels';

export const TestBooks = () =>
	describe("Step 3 - Authors' CRUD", () => {
		let book: BooksPropertiesI;

		const bookProps: Omit<BooksPropertiesI, 'id'> = {
			title: "Harry Potter and the Philosopher's Stone",
			summary: 'A real famous book',
			rate: 8,
			price: 25,
			pages: 233,
		};

		describe('0 - Create Book', () => {
			it('Create Book', async () => {
				book = await Books.createBook(bookProps);

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

		describe('1 - Get Books', () => {
			it('Get Books', async () => {
				const books = await Books.getBooks();
				expect(books).toHaveLength(1);

				const test = () => {
					expect(books[0]).toHaveProperty('id');

					// Check title
					expect(books[0]).toHaveProperty('title');
					expect(bookProps.title).toBe(books[0].title);

					// Check summary
					expect(books[0]).toHaveProperty('summary');
					expect(bookProps.summary).toBe(books[0].summary);

					// Check price
					expect(books[0]).toHaveProperty('price');
					expect(bookProps.price).toBe(books[0].price);

					// Check rate
					expect(books[0]).toHaveProperty('rate');
					expect(bookProps.rate).toBe(books[0].rate);

					// Check pages
					expect(books[0]).toHaveProperty('pages');
					expect(bookProps.pages).toBe(books[0].pages);
				};
				test();
			});
		});

		describe('2 - Get Book', () => {
			it('Get invalid book', async () => {
				const notFound = await Books.getBook('not found');
				if (notFound != null) {
					fail();
				}
			});

			it('Get Book', async () => {
				const foundBook = await Books.getBook(book.id);
				if (!foundBook) {
					fail();
				}

				const test = () => {
					expect(foundBook).toHaveProperty('id');

					// Check title
					expect(foundBook).toHaveProperty('title');
					expect(bookProps.title).toBe(foundBook.title);

					// Check summary
					expect(foundBook).toHaveProperty('summary');
					expect(bookProps.summary).toBe(foundBook.summary);

					// Check price
					expect(foundBook).toHaveProperty('price');
					expect(bookProps.price).toBe(foundBook.price);

					// Check rate
					expect(foundBook).toHaveProperty('rate');
					expect(bookProps.rate).toBe(foundBook.rate);

					// Check pages
					expect(foundBook).toHaveProperty('pages');
					expect(bookProps.pages).toBe(foundBook.pages);
				};
				test();
			});
		});

		describe('3 - Update Book', () => {
			it('Update invalid book', async () => {
				const notFound = await Books.updateBook('not found', {
					rate: 10,
				});
				if (notFound != null) {
					fail();
				}
			});

			it('Update Book', async () => {
				const updatedBook = await Books.updateBook(book.id, {
					rate: 10,
				});
				if (!updatedBook) {
					fail();
				}
				bookProps.rate = 10;
				const test = () => {
					expect(updatedBook).toHaveProperty('id');

					// Check title
					expect(updatedBook).toHaveProperty('title');
					expect(bookProps.title).toBe(updatedBook.title);

					// Check summary
					expect(updatedBook).toHaveProperty('summary');
					expect(bookProps.summary).toBe(updatedBook.summary);

					// Check price
					expect(updatedBook).toHaveProperty('price');
					expect(bookProps.price).toBe(updatedBook.price);

					// Check rate
					expect(updatedBook).toHaveProperty('rate');
					expect(bookProps.rate).toBe(updatedBook.rate);

					// Check pages
					expect(updatedBook).toHaveProperty('pages');
					expect(bookProps.pages).toBe(updatedBook.pages);
				};
				test();
				book = updatedBook;
			});
		});

		describe('4 - Delete Book', () => {
			it('Delete Book', async () => {
				await Books.deleteBook(book.id);

				const books = await Books.getBooks();
				expect(books).toHaveLength(0);
			});
		});
	});
