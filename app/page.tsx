import { Navbar, Sidebar } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="p-4 sm:ml-64">
        <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos
            explicabo odit quibusdam, aut ea quas? Laudantium aperiam
            exercitationem dolorem obcaecati saepe nulla esse minima, aliquam
            fuga cumque sunt dolorum quam eius voluptas fugit facere ducimus
            praesentium in animi dolore voluptatem dolores! Dicta iure minima a,
            rerum adipisci eligendi pariatur, ab illo neque velit facilis quae,
            voluptate sed voluptatum molestiae sequi unde culpa? Aliquam aliquid
            accusamus voluptates sequi numquam dolore aut, perspiciatis quae
            adipisci expedita aspernatur perferendis sunt. Omnis possimus
            tenetur harum nisi debitis. Repudiandae, animi nam placeat commodi
            nisi accusamus distinctio ratione reprehenderit ex nihil! Blanditiis
            dicta minus quia.
          </p>
        </div>
      </main>
    </div>
  );
}
