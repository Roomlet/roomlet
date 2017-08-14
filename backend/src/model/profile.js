import Mongoose, { Schema } from 'mongoose'

const profileSchema = new Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'user',
    unique: true,
    required: true,
  },
  bio: { type: String },
  phoneNumber: { type: Number },
  budget: { type: Number },
  work: { type: String },
  smoke: { type: Boolean },
  pets: { type: String },
  clean: { type: Boolean },
  hours: { type: String },
  email: { type: String },
  userName: { type: String },
  car: { type: String },
})

const Profile = Mongoose.model('profile', profileSchema)
