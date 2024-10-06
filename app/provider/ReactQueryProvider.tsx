"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

const ReactQueryProvider = ({ children }: React.PropsWithChildren) => {


    const querClient = new QueryClient()
    return (
        <QueryClientProvider client={querClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default ReactQueryProvider