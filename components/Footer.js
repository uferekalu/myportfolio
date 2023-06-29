'use client';

import { Form } from 'react-bootstrap';
import FooterSocials from './FooterSocials';
export default function Footer(props) {
  return (
    <>
      <div
        id="footerSection"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: 0,
          padding: '30px',
          background: '#151515',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Form.Label
            style={{
              color: 'white',
              fontSize: '14px',
            }}
          >
            Email: dekalusha@gmail.com
          </Form.Label>
          <Form.Label
            style={{
              color: 'white',
              fontSize: '14px',
            }}
          >
            Phone: +2348130149426
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <FooterSocials imgSrc="/assets/images/monodometwittericon.png" />
          <FooterSocials imgSrc="/assets/images/monodomefacebookicon.png" />
          <FooterSocials imgSrc="/assets/images/monodomelinkedinicon.png" />
        </div>
      </div>
    </>
  );
}
