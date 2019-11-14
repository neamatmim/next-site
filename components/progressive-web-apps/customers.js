import Container from '../container'
import SectionHeader from '../section-header'
import Twitch from '../icons/companies/twitch';
import QQ from '../icons/companies/qq';
import Staples from '../icons/companies/staples';

export default () => (
  <Container wide divider padding>
    <SectionHeader id="customers" title="Mobile Sites Built with Next.js" />

    <div className="logos-container">
      <div className="logos">
        <div>
          <Twitch />
        </div>
        <div>
          <Staples />
        </div>
        <div>
          <QQ />
        </div>
      </div>
    </div>
    
    <style jsx>
    {`
      .logos-container {
        display: flex;
        justify-content: center;
      }
      .logos {
        display: flex;
        opacity: .4;
        justify-content: space-between;
        align-items: center;
        transform-origin: right left;
      }
      .logos > div {
        margin: 0 2.25rem;
      }
      @media screen and (max-width: 640px) {
        .logos {
          transform: scale(0.95);
        }
        .logos > div {
          margin: 0 1rem;
        }
      }
      @media screen and (max-width: 480px) {
        .logos {
          transform: scale(0.75);
        }
      }
      @media screen and (max-width: 380px) {
        .logos {
          transform: scale(0.6);
        }
      }
    `}
    </style>
  </Container>
)