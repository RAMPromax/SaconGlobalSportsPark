import AwardShape from '../../../public/assets/img/sacon-global/award/award-shape-1.png';
import { awardDT } from '@/types/award-d-t';
import { ArrowFour } from '@/svg';
import Image from 'next/image';

const SaconGlobalAward = () => {
  const awards: awardDT[] = [
    {
      id: 1,
      year: '2005',
      title: 'Sacon Global project of the year',
      category: 'Football',
      delay: '.3'
    },
    {
      id: 2,
      year: '2010',
      title: 'Future Champion Award',
      category: 'Football',
      delay: '.4'
    },
    {
      id: 3,
      year: '2014',
      title: 'ON FIRE',
      category: 'Football',
      delay: '.5'
    },
    {
      id: 4,
      year: '2020',
      title: 'Trophy Winner',
      category: 'Football',
      delay: '.6'
    }
  ];

  return (
    <div className="ar-award-area">
      <div className="container container-1430">
        <div className="ar-award-wrap p-relative pt-140 pb-160">
          <div className="ar-award-shape-1">
            <Image src={AwardShape} alt="award-shape"/>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="ar-award-title-box mb-50">
                <span className="tp-section-subtitle-satisfy mb-20 tp_fade_anim" data-delay=".3">
                  International Awards
                </span>
                <h3 className="tp-section-title-clash-600 fs-60 mb-0 tp_fade_anim" data-delay=".4">
                  Awards & recognition
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-xxl-4 col-xxl-8 offset-xl-2 col-xl-10">
              <div className="ar-award-right-wrap">
                {awards.map((award) => (
                  <div key={award.id} className="ar-award-item tp_fade_anim" data-delay={award.delay}>
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="ar-award-box-left z-index-3">
                          <span className="ar-award-year">{award.year}</span>
                          <span className="ar-award-title">{award.title}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="ar-award-box-right z-index-3 d-flex align-items-center justify-content-between">
                          <span className="ar-award-category">{award.category}</span>
                          <span className="ar-award-icon">
                            <ArrowFour />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaconGlobalAward;