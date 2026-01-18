import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  scenarios: {
    load_ramping: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "20s", target: 10 },
        { duration: "40s", target: 25 },
        { duration: "20s", target: 0 },
      ],
      gracefulRampDown: "10s",
    },
  },
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<800"],
  },
};

// ✅ k6:
export default function () {
  const res = http.get("https://jsonplaceholder.typicode.com/posts");
  check(res, { "status 200": (r) => r.status === 200 });
  sleep(1);
}
