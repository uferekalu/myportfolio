'use client';

import Image from 'next/image';
import { useRef } from 'react';
import Media from '@/utils/media';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';

export default function FormComp({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  const hiddenProjectImgInput = useRef(null);

  const { mobile, tabletAndDesktop } = Media();

  const handleProjectImgClick = () => {
    hiddenProjectImgInput.current.click();
  };

  const handleProjectImgChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setPost({
        ...post,
        imgSrc: e.target.result,
        imgName: fileUploaded.name,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: mobile ? '100%' : '60%',
          margin: '0px auto',
          height: mobile ? '160vh' : '130vh',
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
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              marginBottom: '20px',
            }}
          >
            {type} Project
          </Form.Label>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'black',
            }}
          >
            Name of the Project
          </Form.Label>
          <input
            style={{
              display: 'flex',
              width: '100%',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '6px',
            }}
            type="text"
            placeholder="Name of your project"
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            required
          />
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'black',
              marginTop: '20px',
            }}
          >
            Website url
          </Form.Label>
          <input
            style={{
              display: 'flex',
              width: '100%',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '6px',
            }}
            type="text"
            placeholder="Website url of the project"
            value={post.link}
            onChange={(e) => setPost({ ...post, link: e.target.value })}
            required
          />
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'black',
              marginTop: '20px',
            }}
          >
            Github Link
          </Form.Label>
          <input
            style={{
              display: 'flex',
              width: '100%',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '6px',
            }}
            type="text"
            placeholder="Github Link of the project"
            value={post.github}
            onChange={(e) => setPost({ ...post, github: e.target.value })}
            required
          />
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'black',
              marginTop: '20px',
            }}
          >
            Project Description
          </Form.Label>
          <textarea
            style={{
              display: 'flex',
              width: '100%',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '6px',
            }}
            type="text"
            placeholder="Description of the project"
            value={post.description}
            rows={6}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            required
          />
          <div
            style={
              mobile
                ? {
                    display: 'flex',
                    marginTop: '40px',
                    flexDirection: 'column',
                    gap: '10px',
                  }
                : {
                    display: 'flex',
                    marginTop: '40px',
                    gap: '10px',
                  }
            }
          >
            <Button
              onClick={handleProjectImgClick}
              style={{
                display: 'flex',
                gap: '20px',
                background: 'transparent',
                border: '1px solid #7CC427',
                padding: '10px',
                height: '40px',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'black',
                fontSize: '12px',
              }}
            >
              <Image
                src="/assets/images/imgupload.png"
                width="15"
                height="15"
                alt="close"
              />
              Choose Project image
            </Button>
            <input
              type="file"
              ref={hiddenProjectImgInput}
              onChange={handleProjectImgChange}
              style={{
                display: 'none',
              }}
            />
            {post.imgName ? (
              <Form.Label
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  fontWeight: 500,
                  marginTop: '4px',
                }}
              >
                {post.imgName}
              </Form.Label>
            ) : (
              <Form.Label
                style={{
                  fontSize: '14px',
                  color: '#A6A6A6',
                  fontWeight: 500,
                  marginTop: '7px',
                }}
              >
                No picture chosen
              </Form.Label>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '30px',
              width: '100%',
            }}
          >
            <Link
              href="/"
              className="black_btn"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '10px',
                background: 'black',
                padding: '10px 20px',
                color: 'white',
                transition: 'all',
                textDecoration: 'none',
                width: '48%',
              }}
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="outline_btn"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '10px',
                background: 'transparent',
                border: '1px solid black',
                padding: '10px 20px',
                color: 'black',
                transition: 'all',
                cursor: 'pointer',
                width: '48%',
              }}
            >
              {submitting
                ? type === 'Create'
                  ? `${type.slice(0, type.length - 1)}ing...`
                  : `${type}ing`
                : type}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
