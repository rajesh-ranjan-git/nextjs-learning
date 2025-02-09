import { headers } from "next/headers";
import { NextRequest } from "next/server";

// export const GET = (request: NextRequest) => {
//   const requestHeaders = new Headers(request.headers);
//   const authorizationHeader = requestHeaders.get("Authorization");

//   console.log("authorizationHeader : ", authorizationHeader);
//   return new Response("Profile API Data");
// };

// export const GET = async (request: NextRequest) => {
//   const headersList = await headers();
//   const authorizationHeader = headersList.get("Authorization");

//   console.log("authorizationHeader : ", authorizationHeader);
//   return new Response("Profile API Data");
// };

export const GET = async (request: NextRequest) => {
  const headersList = await headers();
  const authorizationHeader = headersList.get("Authorization");

  console.log("authorizationHeader : ", authorizationHeader);
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
