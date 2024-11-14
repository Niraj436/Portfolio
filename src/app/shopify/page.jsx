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
					SHOPIFY
				</motion.div>
				<div>
					<div className='text-xl text-slate-800 text-center '>
						This page contains the information of Shopify Open-Source Project
						which includes the
					</div>
					<div className='text-xl text-slate-800 text-center '>
						Project Overview, Tools Used and Live Links to the official product.
					</div>
				</div>

				<div>
					<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
						<Link
							href={'https://github.com/Niraj436/e-commerce-nextjs-'}
							target='_blank'>
							PROJECT LINK
						</Link>
					</button>
				</div>
			</div>
			<div className='bg-slate-200 py-10'>
				<div className='flex justify-center lg:px-0 px-4'>
					<Image
						src={'/shopify.png'}
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
						Shopify is an e-commerce project that simulates an online store
						experience, built using fake JSON data for the backend. The app
						provides a user-friendly interface where customers can browse
						through various products, view details, and add items to their cart.
						It supports a range of features like product descriptions, all
						powered by mock data to simulate real-world e-commerce
						functionality.
					</p>
					<p>
						Though the backend is not implemented, the app relies on fake JSON
						data to populate product listings, simulate shopping cart
						interactions, and present a realistic shopping experience. This
						approach allows users to experience the process of browsing and
						purchasing products without needing a live backend server.
					</p>
					<p>
						The frontend of the app is designed with responsive web components,
						ensuring that users can enjoy a smooth shopping experience across
						both desktop and mobile devices. While the data is static, the app
						still showcases core e-commerce features such as adding products to
						the cart and viewing item details, making it a useful prototype or
						learning project for understanding e-commerce development.
					</p>
					<p>
						Feel free to check out the Project by visiting the Project Link.
					</p>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900 font-bold'>Tools Used</h1>
						<div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
							<span className='skill'>Html</span>
							<span className='skill'>Tailwind css</span>
							<span className='skill'>Typescript</span>
							<span className='skill'>NextJs</span>
							<span className='skill'>Redux Toolkit</span>
							<span className='skill'>AuthJs</span>
						</div>
					</div>
					<div className='flex flex-col gap-y-5'>
						<h1 className='text-2xl text-slate-900'>See Live</h1>
						<div className='flex gap-x-6'>
							<button className='bg-blue-600 px-14 py-4 rounded-md text-white'>
								<Link href={'https://e-commerce-nextjs-chi-six.vercel.app/'}>
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
