import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';

import Blockchain from '../icons/companies/blockchain';
import Expo from '../icons/companies/expo';
import Blockstack from '../icons/companies/blockstack';
import Material from '../icons/companies/material-ui';
import Plotly from '../icons/companies/plotly';
import VergeCurrency from '../icons/companies/vergecurrency';
import NuCypher from '../icons/companies/nucypher';
import Rossmann from '../icons/companies/rossmann';
import Audiense from '../icons/companies/audiense';
import Motiv from '../icons/companies/motiv';

const slides = [
  {
    href: 'https://blockstack.org/',
    image: '/static/images/showcases/blockstack.jpg',
    alt: 'Blockstack',
    logo: <Blockstack />
  },
  {
    href: 'https://plot.ly/',
    image: '/static/images/showcases/plotly.jpg',
    alt: 'Plotly',
    logo: <Plotly />
  },
  {
    href: 'https://www.rossmann.pl/',
    image: '/static/images/showcases/rossmann.png',
    alt: 'Rossmann',
    logo: <Rossmann />
  },
  {
    href: 'https://audiense.com/',
    image: '/static/images/showcases/audiense.png',
    alt: 'Audiense',
    logo: <Audiense />
  },
  {
    href: 'https://mymotiv.com/',
    image: '/static/images/showcases/motiv.png',
    alt: 'Motiv',
    logo: <Motiv />
  },
  {
    href: 'https://www.nucypher.com/',
    image: '/static/images/showcases/nucypher.png',
    alt: 'NuCypher',
    logo: <NuCypher />
  },
  {
    href: 'https://material-ui.com/',
    image: '/static/images/showcases/material-ui.jpg',
    alt: 'Material UI',
    logo: <Material />
  },
  {
    href: 'https://vergecurrency.com/',
    image: '/static/images/showcases/verge.jpg',
    alt: 'Verge Currency',
    logo: <VergeCurrency />
  },
  {
    href: 'https://expo.io/',
    image: '/static/images/showcases/showcases-13.jpg',
    alt: 'Expo',
    logo: <Expo />
  },
  {
    href: 'https://blockchain.com/',
    image: '/static/images/showcases/blockchain.jpg',
    alt: 'Blockchain',
    logo: <Blockchain />
  }
];

export default ({ isAmp }) => (
  <Container padding wide>
    <SectionHeader id="customers" title="Who's Using Static Exports" />
    <Carousel slides={slides} isAmp={isAmp} />
  </Container>
);
