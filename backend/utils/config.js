import dns from 'dns'
import dotenv from 'dotenv'

dns.setServers(['8.8.8.8', '8.8.4.4']); // Fix for ISP DNS blocking MongoDB SRV lookups

dotenv.config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

export default { PORT, MONGODB_URI }