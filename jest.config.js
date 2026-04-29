/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	testEnvironment: "node",
	extensionsToTreatAsEsm: [".ts"],
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.base.json" }],
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				useESM: true,
			},
		],
	},
	testMatch: ["**/src/**/*.test.ts"],
	testPathIgnorePatterns: ["/node_modules/", "/build/"],
	clearMocks: true,
	restoreMocks: true,
	resetMocks: true,
};
