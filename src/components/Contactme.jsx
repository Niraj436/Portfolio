'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Contactme = () => {
	return (
		<div
			className='bg-gray-200'
			id='contact'>
			<div className=' py-14'>
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='text-slate-900 text-4xl font-black text-center'>
					Contact
				</motion.h1>
				<div className='bg-blue-600 text-blue-600 w-7 h-[5px] rounded-lg mx-auto mt-4'></div>
				<div className='pt-6 text-gray-700 text-lg px-10 py-4 text-center '>
					Feel free to Contact me by using below information and I will get back
					to you as soon as possible
				</div>
				<div className='flex flex-col gap-y-2 sm:items-center justify-start text-slate-900 px-10'>
					<div>Email: nirajkhadka0001@gmail.com</div>
					<div>Phone number: +977 9863834299</div>
				</div>
			</div>
		</div>
	);
};

export default Contactme;
