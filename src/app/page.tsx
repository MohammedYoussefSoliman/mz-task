"use client";
import Container from "@components/Container";
import Paper from "@components/Paper";
import Slider from "@components/Slider";
import Post from "@components/Post";
import InfoColumn from "@components/InfoColumn";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 w-full mb-8">
      <Container spacing={6}>
        <div className="grid grid-flow-col gap-4 mt-8 w-full">
          <Paper
            className="col-span-1 bg-transparent"
            withShadow={false}
            spacing={0}
            transparent
          >
            <Slider />
          </Paper>
          <div className="col-span-5">
            <Post />
          </div>
          <div className="col-span-3">
            <InfoColumn />
          </div>
        </div>
      </Container>
    </main>
  );
}
