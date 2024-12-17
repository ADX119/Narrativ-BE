import React from 'react'
import Image from "../components/Image"
import PostMenuAction from '../components/PostMenuAction';
import { Link, Links } from 'react-router-dom';
import Search from '../components/Search';
import Comments from '../components/Comments';
function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/*detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            et.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Adi</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            molestias, maiores aut ab tempore consectetur quidem corrupti eaque
            repellat aspernatur.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/*contents */}
      <div className="flex flex-col md:flex-row gap-8">
        {/*text*/}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ratione reiciendis vitae accusantium ex error officiis id et est
            ducimus. Vitae, sed! Ex quidem eveniet eius tempora quos, omnis
            dolor quisquam eum distinctio perferendis explicabo esse nostrum
            laboriosam officia doloribus error corrupti vitae ullam sed? Quidem
            et iste earum possimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus atque sed sequi, harum unde quod ratione enim
            asperiores nihil excepturi, repellendus temporibus officia soluta
            architecto, molestias exercitationem nesciunt? Tempora provident
            veniam soluta totam doloremque dolorum, maiores libero. Ratione
            eaque praesentium possimus deserunt excepturi natus harum. Nostrum
            repellendus facere omnis, quibusdam modi sapiente sit tempore ex at
            officia consectetur voluptates reprehenderit quasi laborum sint,
            ratione ea nobis id quis doloribus fugiat. Explicabo veritatis
            dignissimos consequatur reiciendis est voluptates corporis nam
            officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis rem illum praesentium odit quisquam magnam commodi omnis
            nostrum voluptate eaque, perspiciatis corporis pariatur natus culpa
            exercitationem magni molestias deserunt nobis similique? Qui aliquid
            dolor beatae fugiat quisquam deleniti accusamus enim. Nulla aperiam
            et cupiditate perspiciatis qui modi hic corporis? Optio ad hic
            dolorem dolorum eveniet amet ipsam officia est beatae, voluptatibus
            eos explicabo assumenda facilis placeat. Sequi saepe suscipit
            reiciendis! Quis illo culpa fuga, natus sunt odio soluta animi a qui
            repudiandae corporis est suscipit officia obcaecati dolorum!
            Recusandae amet adipisci facere quae sit excepturi odio quos nisi
            impedit in? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Minima aliquam cupiditate nisi possimus! Neque dolorum facere
            dignissimos veritatis consequatur! Odio ipsam officiis rem corrupti
            quaerat totam dolorum unde eius quia nam est, aliquam eligendi!
            Voluptate accusamus excepturi incidunt aliquam aut distinctio
            architecto consequuntur debitis quidem optio! Fuga ratione nihil
            eligendi accusantium placeat nulla quis fugit, laudantium voluptate
            maiores ipsa aspernatur dignissimos, magnam obcaecati nemo, quam
            cupiditate enim voluptas. Iure, unde recusandae odit quam itaque
            dolor suscipit ratione. Sint et in sed quaerat dolorum inventore
            numquam aliquam blanditiis sit laudantium! Quasi nostrum placeat eos
            autem enim accusamus inventore alias fugiat neque quam aut nam a
            quas obcaecati ipsum dolores, cupiditate reiciendis nobis adipisci
            vel possimus similique! Ex, nihil veritatis. Expedita, porro
            voluptatibus alias voluptate assumenda beatae rem quod consequuntur
            fuga aspernatur sequi ullam architecto vero unde ipsum rerum
            accusantium deleniti cumque! Itaque magnam harum quae hic fugit
            explicabo in modi voluptas optio libero autem illum incidunt sequi,
            praesentium totam esse soluta beatae commodi consequuntur, quaerat
            minima? Accusamus aut deserunt facilis voluptatem provident a
            explicabo deleniti quasi cupiditate quae, eius natus quas ut
            repellat debitis aliquid veniam reiciendis tempora repudiandae
            expedita error, repellendus tenetur laudantium. Cupiditate nobis,
            itaque quas consequatur, voluptatibus corporis sunt excepturi
            dolorem provident nam eius fugiat modi quia aliquid corrupti illo.
            Blanditiis velit, labore eum ratione iure commodi quo tempora
            consequatur illum eveniet eius. Eum enim rerum alias dolorem soluta
            quibusdam odio impedit cumque illo, quod, tempore perspiciatis nisi
            nobis est ullam error quo earum odit? Tempora id ullam repellat
            obcaecati alias doloremque perspiciatis nemo totam dignissimos
            repellendus illum sit molestias tempore maxime assumenda, nihil
            neque suscipit magnam optio vero iste porro eius consequatur?
            Aliquam eos qui tempore! Expedita, officia, nihil praesentium ab
            nostrum non perferendis autem sapiente debitis, dolorum atque
            voluptate? Vero ducimus magni saepe facilis aliquid amet aspernatur
            omnis fuga atque rerum alias dolores ut nam delectus quibusdam
            deleniti officia natus, maxime labore consequuntur nesciunt adipisci
            ratione obcaecati numquam. Molestias, numquam delectus. Asperiores
            assumenda sapiente ad molestias exercitationem ea aspernatur
            reprehenderit? Natus quibusdam in placeat quos fuga quaerat
            asperiores dignissimos accusamus, deserunt ullam doloribus culpa
            amet delectus est minima numquam laudantium distinctio. Magni
            tempore rerum, laborum enim officia laudantium itaque similique sint
            possimus quae nesciunt velit cupiditate animi vero facere, culpa
            nulla earum magnam commodi accusamus veritatis libero. Dicta ut
            pariatur sed voluptatum atque dolore vero sint assumenda excepturi
            quaerat, earum numquam vitae! Dolorum officia ipsam culpa impedit
            cupiditate vitae laboriosam tempora exercitationem deserunt, aut,
            eius omnis repudiandae dolore. Aspernatur, similique? At et, nostrum
            libero deleniti nobis harum, sequi molestias ea, officia similique
            odio minima? Aspernatur illo ab dolore nobis, corporis voluptatum
            distinctio deleniti dolorum esse quas pariatur aperiam quaerat
            cupiditate nam dolorem beatae. Eius, nisi explicabo alias vel illum
            molestias nam omnis nesciunt sit! Molestiae nihil nam neque ullam
            provident laborum distinctio illum beatae voluptatum impedit autem
            at aspernatur voluptatem nostrum exercitationem cupiditate, sint
            saepe aliquam eaque facilis sapiente nesciunt! Suscipit, ratione
            excepturi velit iste corrupti esse quidem aliquam nam perferendis
            quas, natus itaque in modi!
          </p>
        </div>
        {/*menu*/}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-semibold">Author</h1>
          <div className='flex flex-col gap-4'>
          <div className="flex items-center gap-8">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
              />
            <Link className='text-blue-800'>Adi</Link>
              </div>
            <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetu</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
          </div>
            </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-semibold">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web design
            </Link>
            <Link className="underline" to="/">
              Developing
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-semibold">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
}

export default SinglePostPage