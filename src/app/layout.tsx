import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import clsx from 'clsx'

import AppProvider from '@pages/AppProvider'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], style: 'normal', variable: '--roboto' })

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
			<body className={clsx(roboto.className, roboto.variable)}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}
