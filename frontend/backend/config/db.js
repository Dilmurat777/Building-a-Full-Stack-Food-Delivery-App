import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect('mongodb+srv://mrdilmurat777:an1543983@cluster0.qsuc6sm.mongodb.net/food-del')
    .then(() => console.log('DB connected'));
};
