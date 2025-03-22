import Card from "@/components/Card";
import Link from "next/link";

const ArchivedPage = () => {
  return (
    <Card>
      <div>Arvchived Notifications</div>
      <Link href="/dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedPage;
