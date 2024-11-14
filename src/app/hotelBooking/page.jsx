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
					Hotel Booking
				</motion.div>
				<div>
					<div className='text-xl text-slate-800 text-center '>
						This page contains the information of Hotel Bookng Open-Source
						Project which includes the
					</div>
					<div className='text-xl text-slate-800 text-center '>
						Project Overview, Tools Used and Live Links to the official product.
					</div>
				</div>

				<div>
					<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
						<Link
							href={'https://github.com/Niraj436/HotelBooking'}
							target='_blank'>
							PROJECT LINK
						</Link>
					</button>
				</div>
			</div>
			<div className='bg-slate-200 py-10'>
				<div className='flex justify-center lg:px-0 px-4'>
					<Image
						src={'/hotelbooking.png'}
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
						Hotel Booking is a web application that allows users to search for,
						book, and manage hotel reservations. The backend is built with
						Node.js, Express.js, and MongoDB, providing a robust and scalable
						solution for handling hotel data, reservations, and user management.
					</p>
					<p>
						The app features a user-friendly interface where customers can
						browse available hotels, view detailed information about rooms, and
						make bookings. The backend manages hotel listings, room
						availability, and user accounts, ensuring real-time updates for each
						reservation. MongoDB is used to store and retrieve data, including
						user profiles, booking history, and hotel information, while
						Express.js handles routing and business logic for booking processes.
					</p>
					<p>
						Admins can manage hotel listings, availability, and booking details
						through a secure admin dashboard. The system includes features like
						filtering hotels by location, price, and amenities, along with
						customer notifications for booking confirmations and reminders. The
						application is designed to ensure a smooth booking experience, with
						a responsive frontend that works seamlessly across different
						devices.
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
							<span className='skill'>Redux Toolkit</span>
							<span className='skill'>Node</span>
							<span className='skill'>ExpressJs</span>
							<span className='skill'>MongoDB</span>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900'>See Live</h1>
						<div className='flex gap-x-6'>
							<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
								<Link href={'https://hotel-booking-a4lc.vercel.app/'}>
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
