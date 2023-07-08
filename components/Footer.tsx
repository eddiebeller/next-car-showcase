import Image from 'next/image';
import React from 'react';
import { footerLinks } from '@/constants';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer>
			<div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
				<div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
					<div className='flex flex-col justify-start items-start gap-6'>
						<Image
							src='./logo.svg'
							alt='logo'
							width={118}
							height={18}
							className='object-contain'
						/>
						<p className='text-base text-gray-700'>
							CarHub 2023 <br />
							All rights reserved &copy;
						</p>
					</div>

					<div className='footer__links'>
						{footerLinks.map((link, i) => (
							<div key={i} className='footer__link'>
								<h3 className='font-bold'>{link.title}</h3>
								{link.links.map((link, i) => (
									<Link href={link.url} key={i} className='text-gray-500'>
										{link.title}
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
				<div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
					<p className='text-center w-full sm:text-end sm:w-auto'>
						@Curhub 2023. All Right Reserved.
					</p>
					<div className='footer__copyrights-link'>
						<Link href='/' className='text-gray-500'>
							Privacy Policy
						</Link>
						<Link href='/' className='text-gray-500'>
							Term of use
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
