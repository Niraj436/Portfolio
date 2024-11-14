'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
	return (
		<div
			className='bg-gray-50 md:px-32 py-24'
			id='projects'>
			<div className=' text-center pb-10'>
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='text-4xl text-slate-900 font-black'>
					Projects
				</motion.h1>
				<div className='bg-blue-600 text-blue-600 w-7 h-[5px] rounded-lg mx-auto mt-4'></div>
				<p className='pt-6 text-gray-700 text-lg px-10  '>
					Here you will find some of the personal and clients projects that I
					created with each project Demo link and Github link
				</p>
			</div>
			<div className='flex flex-col gap-y-28'>
				{/* first project */}
				<div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-28 lg:py-0 py-2'>
					<div>
						<Image
							className='rounded-lg'
							src={'/shopify.png'}
							alt={'sopify image'}
							height={1000}
							width={1000}></Image>
					</div>
					<div className='px-12 flex flex-col gap-y-6 text-slate-600'>
						<h1 className='text-center text-3xl font-black text-slate-900 pt-8'>
							Shopify
						</h1>
						<p>
							Shopify is a custom-built e-commerce app I developed, designed to
							provide a user-friendly and efficient shopping experience. Users
							can explore a wide range of products, add items to their cart, and
							complete purchases seamlessly.
						</p>
						<div>
							<button className='bg-blue-600 px-10 py-4 rounded-md text-white'>
								<Link href={'/shopify'}>Learn more</Link>
							</button>
						</div>
					</div>
				</div>
				<div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-28 lg:py-0 py-2'>
					<div>
						<Image
							className='rounded-lg'
							src={'/hotelbooking.png'}
							alt={'sopify image'}
							height={1000}
							width={1000}></Image>
					</div>
					<div className='px-12 flex flex-col gap-y-6 text-slate-600'>
						<h1 className='text-center text-3xl font-black text-slate-900 pt-8'>
							Hotel Booking
						</h1>
						<p>
							An intuitive hotel booking app that makes finding and reserving
							accommodations easy. Users can browse hotels, view details, check
							availability, and make secure bookings with a user-friendly
							interface and seamless payment integration
						</p>
						<div>
							<button className='bg-blue-600 px-10 py-4 rounded-md text-white'>
								<Link href={'/hotelBooking'}>Learn more</Link>
							</button>
						</div>
					</div>
				</div>
				{/* project 3*/}
				<div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-28 lg:py-0 py-2'>
					<div>
						<Image
							className='rounded-lg'
							src={'/chatapp.png'}
							alt={'sopify image'}
							height={1000}
							width={1000}></Image>
					</div>
					<div className='px-12 flex flex-col gap-y-6 text-slate-600'>
						<h1 className='text-center text-3xl font-black text-slate-900 pt-8'>
							ChatApp
						</h1>
						<p>
							A user-friendly chat app designed for seamless communication. It
							offers real-time messaging, group chats, and multimedia sharing,
							ensuring a smooth and engaging user experience.
						</p>
						<div>
							<button className='bg-blue-600 px-10 py-4 rounded-md text-white'>
								<Link href={'/chatapp'}>Learn more</Link>
							</button>
						</div>
					</div>
				</div>
				{/* project 4*/}
				<div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-28 lg:py-0 py-2'>
					<div>
						<Image
							className='rounded-lg'
							src={'/note.png'}
							alt={'sopify image'}
							height={1000}
							width={1000}></Image>
					</div>
					<div className='px-12 flex flex-col gap-y-6 text-slate-600'>
						<h1 className='text-center text-3xl font-black text-slate-900 pt-8'>
							Notes
						</h1>
						<p>
							A simple and efficient note app for organizing thoughts and tasks.
							Users can create, edit, and categorize notes with ease, featuring
							a clean interface and quick access for better productivity
						</p>
						<div>
							<button className='bg-blue-600 px-10 py-4 rounded-md text-white'>
								<Link href={'/notes'}>Learn more</Link>
							</button>
						</div>
					</div>
				</div>
				<div>
					<h1 className='text-center text-slate-900 text-2xl text-bold sm:px-0 px-4'>
						For more project visit my Github profile.{' '}
						<span className='text-blue-600 underline'>
							{' '}
							<Link href={'https://github.com/Niraj436'}>Click here</Link>
						</span>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Projects;
