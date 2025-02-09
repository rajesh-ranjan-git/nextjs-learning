import { v4 as uuid } from "uuid";

type UsersV2 = {
  id: String;
  email: String;
  fullName: String;
  createdAt: Date;
  name: {
    first: String;
    middle?: String;
    last: String;
  };
  status: "active" | "inactive" | "suspended";
  lastLoginAt: String | null;
  profile: {
    avatar: string | null;
    title: String | null;
    department: String | null;
  };
  preferences: {
    language: String;
    timezone: String;
    emailNotifications: boolean;
  };
};

export const GET = async () => {
  const users: UsersV2[] = [
    {
      id: uuid(),
      email: "rajesh@gmail.com",
      fullName: "Rajesh Ranjan",
      createdAt: new Date(),
      name: {
        first: "Rajesh",
        last: "Ranjan",
      },
      status: "active",
      lastLoginAt: "2025-02-09T14:07:51.366Z",
      profile: {
        avatar:
          "https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/410508240_2663811187092994_8520652640450297335_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LvVPc5cpC2sQ7kNvgG3-u9n&_nc_oc=AdhVLidH222hC4oIN6Ja2ojNibC-01_Qo7kr861kFiqW-U-c4IxKVo4fRBhr1TBnh7XvgOUnUsDVNJ3p-3aYjk7g&_nc_zt=23&_nc_ht=scontent.fdel1-2.fna&_nc_gid=AfgPoPcuXDg8ntAZzJaCyHs&oh=00_AYD6UsnMksdrPuiK8QkBlbwsocooHm3qZATD_A3QbY38JQ&oe=67AE7AC0",
        title: "Web Developer",
        department: "Software",
      },
      preferences: {
        language: "en-IN",
        timezone: "IST",
        emailNotifications: true,
      },
    },
    {
      id: uuid(),
      email: "kripanishan@gmail.com",
      fullName: "Kripanidhan Kumar",
      createdAt: new Date(),
      name: {
        first: "Kriupanidhan",
        last: "Kumar",
      },
      status: "active",
      lastLoginAt: "2025-02-09T15:07:51.366Z",
      profile: {
        avatar:
          "https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/410508240_2663811187092994_8520652640450297335_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LvVPc5cpC2sQ7kNvgG3-u9n&_nc_oc=AdhVLidH222hC4oIN6Ja2ojNibC-01_Qo7kr861kFiqW-U-c4IxKVo4fRBhr1TBnh7XvgOUnUsDVNJ3p-3aYjk7g&_nc_zt=23&_nc_ht=scontent.fdel1-2.fna&_nc_gid=AfgPoPcuXDg8ntAZzJaCyHs&oh=00_AYD6UsnMksdrPuiK8QkBlbwsocooHm3qZATD_A3QbY38JQ&oe=67AE7AC0",
        title: "Frontend Developer",
        department: "Software",
      },
      preferences: {
        language: "en-IN",
        timezone: "IST",
        emailNotifications: false,
      },
    },
    {
      id: uuid(),
      email: "rahee@gmail.com",
      fullName: "Rahee Mohanta",
      createdAt: new Date(),
      name: {
        first: "Rahee",
        last: "Mohanta",
      },
      status: "active",
      lastLoginAt: "2025-02-09T14:08:51.366Z",
      profile: {
        avatar:
          "https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/403613197_3546139422318910_2335162697361696495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JzUNJXsloP0Q7kNvgHtQksw&_nc_oc=AdiD06zK28KWRhMWHMwvO7iJwAGIk9KEtnaUqz9Zqfi_VtfQeJLCgo9izz5c1U36Ot9-HUDPxOGdYJHELyPzo57m&_nc_zt=23&_nc_ht=scontent.fdel1-4.fna&_nc_gid=A9elxQhCwg-RJaxLqwHQAYi&oh=00_AYDa_kbx20tgBmdfxM2x8F8DytJyIJkayCZtCGelZMJu4A&oe=67AE8C27",
        title: "Technical Lead",
        department: "Service Desk",
      },
      preferences: {
        language: "en-IN",
        timezone: "IST",
        emailNotifications: true,
      },
    },
    {
      id: uuid(),
      email: "sayantanee@gmail.com",
      fullName: "Sayantanee Mohanta",
      createdAt: new Date(),
      name: {
        first: "Sayantanee",
        last: "Mohanta",
      },
      status: "active",
      lastLoginAt: "2025-02-09T14:07:57.366Z",
      profile: {
        avatar:
          "https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/403613197_3546139422318910_2335162697361696495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JzUNJXsloP0Q7kNvgHtQksw&_nc_oc=AdiD06zK28KWRhMWHMwvO7iJwAGIk9KEtnaUqz9Zqfi_VtfQeJLCgo9izz5c1U36Ot9-HUDPxOGdYJHELyPzo57m&_nc_zt=23&_nc_ht=scontent.fdel1-4.fna&_nc_gid=A9elxQhCwg-RJaxLqwHQAYi&oh=00_AYDa_kbx20tgBmdfxM2x8F8DytJyIJkayCZtCGelZMJu4A&oe=67AE8C27",
        title: "HelpDesk Manager",
        department: "HelpDesk",
      },
      preferences: {
        language: "en-IN",
        timezone: "IST",
        emailNotifications: false,
      },
    },
  ];

  return new Response(JSON.stringify(users), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
