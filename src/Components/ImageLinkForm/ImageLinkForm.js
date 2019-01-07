import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm({onInputChange, onButtonSubmit}) {
	return (
		<div>
			<p className='f3'>The Magic Brain will detect faces in your photos. Enter the URL of a photo to give it a try</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-4'>
					<input className='f4 pa2 w-70 center' type='text'onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>

	);
}

export default ImageLinkForm;