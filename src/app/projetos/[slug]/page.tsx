import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        Projeto: {slug}
      </h1>

      <p className="mt-4 text-muted-foreground">
        Página do projeto em construção.
      </p>
    </main>
  );
}