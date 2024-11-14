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
					Chat app
				</motion.div>
				<div>
					<div className='text-xl text-slate-800 text-center '>
						This page contains the information of Chat app Open-Source Project
						which includes the
					</div>
					<div className='text-xl text-slate-800 text-center '>
						Project Overview, Tools Used and Live Links to the official product.
					</div>
				</div>

				<div>
					<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
						<Link
							href={'https://github.com/Niraj436/chatApp'}
							target='_blank'>
							PROJECT LINK
						</Link>
					</button>
				</div>
			</div>
			<div className='bg-slate-200 py-10'>
				<div className='flex justify-center lg:px-0 px-4'>
					<Image
						src={'/chatapp.png'}
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
						ChatApp is a real-time messaging application designed to facilitate
						instant communication between users. Built with a modern stack, this
						app enables users to create accounts, send and receive messages, and
						participate in group chats or one-on-one conversations. The platform
						ensures a seamless, engaging experience with support for text
						messages and notifications.
					</p>
					<p>
						The backend is powered by Node.js and Express.js, which handle user
						authentication, message routing, and real-time updates. The app uses
						WebSockets or Socket.IO to enable live, two-way communication,
						ensuring that messages are delivered instantly without needing to
						refresh the page. MongoDB is used to store user profiles, chat
						history, and other data, making it easy to scale and manage large
						amounts of real-time messaging data.
					</p>
					<p>
						The frontend is responsive, offering a clean and simple user
						interface that adapts to different devices, including desktops and
						mobile phones. Users can sign up, log in, and start chatting in
						seconds, while the system ensures security with proper encryption
						and authentication methods.
					</p>
					<p>
						Feel free to check out the Project by visiting the Project Link.
					</p>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900 font-bold'>Tools Used</h1>
						<div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
							<span className='skill'>Html</span>
							<span className='skill'>Tailwind css</span>
							<span className='skill'>Daisyui</span>
							<span className='skill'>Javascript</span>
							<span className='skill'>React</span>
							<span className='skill'>Zustang</span>
							<span className='skill'>Node</span>
							<span className='skill'>ExpressJs</span>
							<span className='skill'>MongoDB</span>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900'>See Live</h1>
						<div className='flex gap-x-6'>
							<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
								<Link href={'https://chat-app-6jq4.vercel.app/'}>
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
