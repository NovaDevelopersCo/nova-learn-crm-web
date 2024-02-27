import { FC, PropsWithChildren } from 'react'

import { StoreProvider } from '@store/index'

const AppProvider: FC<PropsWithChildren<Record<string, never>>> = ({
	children
}) => <StoreProvider>{children}</StoreProvider>

export default AppProvider 
