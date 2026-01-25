export default function QuizPage({
  params,
}: {
  params: { code: string };
}) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Quiz: {params.code}</h1>
    </div>
  );
}
