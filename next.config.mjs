/** @type {import('next').NextConfig} */

const appVersion = process.env.npm_package_version || '0.0.0'
const config = {
	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	headers: async () => [
		{
			source: '/(.*)',
			headers: [
				{ key: 'X-App-Version', value: appVersion },
				{ key: 'author', value: 'GrayGalaxy (https://github.com/graygalaxy)' },
			],
		},
	],
}

export default config
