import clsx from 'clsx'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import AppProvider from '@pages/AppProvider'

import { Navbar } from '@widgets/Navbar'

import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	style: 'normal',
	variable: '--roboto'
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}
