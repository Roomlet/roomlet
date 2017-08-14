import Mongoose, { Schema } from 'mongoose'

const listingSchema = new Schema({
  profileId: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  },
  listingURL: { type: String },
  verified: { type: Boolean },
  cost: { type: Number },
  landlordPhone: { type: Number },
  petsAllowed: { type: Boolean },
  nonSmoking: { type: Boolean },
  comment: { type: String },
  parkingSpaces: { type: Number },
})

const Listing = Mongoose.model('listing', listingSchema)
