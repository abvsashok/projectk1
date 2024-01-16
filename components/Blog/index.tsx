import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
let imagesData = ["/images/service/door-side.jpeg",
  "/images/service/img-1.jpeg",
  "/images/service/img-1.jpeg",
  "/images/service/service3.jpeg",
  "/images/service/img-5.jpeg",
  "/images/service/img-2.jpeg",
  "/images/service/img-3.jpeg",
]

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-8 md:py-20 lg:py-12">
      <div className="container">
        <SectionTitle
          title="Our Latest Works"
          paragraph=""
          center
        />
        <div className="container mx-auto ">
          <div className="-m-1 flex flex-wrap md:-m-2 ">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2  p-1 md:p-2 group">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center w-full transition-transform duration-300 transform group-hover:scale-110"
                  src={imagesData[0]} />
              </div>
              <div className="w-1/2  p-1 md:p-2 group">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                  src={imagesData[1]} />
              </div>
              <div className="w-full p-1 md:p-2 group">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                  src={imagesData[2]} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 group">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                  src={imagesData[3]} />
              </div>
              <div className="w-1/2 p-1 md:p-2 group">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                  src={imagesData[4]} />
              </div>
              <div className="w-1/2 p-1 md:p-2 group">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                  src={imagesData[5]} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
