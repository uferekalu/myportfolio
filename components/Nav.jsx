'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Media from '@/utils/media';
import styles from './styles.module.css';

export default function Nav() {
  const { data: session } = useSession();

  console.log(session?.user.email);

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '10px',
      }}
    >
      <Link
        href={'/'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            objectFit: 'contain',
            borderRadius: '50%',
          }}
          src="/assets/images/pic.jpg"
          alt="logo"
          width="30"
          height="30"
        />
      </Link>
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '10px',
          }}
        >
          <Link
            href="/projects"
            className="black_btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '10px',
              background: 'black',
              padding: '10px',
              color: 'white',
              transition: 'all',
              textDecoration: 'none',
              fontSize: '12px',
              height: '30px',
            }}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="black_btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '10px',
              background: 'black',
              padding: '10px',
              color: 'white',
              transition: 'all',
              textDecoration: 'none',
              fontSize: '12px',
              height: '30px',
            }}
          >
            Contact
          </Link>
          {session?.user ? (
            <div
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              {session?.user.email === 'dekalusha@gmail.com' && (
                <Link
                  href="/create-project"
                  className={styles.black_btn}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '10px',
                    background: 'black',
                    padding: '10px',
                    color: 'white',
                    transition: 'all',
                    textDecoration: 'none',
                    fontSize: '12px',
                    height: '30px',
                  }}
                >
                  Create Project
                </Link>
              )}
              <button
                type="button"
                onClick={signOut}
                className="outline_btn"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '10px',
                  background: 'transparent',
                  border: '1px solid black',
                  padding: '10px',
                  color: 'black',
                  transition: 'all',
                  cursor: 'pointer',
                  fontSize: '12px',
                  height: '30px',
                }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: '10px',
                      background: 'black',
                      padding: '10px',
                      color: 'white',
                      transition: 'all',
                      cursor: 'pointer',
                      fontSize: '12px',
                      height: '30px',
                    }}
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      )}
      {mobile && (
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Image
            style={
              {
                // marginRight: "10px",
              }
            }
            src="/assets/images/hamburger.png"
            width={20}
            height={14}
            alt="hamburger"
            onClick={() => setToggleDropdown((prevState) => !prevState)}
          />
          {toggleDropdown && (
            <>
              {session?.user ? (
                <div
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 40,
                    right: 10,
                    width: '50%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'white',
                      gap: '10px',
                      border: '0.5px solid rgba(0, 0, 0, 0.04)',
                      boxShadow:
                        '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                      padding: '20px',
                    }}
                  >
                    <Link
                      href="/projects"
                      className="black_btn"
                      onClick={() => setToggleDropdown(false)}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '10px',
                        background: 'black',
                        padding: '10px',
                        color: 'white',
                        transition: 'all',
                        textDecoration: 'none',
                        fontSize: '12px',
                        height: '30px',
                      }}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/contact"
                      className="black_btn"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '10px',
                        background: 'black',
                        padding: '10px',
                        color: 'white',
                        transition: 'all',
                        textDecoration: 'none',
                        fontSize: '12px',
                        height: '30px',
                      }}
                    >
                      Contact
                    </Link>
                    {session?.user.email === 'dekalusha@gmail.com' && (
                      <Link
                        href="/create-project"
                        className="black_btn"
                        onClick={() => setToggleDropdown(false)}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          borderRadius: '10px',
                          background: 'black',
                          padding: '10px',
                          color: 'white',
                          transition: 'all',
                          textDecoration: 'none',
                          fontSize: '12px',
                          height: '30px',
                        }}
                      >
                        Create Project
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="outline_btn"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '10px',
                        background: 'transparent',
                        border: '1px solid black',
                        padding: '10px',
                        color: 'black',
                        transition: 'all',
                        fontSize: '12px',
                        height: '30px',
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      display: 'block',
                      position: 'absolute',
                      top: 40,
                      right: 10,
                      width: '50%',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'white',
                        gap: '10px',
                        border: '0.5px solid rgba(0, 0, 0, 0.04)',
                        boxShadow:
                          '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                        padding: '20px',
                      }}
                    >
                      <Link
                        href="/projects"
                        className="black_btn"
                        onClick={() => setToggleDropdown(false)}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          borderRadius: '10px',
                          background: 'black',
                          padding: '10px',
                          color: 'white',
                          transition: 'all',
                          textDecoration: 'none',
                          fontSize: '12px',
                          height: '30px',
                        }}
                      >
                        Projects
                      </Link>
                      <Link
                        href="/contact"
                        className="black_btn"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          borderRadius: '10px',
                          background: 'black',
                          padding: '10px',
                          color: 'white',
                          transition: 'all',
                          textDecoration: 'none',
                          fontSize: '12px',
                          height: '30px',
                        }}
                      >
                        Contact
                      </Link>
                      {providers &&
                        Object.values(providers).map((provider) => (
                          <button
                            type="button"
                            key={provider.name}
                            onClick={() => {
                              signIn(provider.id);
                            }}
                            className="black_btn"
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              textAlign: 'center',
                              borderRadius: '10px',
                              background: 'black',
                              padding: '10px',
                              color: 'white',
                              transition: 'all',
                              fontSize: '12px',
                              height: '30px',
                              cursor: 'pointer',
                            }}
                          >
                            Sign in
                          </button>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
}
