export const metadata = {
  title: "Sanity Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="studio-layout">{children}</div>;
}
