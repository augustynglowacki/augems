"use client"
import React, { PropsWithChildren, useContext, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const variants = {
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
}

//https://woo1031.vercel.app/article/app-router%EC%97%90%EC%84%9C%EB%A7%8C-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-framer-motion-exit-animation-%EC%97%90%EB%9F%AC
function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
  )
}

export function Providers({ children }: { children: React.ReactNode }): React.ReactElement {
  const pathname = usePathname()
  const [exitTriggered, setExitTriggered] = useState(false)

  return (
    <AnimatePresence initial={true} mode="wait">
      <div key={pathname}>
        <motion.div 
          variants={variants} 
          initial="out" 
          animate="in" 
          exit="out" 
          onAnimationStart={() => {
            if (exitTriggered) {
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  left: 0
                });
              }, 250); // delay of 0.25 seconds
            }
          }}
          onAnimationComplete={() => setExitTriggered(true)}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}