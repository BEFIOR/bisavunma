import prisma from "@/lib/prisma";

export async function GET() {
  try {
    console.log('Testing database connection...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL);
    console.log('MYSQL_HOST:', process.env.MYSQL_HOST);
    console.log('MYSQL_USER:', process.env.MYSQL_USER);
    console.log('MYSQL_DATABASE:', process.env.MYSQL_DATABASE);
    
    await prisma.$connect();
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    
    return Response.json({ 
      success: true, 
      message: 'Database connection successful',
      result,
      connectionInfo: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER
      }
    });
  } catch (error: any) {
    console.error('Database connection failed:', error);
    return Response.json({ 
      success: false, 
      error: error.message as any,
      stack: error.stack as any,
      connectionInfo: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        hasDatabaseUrl: !!process.env.DATABASE_URL
      }
    }, { status: 500 });
  }
}
