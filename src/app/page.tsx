import Container from "@components/Container";
import Paper from "@components/Paper";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 w-full">
      <Container spacing={6}>
        <div className="grid grid-flow-col gap-4 mt-8 w-full">
          <Paper className="col-span-5" spacing={0}>
            01
          </Paper>
          <Paper className="col-span-2">02</Paper>
        </div>
      </Container>
      <h2 className={`mb-3 text-2xl font-semibold`}>Mazaady task</h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </main>
  );
}
