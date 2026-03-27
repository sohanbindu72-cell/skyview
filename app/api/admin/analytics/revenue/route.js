import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Transaction from '@/lib/models/Transaction';

export async function GET() {
  try {
    await connectDB();
    
    // Aggregate revenue by month for the last 12 months
    const now = new Date();
    const twelveMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 11, 1);

    const revenueData = await Transaction.aggregate([
      {
        $match: {
          createdAt: { $gte: twelveMonthsAgo },
          status: 'Succeeded',
          type: 'Payment'
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          totalRevenue: { $sum: "$amount" }
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 }
      }
    ]);

    // Format for the chart (labels: "Month", value: revenue)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedData = revenueData.map(item => ({
      name: `${months[item._id.month - 1]} ${item._id.year}`,
      total: item.totalRevenue
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Revenue Analytics Error:', error);
    return NextResponse.json({ message: 'Failed to fetch revenue analytics' }, { status: 500 });
  }
}
