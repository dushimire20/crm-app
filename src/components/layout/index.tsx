import { ThemedLayoutV2 } from '@refinedev/antd'
import React from 'react'
import Header from './header'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
    Header={Header}
    Title={(titleProps) => <ThemedLayoutV2 {...titleProps} text= "Refine" />}
    >

    </ThemedLayoutV2>

  )
}

export default Layout