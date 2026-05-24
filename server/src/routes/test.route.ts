// import express from 'express';
// import { generationQueue } from '../queues/generation.queue.js';

// const router = express.Router();

// router.post("/add-job", async (req, res) => {
//     const job = await generationQueue.add("generate-paper",
//         {
//             topic: "Science",
//             questions: 5,
//         }
//     );

//     res.json({
//         success: true,
//         jobId: job.id,
//     })
// })

// export default router;
