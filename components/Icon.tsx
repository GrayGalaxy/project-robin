import { forwardRef } from 'react'
import { classes } from 'library'
import icon_set from './icon_sets'
// type difinition
import type T from './types'
export type IconNames = keyof typeof icon_set
interface IconProps extends T.HTML {
	size?: number
	name: IconNames
}

const Icon = forwardRef<HTMLElement, IconProps>((p, refer) => {
	const { tag: Tag = 'span', name, size = 16, ...attr } = p
	if (!(name in icon_set)) return <></>
	attr.className = classes(p.className, 'icon dispIF flCenter')
	attr.role = 'img'

	return (
		<Tag ref={refer} aria-hidden='true' {...attr}>
			<svg
				viewBox='0 0 24 24'
				width={size}
				fill='none'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
				style={{ verticalAlign: '-3px' }}
			>
				{icon_set[name]}
			</svg>
		</Tag>
	)
})
Icon.displayName = 'Icon'

export default Icon
