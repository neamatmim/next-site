import { useAmp } from 'next/amp';
import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';

import Scale from '../icons/companies/scale';
import Hulu from '../icons/companies/hulu';
import Ticketmaster from '../icons/companies/ticketmaster';
import Auth0 from '../icons/companies/auth0';
import Replit from '../icons/companies/replit';
import Nike from '../icons/companies/nike';
import Monday from '../icons/companies/monday';
import Kap from '../icons/companies/kap';

const slides = [
  {
    href: 'https://ticketmaster.com/',
    image: '/static/images/showcases/ticketmaster.jpg',
    alt: 'Ticketmaster',
    logo: <Ticketmaster />
  },
  {
    href: 'https://scale.ai/',
    image: '/static/images/showcases/showcases-04.jpg',
    alt: 'Scale AI',
    logo: <Scale />
  },
  {
    href: 'https://monday.com/',
    image: '/static/images/showcases/monday.jpg',
    alt: 'Monday',
    logo: <Monday />
  },
  {
    href: 'https://nike.com/help/',
    image: '/static/images/showcases/nike.jpg',
    alt: 'Nike',
    logo: <Nike />
  },
  {
    href: 'https://auth0.com/',
    image: '/static/images/showcases/showcases-03.jpg',
    alt: 'Auth0',
    logo: <Auth0 />
  },
  {
    href: 'https://repl.it/',
    image: '/static/images/showcases/repl.it.jpg',
    alt: 'Repl.it',
    logo: <Replit />
  },
  {
    href: 'https://getkap.co/',
    image: '/static/images/showcases/kap.jpg',
    alt: 'Kap',
    logo: <Kap />
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
      <div className="first col">
        <SectionHeader id="customers" title="Who's Using CSS-in-JS" />
        <Carousel slides={slides} isAmp={isAmp} />
      </div>
    </Container>
  );
};
