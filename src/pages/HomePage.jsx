import Hero from '../components/Hero';
import Ambiance from '../components/home/Ambiance';
import Community from '../components/home/Community';
import OurBranches from '../components/home/OurBranches';

const BG_IMAGE =
  "https://res.cloudinary.com/dpadqzd98/image/upload/v1780171603/about-bg_f3vrt8.jpg?w=1920";

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url('${BG_IMAGE}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for legibility across all sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/80 via-coffee-900/60 to-coffee-900/80 pointer-events-none" />

      {/* Sections rendered on top of the overlay */}
      <div className="relative">
        <Hero />
        <Ambiance />
        <Community />
        <OurBranches />
      </div>
    </div>
  );
};

export default HomePage;
