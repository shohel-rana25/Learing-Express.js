import dotenv from 'dotenv';
dotenv.config();

const dev = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
    },
};

export default dev;
