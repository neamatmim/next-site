import Container from '../container';
import SectionHeader from '../section-header';
import Wifi from './svg/wifi';

export default () => (
  <Container wide center>
    <SectionHeader
      anchor="offline-support"
      title="Offline Support"
      margin="4rem 0 0 0"
    />

    <div className="content">
      <p>
        Unreliable network connections are an unavoidable reality on the mobile
        web. But that doesn't mean they need to disrupt your users. Progressive
        web apps leverage modern web technologies to provide offline support so
        your app never goes down.
      </p>
    </div>

    <div className="device">
      <amp-img
        src="/static/svg/offline-support.svg"
        alt="Offline support"
        width={632}
        height={204}
      />
      <div className="wifi">
        <Wifi />
      </div>
    </div>

    <style jsx>{`
      a {
        display: none;
        margin: 0 0 0 0;
      }
      .content {
        margin: 1rem 0 1.5rem;
        max-width: 44rem;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .device {
        position: relative;
        justify-content: center;
        display: flex;
      }
      .wifi {
        position: absolute;
        bottom: 0;
      }
    `}</style>
  </Container>
);
