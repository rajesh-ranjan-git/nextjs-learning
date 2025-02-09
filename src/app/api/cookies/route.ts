import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// export const GET = async (request: NextRequest) => {
//   const theme = request.cookies.get("theme");

//   console.log("theme : ", theme);
//   return new Response("<h1>Profile API Data</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//       "Set-Cookie": "theme=dark",
//     },
//   });
// };

export const GET = async (request: NextRequest) => {
  const cookieStore = await cookies();

  cookieStore.set("resultsPerPage", "20");

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
};
