import { NextResponse } from "next/server";
import client from "prom-client";

const register = new client.Registry();

client.collectDefaultMetrics({
  register,
});

const httpRequests = new client.Counter({
  name: "nextjs_http_requests_total",
  help: "Total number of HTTP requests",
});

register.registerMetric(httpRequests);

export async function GET() {
  httpRequests.inc();

  const metrics = await register.metrics();

  return new NextResponse(metrics, {
    status: 200,
    headers: {
      "Content-Type": register.contentType,
    },
  });
}
