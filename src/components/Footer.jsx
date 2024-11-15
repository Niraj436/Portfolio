import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='bg-black py-16 text-white'>
			<div className='grid md:grid-cols-2 grid-cols-1 sm:px-24 px-4 gap-x-28 gap-y-4'>
				<div className='flex flex-col gap-y-3'>
					<h1 className='font-bold text-2xl '>NIRAJ KHADKA</h1>
					<p className='text-sm'>
						A Full Stack Web Developer building both the frontend and backend of
						websites and web applications, ensuring a seamless user experience
						and contributing to the overall success of the product.{' '}
					</p>
				</div>
				<div>
					<div className='flex flex-col gap-y-3'>
						<h1 className='text-2xl  font-bold'>Social</h1>
						<div className='flex text-2xl items-center gap-x-4'>
							<Link
								href={'https://x.com/nee_eeeraj'}
								target='_blank'>
								<FaTwitter />
							</Link>
							<Link
								href={'https://www.linkedin.com/in/niraj-khadka-263474285/'}
								target='_blank'>
								<FaLinkedin />
							</Link>
							<Link
								href={'https://github.com/Niraj436'}
								target='_blank'>
								<FaGithub />
							</Link>
							<Link
								href={'https://www.facebook.com/profile.php?id=100073171516197'}
								target='_blank'>
								<FaFacebook />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='divider px-16 '></div>
			<h1 className='text-center text-sm px-2'>
				© Copyright 2024 . Made by Niraj Khadka
			</h1>
		</div>
	);
};

export default Footer;
