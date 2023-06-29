'use client';

import AboutDesc from '@/components/AboutDesc';
import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function Home() {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h3
          style={{
            display: 'flex',
            color: '#00902F',
            background: 'transparent',
            padding: '10px',
            border: '0.5px solid rgba(0, 0, 0, 0.04)',
            boxShadow:
              '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '5px',
            marginTop: '10px',
          }}
        >
          Full Stack JavaScript Developer
        </h3>
        <Form.Label
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            padding: '0px 20px',
            textAlign: 'center',
            marginTop: '10px',
          }}
        >
          Experienced Full Stack JavaScript Team Lead with a track record of
          building and delivering intuitive <br /> and user-friendly web
          applications by adopting agile development methodology for ease of
          meeting customer satisfaction
        </Form.Label>
      </section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px',
        }}
      >
        <Form.Label
          style={{
            display: 'flex',
            fontWeight: '600',
            fontSize: '16px',
            color: '#00902F',
            margin: '10px auto',
            border: '0.5px solid rgba(0, 0, 0, 0.04)',
            boxShadow:
              '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
            padding: '10px',
          }}
        >
          WORK EXPERIENCE
        </Form.Label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: mobile ? '100%' : '80%',
            flexDirection: 'column',
            margin: '0px auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              borderRadius: '5px',
              marginTop: '10px',
              padding: '20px',
              gap: '10px',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
            }}
          >
            <AboutDesc
              jobTitle="Full Stack JavaScript Developer (Team Lead)"
              company="Talosmart Solution"
              jobType="Contract"
              startDate="Aug 2022"
              endDtate="Feb 2023"
              location="Nigeria"
              description="Led a team of 6 developers to plan, implement and deliver a driving and car clearing application
              by using various JavaScript technologies resulting in increase in productivity."
              activities1="Designed and implemented a driving and car clearing application that delivers goods
              locally based on its size."
              activities2="Worked closely with clients to understand their requirements and implemented the
              functionalities to meet their needs."
              activities3="Managed the software development life cycle, including code reviews, testing, and
              deployment."
              activities4="Improved team productivity by adopting agile methodologies and conducting regular
              stand-up meetings"
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              borderRadius: '5px',
              marginTop: '10px',
              padding: '20px',
              gap: '10px',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
            }}
          >
            <AboutDesc
              jobTitle="Full Stack JavaScript Developer"
              company="Remote"
              jobType="Contract"
              startDate="Feb 2022"
              endDtate="July 2022"
              location="Dover, Delaware - USA"
              description="Collaborated with a team of 4 developers in delivering an Advertising and Surfing application by
              adopting agile methodologies which resulted in 25% increase in productivity"
              activities1="Designed and developed an advertising application satisfactorily within tight deadlines"
              activities2="Worked closely with clients to understand their requirements and implemented the
              functionalities to meet their needs"
              activities3="Implemented automated testing and deployment processes resulting in increased
              software reliability and faster delivery"
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              borderRadius: '5px',
              marginTop: '10px',
              padding: '20px',
              gap: '10px',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
            }}
          >
            <AboutDesc
              jobTitle="Full Stack JavaScript Developer"
              company="Utopia tech Pty"
              jobType="Full Time - Remote"
              startDate="Aug 2018"
              endDtate="Sep. 2021"
              location="Sydney - Australia"
              description="Worked with a team of 10 developers to plan, design and implement an ecommerce application
              for buyers and vendors alike by adopting agile methodologies which resulted in optimal product
              delivery"
              activities1="Orchestrated and implemented the design from Figma for various user interfaces of the
              ecommerce application through agile methodology"
              activities2="Worked closely with clients to understand their requirements and implemented the
              functionalities to meet their needs."
              activities3="Implemented data analysis tools to monitor and improve the performance of the
              ecommerce application"
            />
          </div>
        </div>
      </div>
    </>
  );
}
