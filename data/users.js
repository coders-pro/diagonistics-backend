import bcrypt from 'bcryptjs'

const users = [
  {
    First_Name: 'Udosinachi',
    Middle_Name: 'Joseph',
    Last_Name: 'Ofoegbu',
    User_Name: 'pro-udo',
    Phone_No: '08123456789',
    Email_id: 'udo@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
