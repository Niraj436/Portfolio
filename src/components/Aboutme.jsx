'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import {
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaReact,
	FaNodeJs,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';

const Aboutme = () => {
	return (
		<div
			className='bg-gray-200 py-24'
			id='aboutme'>
			<div className='text-center py-14'>
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='text-slate-900 text-4xl font-black'>
					ABOUT ME
				</motion.h1>
				<div className='bg-blue-600 text-blue-600 w-7 h-[5px] rounded-lg mx-auto mt-4'></div>
				<div className='pt-6 text-gray-700 text-lg px-10  '>
					Here you will find more information about me, what I do, and my
					current skills mostly in terms of programming and technology{' '}
				</div>
			</div>
			<div className='grid md:grid-cols-2 gap-x-10 gap-y-4 lg:px-32 md:px-20 px-12'>
				<div className='flex flex-col gap-y-6'>
					<h1 className='text-2xl font-black text-slate-900'>Get to know me</h1>
					<p className='text-slate-500'>
						I&apos;m a{' '}
						<span className='font-black text-slate-700'>
							Full Stack Web Developer{' '}
						</span>
						building both the frontend and backend of websites and web
						applications, ensuring a seamless user experience and contributing
						to the overall success of the product. Check out some of my work in
						the <span className='font-black text-slate-700'>Projects </span>
						section.
					</p>
					<p className='text-slate-500'>
						I also like sharing content related to the stuff that I have learned
						over the years in Web Development so it can help other people of the
						Dev Community.Feel free to Connect or Follow me on my{' '}
						<Link
							href={'/'}
							className='text-blue-600 underline font-black'>
							Linkedin
						</Link>{' '}
						and{' '}
						<Link
							href={'/'}
							className='text-blue-600 underline font-black'>
							Instagram
						</Link>{' '}
						where I post useful content related to Web Development and
						Programming.
					</p>
					<p className='text-slate-500'>
						I&apos;m open to{' '}
						<span className='font-black text-slate-700'>Job</span> opportunities
						where I can contribute, learn and grow. If you have a good
						opportunity that matches my skills and experience then don&apos;t
						hesitate to{' '}
						<span className='font-black text-slate-700'>contact</span> me.
					</p>
					<div>
						<button className='bg-blue-600 px-10 py-4 rounded-md text-white'>
							<Link href={'#contact'}>CONTACT</Link>
						</button>
					</div>
				</div>
				<div className='flex flex-col gap-y-6'>
					<h1 className='text-2xl font-black text-slate-900'>My Skills</h1>
					<div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<FaHtml5 className='text-orange-600 text-xl' />
							<span>Html</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<FaCss3Alt className='text-blue-600 text-xl' />
							<span>Css</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<IoLogoJavascript className='text-yellow-500 text-xl' />
							<span>Javascript</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<SiTypescript className='text-blue-600 text-xl' />
							<span>Typescript</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<FaGitAlt className='text-orange-600 text-xl' />
							<span>Git</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<FaGithub className=' text-xl' />
							<span>Github</span>
						</div>

						<div className='skill flex items-center gap-x-1'>
							{' '}
							<FaReact className='text-blue-600 text-xl' />
							<span>React</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<RiNextjsFill className='text-slate-700 text-xl' />
							<span>NextJs</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<FaNodeJs className='text-green-600 text-xl' />
							<span>NodeJs</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<SiExpress className='text-slate-700 text-xl' />
							<span>ExpressJs</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<SiMongodb className='text-green-600 text-xl' />
							<span>MongoDb</span>
						</div>
						<div className='skill flex items-center gap-x-1'>
							{' '}
							<BiLogoPostgresql className='text-blue-700 text-xl' />
							<span>Postgresql</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
