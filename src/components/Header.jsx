'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';

const Header = () => {
	const [open, setOpen] = useState(true);
	const menuOpen = () => {
		setOpen(!open);
		console.log('clicked menu');
	};
	return (
		<div
			className={`md:h-20 ${
				!open ? `h-20` : ''
			} sticky top-0 z-50 bg-white flex md:flex-row  flex-col md:justify-between  md:gap-x-0 gap-x-2 items-center px-16 font-bold text-slate-800 shadow-xl`}>
			<Link href={'/'}>
				<div className='flex justify-center items-center gap-x-3 hover:text-blue-600 md:pt-0 pt-4'>
					<div className='avatar'>
						<div className='w-12 rounded-full cursor-pointer'>
							<Image
								src='/profilePic.jpg'
								alt='profile image'
								width={1000}
								height={1000}
								className='rounded-full'></Image>
						</div>
					</div>
					<h1>NIRAJ KHADKA</h1>
				</div>
			</Link>
			<div className='md:opacity-0 opacity-100 flex float-end absolute right-0 md:pt-0 pt-4'>
				<MdMenu
					onClick={menuOpen}
					className={`text-4xl ${!open ? `opacity-100` : `opacity-0`}`}
				/>
				<RxCrossCircled
					onClick={menuOpen}
					className={`text-4xl ${open ? `opacity-100` : `opacity-0`}`}
				/>
			</div>

			<div className='p-2'>
				<ul
					className={`flex items-center md:gap-x-20 gap-x-8 md:gap-y-0 gap-y-8 ${
						open ? `opacity-100` : `opacity-0`
					} md:flex-row flex-col`}>
					<li className='hover:text-blue-600'>
						<Link href={'/'}>HOME</Link>
					</li>
					<li className='hover:text-blue-600'>
						<Link href={'/#aboutme'}>ABOUT</Link>
					</li>
					<li className='hover:text-blue-600'>
						<Link href={'/#projects'}>PROJECTS</Link>
					</li>
					<li className='hover:text-blue-600'>
						<Link href={'/#contact'}>CONTACT</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
