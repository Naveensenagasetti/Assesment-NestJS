
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
     <h2 className="text-2xl my-2">This is Home page</h2>
     <Link className="underline" href="/leads">Go to Leads</Link>
    </div>
  );
}
