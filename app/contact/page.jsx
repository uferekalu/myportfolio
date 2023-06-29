'use client';

import FooterSocials from '@/components/FooterSocials';
import Media from '@/utils/media';
import { useRouter } from 'next/navigation';
import { Form } from 'react-bootstrap';

export default function Contact() {
  const router = useRouter();
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          border: '0.5px solid rgba(0, 0, 0, 0.04)',
          boxShadow:
            '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
          padding: '20px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px auto',
            flexDirection: 'column',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              marginBottom: '20px',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            My contacts
          </Form.Label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              flexDirection: mobile ? 'column' : undefined,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                padding: '20px',
                gap: '10px',
                width: mobile ? '100%' : '350px',
              }}
            >
              <FooterSocials
                imgSrc="/assets/images/twitter.png"
                contact={true}
              />
              <Form.Label
                onClick={() => router.push('https://twitter.com/lushak_tech')}
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'black',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                https://twitter.com/lushak_tech
              </Form.Label>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                padding: '20px',
                gap: '10px',
                width: mobile ? '100%' : '350px',
              }}
            >
              <FooterSocials
                imgSrc="/assets/images/linkedin.png"
                contact={true}
              />
              <Form.Label
                onClick={() =>
                  router.push(
                    'https://www.linkedin.com/in/kalu-ufere-a5b0787a/'
                  )
                }
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'black',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                https://www.linkedin.com/in/kalu-ufere-a5b0787a/
              </Form.Label>
            </div>
            {mobile && (
              <>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/github.png"
                    contact={true}
                  />
                  <Form.Label
                    onClick={() => router.push('https://github.com/uferekalu')}
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    https://github.com/uferekalu
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/gmail.png"
                    contact={true}
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    dekalusha@gmail.com
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/phone.png"
                    contact={true}
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    +2348130149426
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '100%',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/telegram.png"
                    contact={true}
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    @IntelligentProgrammer
                  </Form.Label>
                </div>
              </>
            )}
          </div>
          {tabletAndDesktop && (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '350px',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/github.png"
                    contact={true}
                  />
                  <Form.Label
                    onClick={() => router.push('https://github.com/uferekalu')}
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    https://github.com/uferekalu
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '350px',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/gmail.png"
                    contact={true}
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    dekalusha@gmail.com
                  </Form.Label>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '350px',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/phone.png"
                    contact={true}
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    +2348130149426
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '0.5px solid rgba(0, 0, 0, 0.04)',
                    boxShadow:
                      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                    padding: '20px',
                    gap: '10px',
                    width: '350px',
                  }}
                >
                  <FooterSocials
                    imgSrc="/assets/images/telegram.png"
                    contact={true}
                  />
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'black',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    @IntelligentProgrammer
                  </Form.Label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
