import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			history.push(`/search/${keyword}`)
		} else {
			history.push('/')
		}
	}
	return (
		<Form onSubmit={submitHandler} inline>
			<InputGroup className="mb-3">
				<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search Products...'
				className='mr-sm-2 ml-sm-5'
			></Form.Control>
				<Button variant="outline-secondary" id="button-addon2">
				Button
				</Button>
			</InputGroup>
		</Form>
	)
}

export default SearchBox
