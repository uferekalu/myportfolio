'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import Image from 'next/image';
import Media from '@/utils/media';
import { Button, Form } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

export default function ProjectDetail() {
  const [allProjects, setAllProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState({
    id: null,
    name: '',
    description: '',
    link: '',
    github: '',
    imgSrc: '',
  });
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');
  const router = useRouter();
  const { mobile } = Media();

  const handleEdit = (post) => {
    router.push(`/update-project?id=${post.id}`);
  };

  const handleDelete = async (project) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this project?'
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/project/${projectDetail.id.toString()}`, {
          method: 'DELETE',
        });

        router.push(`/projects`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const getProductDetails = async () => {
      setLoading(true);
      const response = await fetch(`/api/project/${projectId}`);
      const data = await response.json();
      console.log('detail', data);

      setProjectDetail({
        id: data._id,
        name: data.name,
        description: data.description,
        link: data.link,
        github: data.github,
        imgSrc: data.imgSrc,
      });
      setLoading(false);
    };
    if (projectId) getProductDetails();
  }, [projectId]);
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
          marginRight: '40px',
          height: loading ? '80vh' : mobile ? '150vh' : '100vh',
        }}
      >
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <Loading />
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0px auto',
                flexDirection: 'column',
              }}
            >
              <Image
                src={projectDetail?.imgSrc}
                width={mobile ? 250 : 350}
                height={200}
                alt={'project image'}
              />
              <Form.Label
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'black',
                  marginTop: '20px',
                  textTransform: 'uppercase',
                }}
              >
                {projectDetail.name}
              </Form.Label>
              <Form.Label
                onClick={() => router.push(projectDetail.github)}
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                GitHub: {projectDetail.github}
              </Form.Label>
              <Form.Label
                onClick={() => router.push(projectDetail.link)}
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                Website: {projectDetail.link}
              </Form.Label>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'black',
                  textAlign: 'center',
                  width: mobile ? '100%' : '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '30px',
                }}
              >
                {projectDetail.description}
              </p>
              {session?.user.email === 'dekalusha@gmail.com' && (
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '10px',
                  }}
                >
                  <Button
                    onClick={() => handleEdit(projectDetail)}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                      background: 'transparent',
                      border: '1px solid #00902F',
                      borderRadius: '6px',
                      fontSize: '14px',
                      width: '150px',
                      cursor: 'pointer',
                      color: 'black',
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(projectDetail)}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                      background: 'Red',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '14px',
                      width: '150px',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
