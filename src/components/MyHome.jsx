'use client';
import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MyHome = () => {
	return (
		<div className=' px-16 py-56 flex flex-col justify-center items-center gap-y-10 home'>
			<div className='text-slate-900 flex flex-col  bg-gray-300 p-1 gap-y-2 rounded-sm absolute left-0 '>
				<Link
					href={'https://x.com/nee_eeeraj'}
					target='_blank'
					className='hover:bg-blue-300 p-2'>
					<FaTwitter className='text-3xl' />
				</Link>
				<Link
					href={'https://www.linkedin.com/in/niraj-khadka-263474285/'}
					className='hover:bg-blue-300 p-2'
					target='_blank'>
					<FaLinkedin className='text-3xl' />
				</Link>
				<Link
					href={'https://github.com/Niraj436'}
					className='hover:bg-blue-300 p-2'
					target='_blank'>
					<FaGithub className='text-3xl' />
				</Link>
				<Link
					href={'https://www.facebook.com/profile.php?id=100073171516197'}
					className='hover:bg-blue-300 p-2'
					target='_blank'>
					<FaFacebook className='text-3xl' />
				</Link>
			</div>
			<motion.div
				initial={{ y: 30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.5 }}
				className='text-5xl text-slate-800 font-black'>
				HELLO I&apos;M NIRAJ KHADKA
			</motion.div>
			<div>
				<div className='text-xl text-slate-800 text-center '>
					A Result-Oriented Web Developer building and managing Websites and
				</div>
				<div className='text-xl text-slate-800 text-center '>
					Web Applications that leads to the success of the overall product{' '}
				</div>
			</div>

			<div>
				<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
					<Link href={'/#projects'}>PROJECTS</Link>
				</button>
			</div>
		</div>
	);
};

export default MyHome;
