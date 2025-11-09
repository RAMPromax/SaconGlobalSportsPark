import heroBg from '../../../public/assets/img/sacon-global/hero/hero-bg-shape.png';
import AnimatedCounterTwo from '../counter/AnimatedCounterTwo';

interface FunFactItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  delay: string;
  duration?: number;
}

const SaconGlobalFunFact = ({ spacingCls = "mb-110" }) => {
  const funFacts: FunFactItem[] = [
    {
      id: 1,
      value: 1,
      suffix: "k+",
      label: "Students",
      delay: ".3",
    },
    {
      id: 2,
      value: 30,
      suffix: "+",
      label: "Academic experts",
      delay: ".5",
    },
    {
      id: 3,
      value: 20,
      suffix: "+",
      label: "Sports",
      delay: ".7",
    },
    {
      id: 4,
      value: 130,
      suffix: "+",
      label: "Expert coaches",
      delay: ".8",
    }
  ];

  return (
    <div className={`ar-funfact-area ar-funfact-bg ${spacingCls}`} style={{ backgroundImage: `url(${heroBg.src})` }}>
      <div className="container container-1330">
        <div className="row">
          {funFacts.map((fact) => (
            <div key={fact.id} className="col-lg-3 col-md-4">
              <div className="ar-funfact-item text-center mb-45 tp_fade_anim" data-delay={fact.delay}>
                <h4>
                  <AnimatedCounterTwo min={0} max={fact.value}/>
                  {fact.suffix}
                </h4>
                <span>{fact.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaconGlobalFunFact;