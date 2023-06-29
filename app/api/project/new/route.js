import Project from '@/models/project';
import { connectToDB } from '@/utils/database';

export const POST = async (request) => {
  const { userId, name, description, link, github, imgSrc } =
    await request.json();

  try {
    await connectToDB();

    const newProject = new Project({
      creator: userId,
      name,
      description,
      link,
      github,
      imgSrc,
    });

    await newProject.save();
    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new project', { status: 500 });
  }
};
