'use client';

import FormComp from '@/components/Form';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UpdateProject() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    name: '',
    description: '',
    link: '',
    github: '',
    imgSrc: '',
    imgName: '',
  });

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(`/api/project/${projectId}`);
      const data = await response.json();

      setPost({
        name: data.name,
        description: data.description,
        link: data.link,
        github: data.github,
        imgSrc: data.imgSrc,
      });
    };
    if (projectId) getProductDetails();
  }, [projectId]);

  const updateProject = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!projectId) return alert('Missing ProjectId');

    try {
      const response = await fetch(`/api/project/${projectId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: post.name,
          description: post.description,
          link: post.link,
          github: post.github,
          imgSrc: post.imgSrc,
        }),
      });

      if (response.ok) {
        router.push('/projects');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormComp
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateProject}
    />
  );
}
