import { Schema } from 'mongoose';
import { UserTables } from '../enums';

export const studentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: UserTables.SCHOOL,
    required: true,
  },
  classrooms: [
    {
      type: Schema.Types.ObjectId,
      ref: UserTables.CLASSROOM,
      required: false,
    },
  ],
  parentEmail: {
    type: String,
    required: true,
  },
  registerCode: {
    type: Schema.Types.ObjectId,
    ref: UserTables.STUDENT_CODE,
    required: true,
  },
  profileImg: {
    type: String,
    required: false,
    default: 'default',
  },
  birthday: {
    type: String,
    required: false,
  },
});
