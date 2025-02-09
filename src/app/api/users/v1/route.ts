import { redirect } from "next/navigation";
import { v4 as uuid } from "uuid";

type UsersV1 = {
  id: String;
  email: String;
  fullName: String;
  createdAt: Date;
};

export const GET = async () => {
  redirect("/api/users/v2");
  const users: UsersV1[] = [
    {
      id: uuid(),
      email: "rajesh@gmail.com",
      fullName: "Rajesh Ranjan",
      createdAt: new Date(),
    },
    {
      id: uuid(),
      email: "kripanishan@gmail.com",
      fullName: "Kripanidhan Kumar",
      createdAt: new Date(),
    },
    {
      id: uuid(),
      email: "rahee@gmail.com",
      fullName: "Rahee Mohanta",
      createdAt: new Date(),
    },
    {
      id: uuid(),
      email: "sayantanee@gmail.com",
      fullName: "Sayantanee Mohanta",
      createdAt: new Date(),
    },
  ];

  return new Response(JSON.stringify(users), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
