'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import FormComp from '@/components/Form';

export default function CreateProject() {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    name: '',
    description: '',
    link: '',
    github: '',
    imgSrc: '',
    imgName: '',
  });

  const createProject = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/project/new', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
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
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createProject}
    />
  );
}
