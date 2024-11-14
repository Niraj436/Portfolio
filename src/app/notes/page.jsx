'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
	return (
		<div>
			<div className=' px-16 py-56 flex flex-col justify-center items-center gap-y-10 home'>
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='text-5xl text-slate-800 font-black'>
					Notes
				</motion.div>
				<div>
					<div className='text-xl text-slate-800 text-center '>
						This page contains the information of Notes Open-Source Project
						which includes the
					</div>
					<div className='text-xl text-slate-800 text-center '>
						Project Overview, Tools Used and Live Links to the official product.
					</div>
				</div>

				<div>
					<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
						<Link
							href={'https://github.com/Niraj436/Notes'}
							target='_blank'>
							PROJECT LINK
						</Link>
					</button>
				</div>
			</div>
			<div className='bg-slate-200 py-10'>
				<div className='flex justify-center lg:px-0 px-4'>
					<Image
						src={'/note.png'}
						className='rounded-md'
						alt='Image'
						height={1000}
						width={1000}></Image>
				</div>
				<div className='text-slate-600 py-12 xl:px-72 lg:px-24 px-10 flex flex-col gap-y-5'>
					<h1 className='font-bold text-2xl text-slate-900'>
						Project Overview
					</h1>
					<p>
						Here's a description for your note-taking app: NoteApp is a simple
						yet powerful application designed to help users create, edit,
						delete, and save notes. Whether you're jotting down quick thoughts,
						to-do lists, or detailed memos, this app provides an intuitive
						interface for managing your notes with ease. It allows users to add
						text-based notes, edit existing ones, and delete those they no
						longer need, all while ensuring that their notes are securely saved.
					</p>
					<p>
						The app features a clean and user-friendly design that prioritizes
						functionality and ease of use. Users can create new notes with just
						a few clicks, and each note can be edited or updated as needed.
						Notes are saved locally ensuring that they persist even if the app
						is closed or the device is restarted.
					</p>
					<p>
						The frontend is responsive, offering a clean and simple user
						interface that adapts to different devices, including desktops and
						mobile phones.
					</p>
					<p>
						Feel free to check out the Project by visiting the Project Link.
					</p>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900 font-bold'>Tools Used</h1>
						<div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
							<span className='skill'>Html</span>
							<span className='skill'>Bootstrap</span>
							<span className='skill'>Javascript</span>
							<span className='skill'>React</span>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900'>See Live</h1>
						<div className='flex gap-x-6'>
							<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
								<Link href={'https://notes-flame-chi.vercel.app/'}>
									Live Link
								</Link>
							</button>
							<button className='border-2 border-blue-600 px-14 py-4 rounded-md text-slate-900'>
								<Link href={'/'}>Go Back</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
