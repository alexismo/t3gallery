import { db } from "../server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/bbee7b69-d115-4138-aabb-5652b975b0b2-hr228u.jpg",
  "https://utfs.io/f/87d4e3da-b411-46f1-8e39-9412d82b3e3d-g18dr8.jpg",
  "https://utfs.io/f/4a54e522-3ef1-4103-b278-540f19963f3a-8zplg6.jpg",
  "https://utfs.io/f/2a45a979-cf38-431d-940b-da935f78decf-wgnpop.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, i) => (
          <div key={`${image.id}-${i}`} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
