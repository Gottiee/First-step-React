import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {

  return (
	<div>
		{/* <h1 style={headingSyle}>{props.title}</h1> */}
		<header className='header'>
			<h1>{title}</h1>
			<Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd}/>
		</header>
	</div>
  )
}

//class pareil que fonction
// const Header = ({title}) => {
//   return (
// 	<div>
// 		<h1>{title}</h1>
// 	</div>
//   )
// }
//set un default props si le mien est pas defini
Header.defaultProps = {
	title: 'Title forgot',
}

//define some css in js
// const headingSyle = {
// color: 'red',
// backgroundColor: 'black'
// }

export default Header