import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sotion | Preview",
  description:
    "This is just a preview of any published documents/notes created on sotion by a user.",
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
