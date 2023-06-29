import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Name of project is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  link: {
    type: String,
    required: [true, 'Link is required'],
  },
  github: {
    type: String,
    required: [true, 'Repository link is required'],
  },
  imgSrc: {
    type: String,
    required: [true, 'Image source is required'],
  },
});

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
