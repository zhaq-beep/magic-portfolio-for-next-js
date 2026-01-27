export default function Page({
  params,
}: {
  params: { code: string };
}) {
  return <h1>QUIZ CODE: {params.code}</h1>;
}
