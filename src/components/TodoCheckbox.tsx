/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, useTheme } from '@emotion/react';
import { ChangeEvent, PropsWithChildren } from 'react';

export interface TodoCheckboxProps {
	id: string,
	completed: boolean,
	text: string,
	onChecked: (id: string, checked: boolean) => void    
}

export function TodoCheckbox(props: TodoCheckboxProps) {
	const theme = useTheme();

	function checkHandler(evt: ChangeEvent) {
		if(evt.target instanceof HTMLInputElement) {
			const target: HTMLInputElement = evt.target as HTMLInputElement;
			props.onChecked(props.id, target.checked);
		}
	}

	return (
		<>			
			<label css={{
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				marginRight: '1.5rem',
				cursor: 'pointer',
				height: '2rem',
				width: '2rem',
				userSelect: 'none',
				'& input': {
					position: 'absolute',
					opacity: 0,
					cursor: 'pointer',
					height: 0,
					width: 0
				},
				'& span': {
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					top: 0,
					left: 0,
					height: '2rem',
					width: '2rem',
					backgroundColor: theme.colors.background,
					border: `1px solid ${theme.colors.border}`,
					borderRadius: '1rem'
				},
				'&:hover input ~ span': {
					borderColor: theme.colors.primary
				},
				'&:hover input:active ~ span': {
					backgroundColor: theme.colors.primary					
				},
				'& input:focus ~ span': {
					boxShadow: `0 0 0 0.125rem ${theme.colors.primary}`
				}
			}}>					
				<input 
					type="checkbox" 			
					checked={props.completed}	
					onChange={checkHandler} 
				/>	
				<span>
					{props.completed && 
						<svg
							css={{
								width: '1.25rem',
								height: '1.25rem',
								fill: theme.colors.primary
							}}					 
							viewBox="0 0 16 16"
						>
							<path 
								d={`
									M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 
									0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z								
								`}
							/>
						</svg>						
					}
				</span>
			</label>
			<span css={{
				textDecoration: props.completed ? 'line-through' : 'none',
				color: props.completed ? theme.colors.inactive : theme.colors.active
			}}>
				{props.text}
			</span>
		</>
	);
}