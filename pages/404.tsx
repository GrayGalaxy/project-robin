import { Page } from 'components'
// type difinition
import type { NextPage } from 'next'

const Error: NextPage = () => (
	<Page id='page-error' className='page-404'>
		<div className='dispF alignIC p3'>
			<h1 className='error-code pr2'>404</h1>
			<div className='error-text pl2'>Cannot Find This Page</div>
		</div>
	</Page>
)
Error.displayName = 'Error_404'

export default Error
