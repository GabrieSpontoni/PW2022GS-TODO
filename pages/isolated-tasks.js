import { useEffect } from "react";
import useAuth from "../src/hook/auth";

import IsoTasks from "../src/app/components/isolated-tasks/IsolatedTasks";

export default function IsolatedTasks() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!user && !loading) {
      window.location.href = "/";
    }
  });
  return <IsoTasks />;
}
