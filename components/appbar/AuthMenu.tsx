// "use client"; // This is a client component 👈🏽

//Next auth
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

import { ProfileButton } from "./ProfileButton";
import { LoginButton } from "./LoginButton";

export default async function AuthMenu() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <LoginButton />;
  } else {
    // Normalize session values to ensure they are string | undefined
    const userName = session.user?.name ?? undefined;
    const userImage = session.user?.image ?? undefined;
    const userEmail = session.user?.email ?? undefined;
    return (
      <ProfileButton
        userName={userName}
        userImage={userImage}
        userEmail={userEmail}
      />
    );
  }
}
