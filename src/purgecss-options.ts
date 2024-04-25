export const getDefaultPurgeOptions = () => ({
	css: [],
	content: [],
	extractors: [],
	fontFace: false,
	keyframes: false,
	rejected: false,
	rejectedCss: false,
	sourceMap: false,
	stdin: false,
	stdout: false,
	variables: false,
	safelist: {
		standard: [],
		deep: [],
		greedy: [],
		variables: [],
		keyframes: [],
	},
	blocklist: [],
	skippedContentGlobs: [],
	dynamicAttributes: [],
});
