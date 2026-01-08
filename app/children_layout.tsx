'use client'

import NavBar from '@/component/NavBar';
import Footer from '@/component/Footer';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BootSequence from '@/component/BootSequence';


export const ChildrenLayout= ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [isBooted, setIsBooted] = useState(false)

    return (
        <>
        <AnimatePresence>
        {!isBooted && <BootSequence onComplete={() => setIsBooted(true)} />}
        </AnimatePresence>

        {
            isBooted && (
            <>
                <NavBar />
                <main className="flex-grow">{children}</main>
                <ToastContainer />
                <Footer />
            </>
            )
        }
        </>
    )
}