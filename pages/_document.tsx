import Document, { Head, Html, Main, NextScript } from 'next/document'
// type difitition
import type { DocumentContext } from 'next/document'

const MyDocument = () => {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const initial = await Document.getInitialProps(ctx)
	return { ...initial }
}

export default MyDocument
