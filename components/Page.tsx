import { forwardRef } from 'react'
import { classes } from 'library'
// type difinition
import type T from './types'

const Page = forwardRef<HTMLElement, T.HTML>((props, refer) => {
	const { tag: Tag = 'div', name, ...attr } = props
	attr.className = classes(props.className, 'page')
	return <Tag ref={refer} data-page={name} {...attr} />
})
Page.displayName = 'Page'

export default Page
