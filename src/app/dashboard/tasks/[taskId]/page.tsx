type PageProps = {
  params: Promise<{ taskId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { taskId } = await params; // <-- THIS IS REQUIRED NOW

  return <h3>Task ID: {taskId}</h3>;
}
