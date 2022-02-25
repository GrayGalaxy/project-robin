import type { ElementType, HTMLProps } from 'react';

/**
 * Type Definition
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export interface TagProp<el extends ElementType = ElementType> {
	tag?: el;
}
export type HTML<EL = HTMLElement> = HTMLProps<EL> & TagProp
