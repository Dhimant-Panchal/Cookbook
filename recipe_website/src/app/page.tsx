import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className="container-fluid p-4">
      <h1 className="text-center mb-5 main-title">My Recipe Book 📖</h1>
      <div className="row">

        <div className="col-md-7">
          <div className="card mb-4 recipe-card">
            <div className="card-body">
              <div className="position-relative">
                <span className="badge featured-badge position-absolute top-0 start-0 m-2 z-1">Featured Recipe ✨</span>
                <div className="position-relative w-100" style={{ paddingTop: '30%' }}>
                  <Image
                    src="/grilledbbq.jpg"
                    alt="Featured Recipe"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded img-fluid"
                  />
                </div>

                <div className="mt-3">
                  <h2 className="card-title">Grilled BBQ Chicken</h2>
                  <p className="card-text">Juicy, smoky, and irresistibly delicious - perfect for your next cookout!</p>
                  <Link href="/recipes/0" className="btn btn-view-recipe">View Recipe</Link>
                </div>

              </div>
            </div>
          </div>
          <div className="card mb-4 recipe-card">
            <div className="card-body">
              <div className="position-relative">
                <span className="badge featured-badge position-absolute top-0 start-0 m-2 z-1">Loved ❤️</span>
                <div className="position-relative w-100" style={{ paddingTop: '27%' }}>
                  <Image
                    src="/salad.jpg"
                    alt="Featured Recipe"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded img-fluid"
                  />
                </div>

                <div className="mt-3">
                  <h2 className="card-title">Mediterranean Quinoa Salad</h2>
                  <p className="card-text">Rich, velvety, and decadently indulgent - a dessert that promises pure bliss with every bite!</p>
                  <Link href="/recipes/5" className="btn btn-view-recipe">View Recipe</Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <h3 className="mb-3 latest-recipes-title">Latest Recipes</h3>
          {[
            { id: 1, title: "Lattice Crust Peach Pie ", image: "/peach-pie.jpg", desc: "Golden, juicy, and perfectly sweet - a delightful summer treat!" },
            { id: 2, title: "Grilled Peruvian Chicken", image: "/peruvian-chicken.jpg", desc: "Succulent, flavorful, and wonderfully spiced - a taste of Peru in every bite!" },
            { id: 3, title: "Cherry Crumble Pie", image: "/cherry-pie.jpg", desc: "Tangy, sweet, and delightfully crunchy - a perfect slice of comfort!" },
            { id: 4, title: "Chicken Tikka Masala", image: "/chicken-tikka.jpg", desc: "Rich, creamy, and bursting with bold spices - an unforgettable culinary delight!" },
          ].map((recipe) => (
            <div key={recipe.id} className="card mb-3 recipe-card">
              <div className="row g-0">
                <div className="col-4">
                  <div className="position-relative w-100" style={{ paddingTop: '100%' }}>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      sizes="(max-width: 768px) 25vw, 100px"
                      style={{ objectFit: 'cover' }}
                      className="rounded img-fluid"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6 className="card-text">{recipe.desc}</h6>
                    <Link href={`/recipes/${recipe.id}`} className="btn btn-sm btn-view-recipe">View</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <Link href="/recipes" className="btn btn-lg btn-view-recipe">
          View All Recipes
        </Link>
      </div>
    </div>
  </>
  );
}