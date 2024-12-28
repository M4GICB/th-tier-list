//Next import
import { redirect } from "next/navigation";

//Next auth
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";
import { checkAdmin } from "@/lib/auth/admins";

//Components
import { AuthCard } from "@/components/auth/AuthCard";
import { Unauthorized } from "@/components/auth/Unauthorized";

export default async function EditPage() {
  const session = await getServerSession(authOptions);

  //If there is a session the user is redirected to /
  if (!session) {
    redirect("/auth");
  }

  const adminFlag = await checkAdmin(session?.user?.email);
  if (!adminFlag) {
    return <Unauthorized back={"/"} />;
  }

  return (
    <section className="md:1/4 mx-auto flex flex-col gap-3 h-[100vh] items-center justify-center">
      Edit Page - Hello World
    </section>
  );
}
