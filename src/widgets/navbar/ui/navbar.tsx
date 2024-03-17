'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './navbar.module.scss'
import human from '/public/icons/human.png'
import mappin from '/public/icons/mappin.png'
import menu from '/public/icons/menu.png'
import search from '/public/icons/search.png'

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className={styles.navbar}>
			<div className={`container mx-auto px-4 ${styles.navbar__content}`}>
				<div className={styles.navbar__logo}>
					<Image src={menu} alt='Menu' onClick={toggleMenu} />
					<div className={styles.navbar__constructor}>
						Constructor
					</div>
				</div>
				<ul
					className={`${styles.navbar__menu} ${isMenuOpen ? styles.open : ''}`}
				>
					<li className={styles.navbar__menu_item}>
						<Link href='/Materials'>Materials</Link>
					</li>
					<li className={styles.navbar__menu_item}>
						<Link href='/credentials'>Credentials</Link>
					</li>
					<li className={styles.navbar__menu_item}>
						<Link href='/news'>News</Link>
					</li>
					<li className={styles.navbar__menu_item}>
						<Link href='/Projects'>Projects</Link>
					</li>
					<li className={styles.navbar__menu_item}>
						<Link href='/Courses'>Courses</Link>
					</li>
					<li className={styles.navbar__menu_item}>
						<form
							className={styles.navbar__search_container}
							onSubmit={e => e.preventDefault()}
						>
							<button type='submit'>
								<Image src={search} alt='Search' />
							</button>
							<input
								className={styles.navbar__search}
								type='text'
								placeholder='Search'
							/>
						</form>
					</li>
				</ul>

				<div className={styles.navbar__info}>
					<div className={styles.location}>
						<Image src={mappin} alt='pin' />
						<span>New York</span>
					</div>
					<div className={styles.user}>
						<Image src={human} alt='User' />
						<span>Yaros Yaropolkovich</span>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className={styles.menuContainer}>
					<ul className={styles.menuItems}>
						<li>
							<Link href='/Materials'>Materials</Link>
						</li>
						<li>
							<Link href='/News'>News</Link>
						</li>
						<li>
							<Link href='/Projects'>Projects</Link>
						</li>
						<li>
							<Link href='/Courses'>CouIrses</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
