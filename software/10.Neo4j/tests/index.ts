import { describe } from '@jest/globals';

import { TestConfig } from './config.tests';
import { TestAuthor } from './authors.tests';
import { TestBooks } from './books.tests';
import { TestBooksAuthorsRelation } from './books-authors.tests';

describe('Test Suite', () => {
	TestConfig();
	TestAuthor();
	TestBooks();
	TestBooksAuthorsRelation();
});
