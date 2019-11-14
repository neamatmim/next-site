import { useAmp } from 'next/amp';
import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';

import Jet from '../icons/companies/jet';
import Hulu from '../icons/companies/hulu';
import ATT from '../icons/companies/att';
import Twitch from '../icons/companies/twitch';
import Binance from '../icons/companies/binance';
import Staples from '../icons/companies/staples';
import Framer from '../icons/companies/framer';
import Boosted from '../icons/companies/boosted';
import Marvel from '../icons/companies/marvel';
import Deliveroo from '../icons/companies/deliveroo';
import EuroVision from '../icons/companies/eurovision.js';

const slides = [
  {
    href: 'https://att.com',
    image: '/static/images/showcases/att.jpg',
    alt: 'ATT',
    logo: <ATT />
  },
  {
    href: 'https://twitch.tv/',
    image: '/static/images/showcases/twitch.jpg',
    alt: 'Twitch',
    logo: <Twitch />
  },
  {
    href: 'https://binance.com/',
    image: '/static/images/showcases/binance.jpg',
    alt: 'Binance',
    logo: <Binance />
  },
  {
    href: 'https://www.staples.com/',
    image: '/static/images/showcases/staples.jpg',
    alt: 'Staples',
    logo: <Staples />
  },
  {
    href: 'https://store.framer.com/',
    image: '/static/images/showcases/framer.jpg',
    alt: 'Framer Store',
    logo: <Framer />
  },
  {
    href: 'https://boostedboards.com/',
    image: '/static/images/showcases/boosted.jpg',
    alt: 'Boosted Boards',
    logo: <Boosted />
  },
  {
    href: 'https://marvel.com/',
    image: '/static/images/showcases/marvel.jpg',
    alt: 'Marvel',
    logo: <Marvel />
  },
  {
    href: 'https://deliveroo.co.uk/',
    image: '/static/images/showcases/deliveroo.jpg',
    alt: 'Deliveroo',
    logo: <Deliveroo />
  },
  {
    href: 'https://eurovision.tv/',
    image: '/static/images/showcases/eurovision.jpg',
    alt: 'EuroVision',
    logo: <EuroVision />
  },
  {
    href: 'https://jet.com',
    image: '/static/images/showcases/jet.jpg',
    alt: 'Jet',
    logo: <Jet />
  },
  {
    href: 'https://hulu.com',
    image: '/static/images/showcases/showcases-17.jpg',
    alt: 'Hulu',
    logo: <Hulu />
  }
];

export default () => {
  const isAmp = useAmp();
  return (
    <Container padding wide>
      <SectionHeader id="customers" title="Who's Using Server-Side Rendering" />
      <Carousel slides={slides} isAmp={isAmp} />
    </Container>
  );
};
