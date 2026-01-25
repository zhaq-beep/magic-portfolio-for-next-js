export default function Page({
  params,
}: {
  params: { code: string };
}) {
  return (
    <div style={{ padding: 40 }}>
      <h1>QUIZ CODE</h1>
      <p>{params.code}</p>
    </div>
  );
}
