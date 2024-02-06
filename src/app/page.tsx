import UserCard from "@/entity/user/ui/UserCard";
import { DebugToggleButton } from "@/feature/debug/ui/DebugToggleButton";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <main className="border-green p-10">
      <div>
        <div className="p-10 bg-gray-400">TEST</div>
        <UserCard user={{}} />
        <Button />
        <DebugToggleButton />
      </div>
    </main>
  );
}
