import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {userRoutes} from './routes/userRoutes';

class Server {
    private app: express.Application;
    private PORT = process.env.PORT || 3000;
    private MONGODB_URI = 'mongodb://localhost:27017/task'; // Coloque a URI do seu MongoDB

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.connectDB();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.use('/api/users', userRoutes);
        // Adicione outras rotas aqui, se necessário
    }

    private async connectDB(): Promise<void> {
        try {
            await mongoose.connect(this.MONGODB_URI);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', (error as Error).message);
        }
    }

    public start(): void {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        });
    }
}

const server = new Server();
server.start();
