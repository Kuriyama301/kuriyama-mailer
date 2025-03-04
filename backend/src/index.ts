import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

// 環境変数の読み込み
dotenv.config();

// アプリケーションの初期化
const app = express();
const PORT = process.env.PORT || 5000;

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// データベース接続
connectDB();

// 基本ルート
app.get("/", (req, res) => {
  res.json({ message: "Email AI Assistant API" });
});

// APIルーティング
// 将来的にルーターをインポートして使用
// app.use('/api/users', userRoutes);
// app.use('/api/signatures', signatureRoutes);

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
