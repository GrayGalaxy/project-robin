import React from 'react'
import { Page } from 'components'
// type difinition
import type { NextPage, NextPageContext } from 'next'

// types
interface errorPage {
	statusCode: number
	statusText: string
}

// Status codes
const statusCodes: { [index: string]: string } = {
	301: 'Moved Permanently',
	307: 'Temporary Redirect',
	308: 'Permanent Redirect',
	400: 'Bad Request',
	404: 'Cannot Find This Page',
	403: 'Forbidden',
	405: 'Method Not Allowed',
	500: 'Internal Server Error',
	501: 'Not Implemented',
	502: 'Bad Gateway',
	503: 'Service Unavailable',
}

const Error: NextPage<errorPage, {}> = (props) => {
	const { statusCode, statusText } = props

	return (
		<Page id='page-error' className={`page-${statusCode}`}>
			<div className='dispF alignIC p3'>
				<h1 className='error-code pr2'>{statusCode}</h1>
				<div className='error-text pl2'>{statusText}</div>
			</div>
		</Page>
	)
}
Error.displayName = 'Error'
Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const code = res?.statusCode || err?.statusCode || '404'
	const text = statusCodes[String(code)]
	return { statusCode: code, statusText: text }
}

export default Error
