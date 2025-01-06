"use client"

import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
    </div>
  );
}
