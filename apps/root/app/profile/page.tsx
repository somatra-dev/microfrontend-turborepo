import UserInfoCard from "@repo/ui/components/user/UserInfoComponent";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Profile</h1>
      <UserInfoCard />
    </main>
  );
}
