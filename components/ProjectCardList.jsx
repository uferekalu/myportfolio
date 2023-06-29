import Media from '@/utils/media';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import styles from './styles.module.css';

export default function ProjectCardList({ data, setAllProjects }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { mobile, tabletAndDesktop } = Media();

  const handleEdit = (post) => {
    router.push(`/update-project?id=${post._id}`);
  };

  const handleDelete = async (project) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this project?'
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/project/${project._id.toString()}`, {
          method: 'DELETE',
        });
        const filteredProjects = data.filter(
          (item) => item._id !== project._id
        );
        setAllProjects(filteredProjects);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '20px',
          gap: '10px',
          flexDirection: mobile ? 'column' : undefined,
          justifyContent: mobile ? 'center' : undefined,
        }}
      >
        {data.map((project) => (
          <div
            key={project._id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: mobile ? '100%' : '33%',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0px auto',
              }}
            >
              <Image
                src={project.imgSrc}
                width={250}
                height={150}
                alt={'project image'}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '25%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'black',
                    marginTop: '20px',
                  }}
                >
                  Name:
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '73%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'black',
                    marginTop: '20px',
                  }}
                >
                  {project.name}
                </Form.Label>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '25%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  GitHub:
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '73%',
                }}
              >
                <Form.Label
                  onClick={() => router.push(project.github)}
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'black',
                    cursor: 'pointer',
                  }}
                >
                  {project.github}
                </Form.Label>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '25%',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'black',
                  }}
                >
                  WebLink:
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '73%',
                }}
              >
                <Form.Label
                  onClick={() => router.push(project.link)}
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'black',
                    cursor: 'pointer',
                  }}
                >
                  {project.link}
                </Form.Label>
              </div>
            </div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'black',
                textAlign: 'justify',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {`${project.description.slice(0, 250)}...`}
              <Form.Label
                onClick={() =>
                  router.push(`/projects/${project._id}?id=${project._id}`)
                }
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#00902F',
                  marginTop: '20px',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                View Details
              </Form.Label>
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
                  onClick={() => handleEdit(project)}
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
                  onClick={() => handleDelete(project)}
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
        ))}
      </div>
    </>
  );
}
