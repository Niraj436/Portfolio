import React from 'react';
import { MdOutlineError } from 'react-icons/md';
const not_found = () => {
	return (
		<div className='flex flex-col bg-slate-200 text-slate-900 py-24 items-center text-xl gap-y-5 h-96'>
			<div>The requested page does not exist</div>
			<div className='text-6xl text-red-700'>
				<MdOutlineError />
			</div>
		</div>
	);
};

export default not_found;
