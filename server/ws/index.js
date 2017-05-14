import express from 'express';
import chat from './chat.js';
/* import Your WebSockt
import A from './A';
import B from './B';
*/

const router = express.Router();
router.use('./chat', chat);
/* use your websocket 
router.use('/A', A);
router.use('/B', B);
*/
export default router;
