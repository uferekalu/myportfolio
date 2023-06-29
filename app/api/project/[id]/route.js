import Project from '@/models/project';
import { connectToDB } from '@/utils/database';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const project = await Project.findById(params.id).populate('creator');
    if (!project) return new Response('Project Not Found', { status: 404 });

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { name, description, link, github, imgSrc } = await request.json();

  try {
    await connectToDB();

    // find the existing project by ID
    const existingProject = await Project.findById(params.id);

    if (!existingProject) {
      return new Response('Project not found', { status: 400 });
    }

    // Update the project with new data
    existingProject.name = name;
    existingProject.description = description;
    existingProject.link = link;
    existingProject.github = github;
    existingProject.imgSrc = imgSrc;

    await existingProject.save();

    return new Response('Successfully updated the project', { status: 200 });
  } catch (error) {
    return new Response('Error Updating Project', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the project by ID and remove it

    await Project.findByIdAndRemove(params.id);

    return new Response('Project deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Error deleting project', { status: 500 });
  }
};
