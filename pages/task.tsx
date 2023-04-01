import type { NextPage } from "next";
import { useRouter } from "next/router";

const TaskPage: NextPage = () => {
  const router = useRouter();
  const { filter } = router.query;

  return <div>Task {filter}</div>;
};

export default TaskPage;
