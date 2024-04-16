import Image from "next/image";

export default function page() {
  return (
    <>
      <div className=" container py-16 ">
        <h2 className="my-10 text-center text-4xl font-extrabold text-slate-700">
          About
        </h2>
        <section>
          <h3 className="text-2xl font-bold mb-4">Tentang Lorem</h3>
          <summary className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab
              fugit culpa, molestiae, libero omnis alias ea consequatur in
              inventore nulla natus vero! Ut exercitationem, animi eum
              voluptates pariatur sapiente veritatis, laboriosam, dolor
              dignissimos tempora esse cumque officia qui. Mollitia dicta
              repellat quas facere, quidem cupiditate repudiandae dolorum
              inventore nobis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab
              fugit culpa, molestiae, libero omnis alias ea consequatur in
              inventore nulla natus vero! Ut exercitationem, animi eum
              voluptates pariatur sapiente veritatis, laboriosam, dolor
              dignissimos tempora esse cumque officia qui. Mollitia dicta
              repellat quas facere, quidem cupiditate repudiandae dolorum
              inventore nobis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab
              fugit culpa, molestiae, libero omnis alias ea consequatur in
              inventore nulla natus vero! Ut exercitationem, animi eum
              voluptates pariatur sapiente veritatis, laboriosam, dolor
              dignissimos tempora esse cumque officia qui. Mollitia dicta
              repellat quas facere, quidem cupiditate repudiandae dolorum
              inventore nobis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab
              fugit culpa, molestiae, libero omnis alias ea consequatur in
              inventore nulla natus vero! Ut exercitationem, animi eum
              voluptates pariatur sapiente veritatis, laboriosam, dolor
              dignissimos tempora esse cumque officia qui. Mollitia dicta
              repellat quas facere, quidem cupiditate repudiandae dolorum
              inventore nobis.
            </p>
          </summary>
        </section>
        <section className="mt-10">
          <h3 className="text-2xl font-bold">
            Kenapa Harus Memilih lorem ipsum
          </h3>
          <div className="flex  flex-col lg:flex-row gap-8 mt-10 justify-between">
            <div className="flex justify-center items-center ">
              <Image
                className="rounded-md shadow-md"
                src="https://picsum.photos/id/1/250/200"
                width={900}
                alt="AboutMe"
                height={300}
              />
            </div>
            <div className=" flex flex-col gap-6 items-center  justify-center lg:w-3/5">
              <div className="">
                <h2 className="text-2xl font-bold">lorem ipsum</h2>
              </div>
              <p className="font-light ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia facilis debitis, quia id harum quasi dolores, molestias
                vero voluptas asperiores neque quos beatae, totam iusto
                veritatis unde eum? Ducimus repudiandae perferendis placeat
                sequi similique, dolorem ex ad labore at facere, fugiat
                blanditiis reprehenderit iure voluptas voluptatum numquam, dicta
                possimus unde. Sequi, ipsa molestiae. Omnis hic corporis
                consectetur. Dolor eius qui, similique quaerat nihil repudiandae
                fugiat consequuntur labore magni accusamus laboriosam.
              </p>
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row-reverse gap-8 mt-10 justify-between  ">
            <div className="flex justify-center items-center ">
              <Image
                className="rounded-md shadow-md"
                src="https://picsum.photos/id/2/250/200"
                width={900}
                alt="AboutMe"
                height={300}
              />
            </div>
            <div className=" flex flex-col gap-6  justify-center lg:w-3/5">
              <div className="">
                <h2 className="text-2xl font-bold ">Lorem ipsum dolor sit.</h2>
              </div>
              <p className="font-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                blanditiis temporibus provident ab facere voluptatum cum
                voluptate? Harum reiciendis, natus, dolor, in magni atque
                dolores deserunt neque ipsum tenetur quibusdam recusandae illo
                quaerat. Qui hic eius, ex maiores laboriosam assumenda odit
                voluptatum, esse ipsam quis ullam sit repellendus fugit natus
                dignissimos incidunt. Ipsam, aperiam quos possimus dignissimos
                hic adipisci voluptatem in? Ratione adipisci fuga eaque veniam
                inventore odio dolores eligendi?
              </p>
            </div>
          </div>
          <div className="flex  flex-col lg:flex-row gap-8 mt-10 justify-between  ">
            <div className="flex justify-center items-center ">
              <Image
                className="rounded-md shadow-md"
                src="https://picsum.photos/id/3/250/200"
                width={900}
                alt="AboutMe"
                height={300}
              />
            </div>
            <div className=" flex mb-10 flex-col gap-6  justify-center lg:w-3/5">
              <div className="">
                <h2 className="text-2xl font-bold ">Lorem, ipsum</h2>
              </div>
              <p className="font-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus dicta tenetur repudiandae quod non. Rerum deserunt
                natus facere possimus deleniti recusandae perspiciatis. Ipsum,
                voluptas. Suscipit, incidunt. Temporibus vel voluptate,
                assumenda error a nemo hic vero maxime tempora? Iure nam,
                perferendis suscipit totam corrupti, aliquid placeat magni aut
                soluta, laborum velit blanditiis laudantium. Consectetur et, eum
                ipsam veniam laboriosam reprehenderit rem ut voluptates unde
                neque quas accusantium a officiis explicabo error!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
