import { useState } from "react"

export function EditableInput(props) {

	
	const [ focus, setFocus] = useState(false)
	const [ text, setText ] = useState("")

	function activateEditMode () {
		setText(props.name)
	};

	function activateViewMode () {
		props.onChangeNameHandler(text);
	}
	
	return (
		<input 
				value={text} 
				onFocus={() => activateViewMode()}
				onChange={(e) => {setText(e.currentTarget.value)}}
				onFocus={e => console.log('onFocus')}
  				onBlur={e => console.log('onBlur')}
				/>
	)
	
}