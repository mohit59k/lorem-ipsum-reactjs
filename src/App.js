import React, { useState } from 'react'
import data from './data'
function App() {
	const [num, setNum] = useState(1)
	const [para, setPara] = useState(data.slice(0, num))
	function clickVal() {
		const inpVal = document.querySelector('.inputVal')
		const inpValNum = inpVal.value
		if (inpValNum == 0 || inpValNum == null || inpValNum < 0) {
			console.log(inpValNum)
			const finalNum = 1
			setPara(data.slice(0, finalNum))
		} else {
			const finalNum = 0 + Number(inpValNum)
			setPara(data.slice(0, finalNum))
		}
	}
	return (
		<div className='section'>
			<div className='section-center'>
				<h3>Tired of Boring Lorem Ipsum ?</h3>
				<div className='lorem-form'>
					<label htmlFor='lorem'>Paragraphs:</label>
					<input className='inputVal' type='number' />
					<button className='btn' onClick={clickVal}>
						Generate
					</button>
				</div>
				{para.map((paras) => {
					return (
						<div className='result' key={paras[0]}>
							{paras}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default App
