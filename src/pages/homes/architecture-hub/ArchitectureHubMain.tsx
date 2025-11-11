import ArchitectureHubTestimonial from '@/components/testimonial/SaconGlobalTestimonial';
import ArchitectureHubTextSlider from '@/components/text-slider/SaconGlobalTextSlider';
import ArchitectureHubCategory from '@/components/category/SaconGlobalCategory';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ArchitectureHubFunFact from '@/components/funfact/SaconGlobalFunFact';
import ArchitectureHubBrandTwo from '@/components/brand/ArchitectureHubBrandTwo';
import ArchitectureHubProject from '@/components/project/SaconGlobalProject';
import ArchitectureHubService from '@/components/service/SaconGlobalService';
import ArchitectureHubHero from '@/components/hero-banner/SaconGlobalHero';
import ArchitectureHubBanner from '@/components/banner/SaconGlobalBanner';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ArchitectureHubAward from '@/components/award/SaconGlobalAward';
import ArchitectureHubAbout from '@/components/about/SaconGlobalAbout';
import ArchitectureHubBrand from '@/components/brand/SaconGlobalBrand';
import ArchitectureHubFooter from '@/layouts/footers/ArchitectureHubFooter';
import ArchitectureHubHeader from '@/layouts/headers/SaconGlobalHeader';
import ArchitectureHubBlog from '@/components/blog/ArchitectureHubBlog';
import ArchitectureHubStep from '@/components/step/ArchitectureHubStep';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

const ArchitectureHubMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor='#F2F1EE'>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-bg-red-2">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea />
                    <ArchitectureHubHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <ArchitectureHubHero />
                                <ArchitectureHubCategory />
                                <ArchitectureHubBanner />
                                <ArchitectureHubAbout />
                                <ArchitectureHubService />
                                <ArchitectureHubProject />
                                <ArchitectureHubFunFact />
                                <ArchitectureHubTestimonial />
                                <ArchitectureHubTextSlider />
                                <ArchitectureHubStep />
                                <ArchitectureHubBrand />
                                <ArchitectureHubAward />
                                <ArchitectureHubBrandTwo />
                                <ArchitectureHubBlog />
                            </main>
                            <ArchitectureHubFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ArchitectureHubMain;