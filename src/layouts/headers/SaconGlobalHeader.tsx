"use client"
import MobileMenus from '@/layouts/subComponents/MobileMenus';
import logoBlack from "../../../public/assets/img/logo/SACON-GLOBAL-01.png";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import MobileOffcanvas from '@/components/offcanvas/MobileOffcanvas';
import { ArrowThree, MenubarIcon, SearchIcon } from '@/svg';
import useGlobalContext from '@/hooks/useContext';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SaconGlobalHeader = () => {
    const { toggleSearch } = useGlobalContext();
    const [openOffCanvas, setOpenOffCanvas] = useState(false);

    return (
        <>
            <header>
                {/* -- header area start -- */}
                <div className="tp-header-8-area header-transparent tp-header-8-border" >
                    <div className="container container-1750">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tp-header-8-wrapper d-flex align-items-center justify-content-between">
                                    <div className="tp-header-8-left d-flex align-items-center">
                                        <div className="tp-header-8-bar-wrap">
                                            <button 
                                            // onClick={() => setOpenOffCanvas(true)} 
                                            className="tp-header-8-bar tp-offcanvas-open-btn">
                                                <span>Menu</span>
                                                <span><MenubarIcon /></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="tp-header-8-middle">
                                        <div className="tp-header-logo">
                                            <Link href="/">
                                                <Image style={{ width: "100%", height: "auto" }} width={200} src={logoWhite} alt="logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tp-header-8-right d-flex align-items-center d-none d-md-inline-flex">
                                        {/* <div className="tp-header-8-search-box">
                                            <button onClick={toggleSearch} className="tp-header-8-search tp-search-open-btn">
                                                <span><SearchIcon strokeColor="#191919" /></span>
                                            </button>
                                        </div> */}
                                        <div className="tp-header-8-btn">
                                            <Link className="tp-btn-border" href="/contact">
                                                Contact Us
                                                {" "}<span><ArrowThree /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="tp-mobile-menu-active d-none">
                    <ul>
                        <MobileMenus />
                    </ul>
                </nav>
                {/* -- header area end -- */}
            </header>

            {/* off canvas */}
            <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default SaconGlobalHeader;