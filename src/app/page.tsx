import { Button } from "@/components/ui/button";

const state = true;

export default function Home() {
  return (
    <div className="">
    <p className="text-3xl font-bold text-indigo-500">
      Hello World
    </p>
    <Button variant="outline">
      Click me
      </Button>
    </div>
  );
}
