import Card from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link href="/complexDashboard">Default Notifications</Link>
    </Card>
  );
}
