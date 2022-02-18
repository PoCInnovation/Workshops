import { describe, it, expect } from '@jest/globals';

import { AuthorsPropertiesI, Country } from '../src/entities/Authors/AuthorsEntity';
import * as Authors from '../src/entities/Authors/AuthorsModels';

export const TestAuthor = () =>
	describe("Step 2 - Authors' CRUD", () => {
		let author: AuthorsPropertiesI;

		const authorProps: Omit<AuthorsPropertiesI, 'id'> = {
			firstname: 'Joanne',
			lastname: 'Rowling',
			pseudonym: 'J. K. Rowling',
			age: 55,
			country: Country.UK,
		};

		describe('0 - Create Author', () => {
			it('Create Author', async () => {
				author = await Authors.createAuthor(authorProps);

				const test = () => {
					expect(author).toHaveProperty('id');

					// Check firstname
					expect(author).toHaveProperty('firstname');
					expect(authorProps.firstname).toBe(author.firstname);

					// Check lastname
					expect(author).toHaveProperty('lastname');
					expect(authorProps.lastname).toBe(author.lastname);

					// Check age
					expect(author).toHaveProperty('age');
					expect(authorProps.age).toBe(author.age);

					// Check pseudonym
					expect(author).toHaveProperty('pseudonym');
					expect(authorProps.pseudonym).toBe(author.pseudonym);

					// Check country
					expect(author).toHaveProperty('country');
					expect(authorProps.country).toBe(author.country);
				};
				test();
			});
		});

		describe('1 - Get Authors', () => {
			it('Get Authors', async () => {
				const books = await Authors.getAuthors();
				expect(books).toHaveLength(1);

				const test = () => {
					expect(books[0]).toHaveProperty('id');

					// Check firstname
					expect(books[0]).toHaveProperty('firstname');
					expect(authorProps.firstname).toBe(books[0].firstname);

					// Check lastname
					expect(books[0]).toHaveProperty('lastname');
					expect(authorProps.lastname).toBe(books[0].lastname);

					// Check age
					expect(books[0]).toHaveProperty('age');
					expect(authorProps.age).toBe(books[0].age);

					// Check pseudonym
					expect(books[0]).toHaveProperty('pseudonym');
					expect(authorProps.pseudonym).toBe(books[0].pseudonym);

					// Check country
					expect(books[0]).toHaveProperty('country');
					expect(authorProps.country).toBe(books[0].country);
				};
				test();
			});
		});

		describe('2 - Get Author', () => {
			it('Get invalid author', async () => {
				const notFound = await Authors.getAuthor('not found');
				if (notFound != null) {
					fail();
				}
			});

			it('Get Author', async () => {
				const foundBook = await Authors.getAuthor(author.id);
				if (!foundBook) {
					fail();
				}

				const test = () => {
					expect(foundBook).toHaveProperty('id');

					// Check firstname
					expect(foundBook).toHaveProperty('firstname');
					expect(authorProps.firstname).toBe(foundBook.firstname);

					// Check lastname
					expect(foundBook).toHaveProperty('lastname');
					expect(authorProps.lastname).toBe(foundBook.lastname);

					// Check age
					expect(foundBook).toHaveProperty('age');
					expect(authorProps.age).toBe(foundBook.age);

					// Check pseudonym
					expect(foundBook).toHaveProperty('pseudonym');
					expect(authorProps.pseudonym).toBe(foundBook.pseudonym);

					// Check country
					expect(foundBook).toHaveProperty('country');
					expect(authorProps.country).toBe(foundBook.country);
				};
				test();
			});
		});

		describe('3 - Update Author', () => {
			it('Update invalid author', async () => {
				const notFound = await Authors.updateAuthors('not found', {
					age: 56,
				});
				if (notFound != null) {
					fail();
				}
			});

			it('Update Author', async () => {
				const updatedAuthor = await Authors.updateAuthors(author.id, {
					age: 56,
				});
				if (!updatedAuthor) {
					fail();
				}
				authorProps.age = 56;
				const test = () => {
					expect(updatedAuthor).toHaveProperty('id');

					// Check firstname
					expect(updatedAuthor).toHaveProperty('firstname');
					expect(authorProps.firstname).toBe(updatedAuthor.firstname);

					// Check lastname
					expect(updatedAuthor).toHaveProperty('lastname');
					expect(authorProps.lastname).toBe(updatedAuthor.lastname);

					// Check age
					expect(updatedAuthor).toHaveProperty('age');
					expect(authorProps.age).toBe(updatedAuthor.age);

					// Check pseudonym
					expect(updatedAuthor).toHaveProperty('pseudonym');
					expect(authorProps.pseudonym).toBe(updatedAuthor.pseudonym);

					// Check country
					expect(updatedAuthor).toHaveProperty('country');
					expect(authorProps.country).toBe(updatedAuthor.country);
				};
				test();
				author = updatedAuthor;
			});
		});

		describe('4 - Delete Author', () => {
			it('Delete Author', async () => {
				await Authors.deleteAuthor(author.id);

				const authors = await Authors.getAuthors();
				expect(authors).toHaveLength(0);
			});
		});
	});
