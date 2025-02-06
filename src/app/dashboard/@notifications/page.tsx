import Card from "@/components/card/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link
        href={"/dashboard/archived"}
        className="hover:border-white bg-white hover:bg-black p-2 border border-black rounded-lg text-black hover:text-white transition-all ease-in-out"
      >
        Archived
      </Link>
    </Card>
  );
};

export default Notifications;
