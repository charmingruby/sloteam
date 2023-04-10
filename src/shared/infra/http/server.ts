import { app } from '../../../app';

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`📦 Server is running on http://localhost:${SERVER_PORT}`));

