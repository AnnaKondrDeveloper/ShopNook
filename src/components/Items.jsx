import React from 'react'
import { Item } from './Item'

export function Items(props) {

	

  return (
	 <main className='items'>
		{props.state.map ( i => {
			return (
				<Item 
					key = {i.id}
					title = {i.title}
					img ={ i.img}
					descr = { i.descr}
					category = { i.category }
					price = { i.price }
				/>
			)
		})}
	 </main>
  )
}
