import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
  if (connection.isConnected) {
    console.log('Using existing connection')
    return
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('DB Connected')
  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
