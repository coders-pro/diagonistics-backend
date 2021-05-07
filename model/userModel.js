import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    First_Name: {
      type: String,
      required: true,
    },
    Middle_Name: {
      type: String,
      required: true,
    },
    Last_Name: {
      type: String,
      required: true,
    },
    User_Name: {
      type: String,
      required: true,
    },
    Phone_No: {
      type: Number,
      required: true,
    },
    Email_id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
