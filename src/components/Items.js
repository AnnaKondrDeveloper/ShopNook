import React from 'react'
import { Item } from './Item'

export function Items(props) {


  return (
	 <main className='items'>
		{props.state.map ( item => {
			return (
				<Item 
					key = {item.id}
					item = {item}
					orders = {props.orders} 
					addOrder = {props.addOrder}
				/>
			)
		})}
	 </main>
  )
}
