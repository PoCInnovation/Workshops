import { describe, it, expect } from '@jest/globals';
import { dbConfig } from '../src/config';

export const TestConfig = () =>
	describe('Setup - Check config', () => {
		it('Database config has username', () => {
			expect(dbConfig).toHaveProperty('user');
			expect(dbConfig.user).toBe('neo4j');
		});

		it('Database config has password', () => {
			expect(dbConfig).toHaveProperty('password');
			expect(dbConfig.password).toBeDefined();
		});

		it('Database config has host', () => {
			expect(dbConfig).toHaveProperty('host');
			expect(dbConfig.host).toBeDefined();
		});

		it('Database config has port', () => {
			expect(dbConfig).toHaveProperty('port');
			expect(dbConfig.port).toBeDefined();
		});
	});
