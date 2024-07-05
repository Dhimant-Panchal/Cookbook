import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Breadcrumbs from '../components/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Recipes",
};

export default function AllRecipes() {
    const recipes = [
        { id: 0, title: "Grilled BBQ Chicken", image: "/grilledbbq.jpg", desc: "Juicy, smoky, and irresistibly delicious - perfect for your next cookout!" },
        { id: 1, title: "Peach Pie With Lattice Crust", image: "/peach-pie.jpg", desc: "Golden, juicy, and perfectly sweet - a delightful summer treat!" },
        { id: 2, title: "Grilled Peruvian Chicken", image: "/peruvian-chicken.jpg", desc: "Succulent, flavorful, and wonderfully spiced - a taste of Peru in every bite!" },
        { id: 3, title: "Cherry Crumble Pie", image: "/cherry-pie.jpg", desc: "Tangy, sweet, and delightfully crunchy - a perfect slice of comfort!" },
        { id: 4, title: "Chicken Tikka Masala", image: "/chicken-tikka.jpg", desc: "Rich, creamy, and bursting with bold spices - an unforgettable culinary delight!" },
        { id: 5, title: "Mediterranean Quinoa Salad", image: "/salad.jpg", desc: "Rich, velvety, and decadently indulgent - a dessert that promises pure bliss with every bite!" },
        { id: 6, title: "Spaghetti Carbonara", image: "/spaghetti-carbonara.jpg", desc: "A classic Italian pasta dish with creamy sauce, pancetta, and Parmesan cheese." },
        { id: 7, title: "Chocolate Lava Cake", image: "/chocolate-lava-cake.jpg", desc: "Decadent individual chocolate cakes with a gooey molten center, perfect for chocolate lovers." }
    ];
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'All Recipes', href: '/recipes' },
    ];
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>All Recipes - My Recipe Book</title>
            </Head>

            <div className="container-fluid p-4">
                <Breadcrumbs items={breadcrumbItems} />
                <h1 className="text-center mb-5 main-title">All Recipes</h1>
                <div className="row">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="col-md-4 mb-4">
                            <div className="card recipe-card h-100">
                                <div className="position-relative" style={{ paddingTop: '75%' }}>
                                    <Image
                                        src={recipe.image}
                                        alt={recipe.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.title}</h5>
                                    <p className="card-text">{recipe.desc}</p>
                                    <Link href={`/recipes/${recipe.id}`} className="btn btn-view-recipe">View Recipe</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}