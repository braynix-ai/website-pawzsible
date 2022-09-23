/** @jsxImportSource theme-ui */
import { Link } from '@mui/material'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Flex, IconButton, Image } from './components/motionComponents'
import NavLinks from './NavLinks'

const styles = {
    navbar: {
        justifyContent: "space-between",
        px: [10, 10, 10, 10, 50],
        py: [10, 10, 10, 20],
        position: "sticky",
        top: 0,
        backgroundColor: "#ffddac",
        backdropFilter: "blur(4px)",
        boxShadow: "0 0 20px #1D1E1F1F",
        zIndex: 10,
    },
    menuButton: {
        width: 40,
        height: 40,
        outline: "none",
        border: "none",
        backgroundColor: "transparent",
        display: ["flex", "flex", "flex", "none"],
        img: {
            width: "100%",
            height: "100%",
        }
    },
    linksContainer: { flex: 1, alignItems: "center", justifyContent: "center", overflow: "auto" },
    menu: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffddac",
        flexDirection: "column"
    }
}

const Navbar = () => {
    const breakpointIndex = useBreakpointIndex()
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (showMenu) document.body.style.overflow = "hidden"
        else {
            document.body.style.overflowY = "auto"
            document.body.style.overflowX = "hidden"
        }
    }, [showMenu])


    const variants = {
        initial: { clipPath: 'circle(0% at 100% 0)', WebkitClipPath: 'circle(0% at 100% 0)' },
        animate: { clipPath: 'circle(141.4% at 100% 0)', WebkitClipPath: 'circle(141.4% at 100% 0)' },
        exit: { clipPath: 'circle(0% at 100% 0)', WebkitClipPath: 'circle(0% at 100% 0)' },
    }

    return (
        <Flex sx={styles.navbar} as="nav">
            <Link href="/"><img src="../Assests/logo 1.png" style={{ height: "8vh", marginTop: '5px' }} alt="logo"/></Link>
            {breakpointIndex > 2 ? <NavLinks /> :
                <AnimatePresence>
                    {showMenu &&
                        <Flex sx={styles.menu} variants={variants} initial={'initial'} animate={'animate'} exit={'exit'} transition={{ duration: 0.5 }}>
                            <Flex sx={{ justifyContent: "flex-end", width: "100%", p: 15 }}>
                                <IconButton sx={styles.menuButton} onClick={() => setShowMenu(false)}><CloseIcon sx={{ color: 'black' }} /></IconButton>
                            </Flex>
                            <Flex sx={styles.linksContainer}>
                                <NavLinks closeMenu={() => setShowMenu(false)} />
                            </Flex>
                        </Flex>
                    }
                </AnimatePresence>
            }

            <IconButton sx={styles.menuButton} onClick={() => setShowMenu(true)} data-testid="menuButton"><Image src='/icons/menu.svg' alt='Menu' /></IconButton>
        </Flex>
    )
}

const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#fff" stroke="#000" strokeWidth={2} strokeMiterlimit={10} d="M19 5L5 19" />
            <path fill="#fff" stroke="#000" strokeWidth={2} strokeMiterlimit={10} d="M5 5L19 19" />
        </svg>
    )
}

export default Navbar
