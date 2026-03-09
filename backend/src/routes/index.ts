import { Router } from 'express';
import stocksRoutes from './stocks.routes';
import aiRoutes from './ai.routes';
import notificationsRoutes from './notifications.routes';
import { stocksController } from '../controllers/stocks.controller';

const router = Router();

// Mount routes
router.use('/stocks', stocksRoutes);
router.use('/ai', aiRoutes);
router.use('/notifications', notificationsRoutes);
router.get('/indices', (req, res) => stocksController.getMarketIndices(req, res));

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;
