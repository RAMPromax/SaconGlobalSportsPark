import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import SaconGlobalHero from '@/components/hero-banner/SaconGlobalHero';
import SaconGlobalCategory from '@/components/category/SaconGlobalCategory';
import SaconGlobalBanner from '@/components/banner/SaconGlobalBanner';
import SaconGlobalAbout from '@/components/about/SaconGlobalAboutAbout';
import ArchitectureHubBrandTwo from '@/components/brand/ArchitectureHubBrandTwo';
import SearchArea from '@/components/search-area/SearchArea';
import SaconGlobalHeader from '@/layouts/headers/SaconGlobalHeader';
import SaconGlobalService from '@/components/service/SaconGlobalService';
import SaconGlobalProject from '@/components/project/SaconGlobalProject';
import SaconGlobalFunFact from '@/components/funfact/SaconGlobalFunFact';
import SaconGlobalTestimonial from '@/components/testimonial/SaconGlobalTestimonial';
import SaconGlobalTextSlider from '@/components/text-slider/SaconGlobalTextSlider';
import SaconGlobalStep from '@/components/step/ArchitectureHubStep';
import SaconGlobalBrand from '@/components/brand/SaconGlobalBrand';
import SaconGlobalAward from '@/components/award/SaconGlobalAward';

const HomeMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                   <BackToTop />
                    <SearchArea />
                    <SaconGlobalHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                 <SaconGlobalHero />
                                <SaconGlobalCategory />
                                <SaconGlobalBanner />
                                <SaconGlobalAbout />
                                <SaconGlobalService />
                                <SaconGlobalProject />
                                <SaconGlobalFunFact />
                                <SaconGlobalTestimonial />
                                <SaconGlobalTextSlider />
                                <SaconGlobalStep />
                                <SaconGlobalBrand />
                                <SaconGlobalAward />
                                <ArchitectureHubBrandTwo />
                                {/* <ArchitectureHubBlog /> */}
                            </main>
                            <HomeMainFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeMain;
