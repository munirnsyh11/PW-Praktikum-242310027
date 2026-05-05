"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [info, setInfo] = useState<any>(null);

  const getAPIInfo = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3001/api/info");
      setInfo(res.data);
    } catch (err) {
      console.error(err);
      setInfo("Error koneksi ke backend");
    }
  };

  useEffect(() => {
    getAPIInfo();
  }, []);

  return (
    <div>
      <h1>Hello World!!</h1>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
}