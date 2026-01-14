export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-6 md:py-10">
      {children}
    </section>
  );
}
