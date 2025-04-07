export default async (req, res) => {
  try {
    // 替换为你的 Cloudflare Worker 地址
    const workerUrl = "https://fancy-base-39c4.tian1119992.workers.dev"; 

    // 将请求转发到 Cloudflare Worker
    const response = await fetch(workerUrl, {
      method: req.method,
      headers: req.headers,
      body: req.body
    });

    // 将 Worker 的响应返回给前端
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).send("代理请求失败");
  }
};