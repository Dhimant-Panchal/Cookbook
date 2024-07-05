import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/breadcrumbs';
import { Metadata } from 'next';


const recipe = [
    {
        title: "Grilled BBQ Chicken",
        image: "/grilledbbq.jpg",
        description: "Juicy, smoky, and irresistibly delicious - perfect for your next cookout!",
        ingredients: [
            "4 boneless & skinless chicken thighs or breats",
            "1 teaspoon Salt, Black pepper, garlic powder, onion powder and paparika",
            "1 cup ketchup",
            "1 / 4 cup apple cider vinegar",
            "1 / 4 cup brown sugar",
            "2 tablespoons honey",
            "2 tablespoons Worcestershire sauce",
            "1 tablespoon soy sauce",
            "1 teaspoon mustard(yellow or Dijon)",
            "1 teaspoon smoked paprika",
            "1 / 2 teaspoon garlic powder",
            "1 / 2 teaspoon onion powder",
            "1 / 4 teaspoon cayenne pepper(optional, for a bit of heat)",
            "Salt and pepper to taste",
            "Fresh parsley, chopped",
            "Lemon wedges"
        ],
        instructions: [
            `Prepare the Chicken:

            Rinse the chicken breasts and pat them dry with paper towels.
            Season both sides of the chicken with salt, pepper, garlic powder, onion powder, and paprika.`,
            `Make the BBQ Sauce:

            In a medium saucepan, combine ketchup, apple cider vinegar, brown sugar, honey, Worcestershire sauce, soy sauce, mustard, smoked paprika, garlic powder, onion powder, and cayenne pepper.
            Bring the mixture to a simmer over medium heat, stirring occasionally.
            Reduce the heat to low and let the sauce simmer for about 15-20 minutes until it thickens slightly.
            Adjust seasoning with salt and pepper to taste.`,
            `Grill the Chicken:

            Preheat your grill to medium- high heat.
            Place the seasoned chicken on the grill and cook for about 6 - 7 minutes on each side, or until the internal temperature reaches 165°F(75°C).
            During the last few minutes of grilling, generously brush the chicken with the BBQ sauce on both sides.`,
            `Serve:

            Once cooked, remove the chicken from the grill and let it rest for a few minutes.
            Garnish with chopped fresh parsley and serve with lemon wedges on the side.
            Enjoy your BBQ grilled chicken!`

        ],
    },
    {
        title: "Lattice Crust Peach Pie", image: "/peach-pie.jpg", description: "Golden, juicy, and perfectly sweet - a delightful summer treat!",
        ingredients: ["2 1/2 cups all-purpose flour",
            "1 teaspoon salt",
            "1 tablespoon sugar",
            "1 cup and 2 tablespoons of unsalted butter",
            "1 / 4 to 1 / 2 cup ice water",
            "5-6 cups fresh peaches, peeled, pitted, and sliced (about 6-8 peaches)",
            "3 / 4 cup granulated sugar",
            "1 / 4 cup brown sugar",
            "1 / 4 cup cornstarch",
            "1 tablespoon lemon juice",
            "1 / 2 teaspoon ground cinnamon",
            "1 / 4 teaspoon ground nutmeg",
            "1 teaspoon vanilla extract",
            "1 egg, beaten (for egg wash)",
            "1 tablespoon sugar(for sprinkling)"
        ],
        instructions: [`Prepare the Crust:
                Combine Dry Ingredients: In a large bowl, mix the flour, salt, and sugar.
                Cut in the Butter: Add the chilled butter pieces to the flour mixture. Use a pastry cutter or your fingers to work the butter into the flour until the mixture resembles coarse crumbs.
                Add Ice Water: Gradually add ice water, one tablespoon at a time, and mix until the dough comes together. Divide the dough into two equal parts, shape each into a disk, wrap in plastic wrap, and refrigerate for at least 1 hour.`, `Prepare the Filling:
                Mix Filling Ingredients: In a large bowl, combine the sliced peaches, granulated sugar, brown sugar, cornstarch, lemon juice, cinnamon, nutmeg, and vanilla extract. Mix well and let sit for about 10 minutes.`, `Assemble the Pie:
                Preheat Oven: Preheat your oven to 425°F (220°C).
                Roll Out Dough: On a floured surface, roll out one disk of dough into a 12-inch circle. Fit it into a 9-inch pie dish, leaving some overhang.
                Add Filling: Pour the peach filling into the crust and dot with small pieces of butter.
                Create Lattice Crust: Roll out the second disk of dough into a 12-inch circle. Cut into 1/2-inch-wide strips. Lay strips over the filling in a lattice pattern, weaving them over and under each other. Trim excess dough and crimp the edges to seal.
                Egg Wash and Sugar: Brush the lattice crust with beaten egg and sprinkle with sugar.`, `Bake the Pie:
                Bake: Place the pie on a baking sheet to catch any drips. Bake for 20 minutes at 425°F (220°C). Then, reduce the oven temperature to 375°F (190°C) and bake for an additional 30-35 minutes, or until the crust is golden brown and the filling is bubbling.
                Cool: Allow the pie to cool for at least 2 hours before serving to let the filling set.`, `Enjoy your homemade lattice crust peach pie!`]
    },
    {
        title: "Grilled Peruvian Chicken", image: "/peruvian-chicken.jpg", description: "Succulent, flavorful, and wonderfully spiced - a taste of Peru in every bite!",
        ingredients: ["1 / 4 cup olive oil",
            "1 / 4 cup soy sauce",
            "1 / 4 cup lime juice(about 2 - 3 limes)",
            "1 / 4 cup white vinegar",
            "6 cloves garlic, minced",
            "2 tablespoons ají amarillo paste(or 1 tablespoon chili powder as a substitute)",
            "1 tablespoon ground cumin",
            "1 tablespoon paprika",
            "1 tablespoon dried oregano",
            "1 teaspoon salt",
            "1 teaspoon black pepper",
            "4 boneless, skinless chicken breasts(or a whole chicken, spatchcocked)",
            "Lime wedges(for serving)",
            "Fresh cilantro, chopped(for garnish)"],
        instructions: [`Prepare the Marinade
            In a bowl, whisk together olive oil, soy sauce, lime juice, white vinegar, minced garlic, ají amarillo paste, ground cumin, paprika, dried oregano, salt, and black pepper.`, `Marinate the Chicken
            Place the chicken in a large resealable plastic bag or a shallow dish. Pour the marinade over the chicken, ensuring it is well-coated. Seal the bag or cover the dish and refrigerate for at least 4 hours, preferably overnight.`, `Grill the Chicken
            Preheat the grill to medium-high heat.
            Remove the chicken from the marinade, allowing any excess to drip off. Discard the marinade.
            Grill the chicken for about 6-7 minutes per side, or until the internal temperature reaches 165°F (75°C) and the chicken is nicely charred.`, `Serve
            Remove the chicken from the grill and let it rest for a few minutes.
            Serve the grilled chicken with lime wedges and garnish with chopped fresh cilantro.`]
    },
    {
        title: "Cherry Crumble Pie", image: "/cherry-pie.jpg", description: "Tangy, sweet, and delightfully crunchy - a perfect slice of comfort!",
        ingredients: ["1 pie crust (store-bought or homemade)",
            "4 cups pitted fresh or frozen cherries(thawed and drained if using frozen)",
            "3/4 cup granulated sugar",
            "1/4 cup cornstarch",
            "1 tablespoon lemon juice",
            "1 teaspoon vanilla extract",
            "1 cup all-purpose flour",
            "1/2 cup rolled oats",
            "2/3 cup brown sugar, packed",
            "1/2 teaspoon ground cinnamon",
            "1/4 teaspoon salt",
            "1/2 cup unsalted butter, melted"],
        instructions: [`Prepare the Pie Crust
            Preheat your oven to 375°F (190°C).
            Roll out the pie crust and fit it into a 9-inch pie dish. Trim any excess dough and crimp the edges as desired.`,
            `
            Prepare the Cherry Filling
            In a large bowl, combine the pitted cherries, granulated sugar, cornstarch, lemon juice, and vanilla extract. Mix well until the cherries are evenly coated.`,
            `Make the Crumble Topping
            In a medium bowl, mix together the flour, rolled oats, brown sugar, ground cinnamon, and salt.
            Pour the melted butter over the dry ingredients and stir until the mixture forms coarse crumbs.`,
            `Assemble the Pie
            Pour the cherry filling into the prepared pie crust, spreading it out evenly.
            Sprinkle the crumble topping over the cherries, ensuring it is evenly distributed.`,
            `Bake the Pie
            Place the pie on a baking sheet to catch any drips and bake in the preheated oven for 45-50 minutes, or until the topping is golden brown and the filling is bubbly.`,
            `Cool and Serve
            Remove the pie from the oven and let it cool on a wire rack for at least 2 hours to set the filling.
            Serve the cherry crumble pie warm or at room temperature, optionally with a scoop of vanilla ice cream or a dollop of whipped cream.`]
    },
    {
        title: "Chicken Tikka Masala",
        image: "/chicken-tikka.jpg",
        description: "Rich, creamy, and bursting with bold spices - an unforgettable culinary delight!",
        ingredients: [
            "2 lbs (about 900g) chicken breast, diced",
            "1 cup plain yogurt",
            "2 tbsp lemon juice",
            "2 tsp ground cumin",
            "2 tsp paprika",
            "1 tsp ground turmeric",
            "1 tsp ground coriander",
            "1 tsp garam masala",
            "1/2 tsp cayenne pepper (adjust to taste)",
            "Salt and freshly ground black pepper, to taste",
            "2 tbsp unsalted butter",
            "1 large onion, finely chopped",
            "3 cloves garlic, minced",
            "1 inch (about 2.5 cm) ginger, grated or finely minced",
            "1 cup tomato puree",
            "1 cup heavy cream",
            "Fresh cilantro (coriander) leaves, chopped, for garnish"
        ],
        instructions: [
            "In a large bowl, combine plain yogurt, lemon juice, ground cumin, paprika, ground turmeric, ground coriander, garam masala, cayenne pepper, salt, and black pepper. Add diced chicken breast and toss to coat evenly. Cover and refrigerate for at least 1 hour, or ideally overnight, to marinate.",
            "In a large skillet or frying pan, melt unsalted butter over medium heat. Add finely chopped onion and cook, stirring occasionally, until translucent and starting to soften, about 5-7 minutes.",
            "Add minced garlic and grated ginger to the skillet. Cook, stirring constantly, for 1-2 minutes until fragrant.",
            "Increase heat to medium-high and add the marinated chicken to the skillet, along with any excess marinade. Cook, stirring occasionally, until the chicken is browned and cooked through, about 8-10 minutes.",
            "Reduce heat to medium-low. Add tomato puree to the skillet and stir well to combine with the chicken and spices. Simmer for 5 minutes, stirring occasionally.",
            "Pour in heavy cream, stirring constantly to incorporate it into the sauce. Simmer gently for another 5-7 minutes until the sauce has thickened slightly.",
            "Taste and adjust seasoning with salt and pepper if needed. Remove from heat.",
            "Garnish with chopped fresh cilantro (coriander) leaves before serving. Enjoy hot with basmati rice, naan bread, or your favorite accompaniments."
        ]
    },
    {
        title: "Mediterranean Quinoa Salad",
        image: "/salad.jpg",
        description: "Fresh, vibrant, and packed with Mediterranean flavors - a nutritious and satisfying meal!",
        ingredients: [
            "1 cup quinoa, rinsed thoroughly",
            "2 cups water or vegetable broth",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/2 red onion, thinly sliced",
            "1/2 cup Kalamata olives, pitted and halved",
            "1/2 cup crumbled feta cheese",
            "1/4 cup fresh parsley, chopped",
            "1/4 cup fresh mint, chopped",
            "Juice of 1 lemon",
            "3 tbsp extra virgin olive oil",
            "Salt and freshly ground black pepper, to taste"
        ],
        instructions: [
            "In a medium saucepan, combine rinsed quinoa and water or vegetable broth. Bring to a boil over high heat.",
            "Reduce heat to low, cover, and simmer for 15 minutes or until quinoa is cooked and liquid is absorbed. Remove from heat and let stand, covered, for 5 minutes. Fluff quinoa with a fork and transfer to a large mixing bowl to cool.",
            "To the bowl of quinoa, add halved cherry tomatoes, diced cucumber, thinly sliced red onion, halved Kalamata olives, crumbled feta cheese, chopped fresh parsley, and chopped fresh mint.",
            "In a small bowl, whisk together freshly squeezed lemon juice, extra virgin olive oil, salt, and black pepper.",
            "Pour the dressing over the quinoa salad ingredients in the mixing bowl. Toss gently to combine, ensuring all ingredients are evenly coated with the dressing.",
            "Taste and adjust seasoning with additional salt and black pepper if needed.",
            "Serve Mediterranean Quinoa Salad immediately at room temperature, or chill in the refrigerator for 1 hour before serving to allow flavors to meld.",
            "Enjoy as a light and refreshing main dish or side salad."
        ]
    },
    {
        title: "Spaghetti Carbonara",
        image: "/spaghetti-carbonara.jpg",
        description: "A classic Italian pasta dish with creamy sauce, pancetta, and Parmesan cheese.",
        ingredients: [
            "12 oz (about 340g) spaghetti",
            "4 oz (about 115g) pancetta or guanciale, diced",
            "3 large eggs",
            "1 cup grated Parmesan cheese, plus extra for serving",
            "Freshly ground black pepper, to taste",
            "Salt, to taste"
        ],
        instructions: [
            "Cook spaghetti in a large pot of salted boiling water until al dente, according to package instructions. Reserve 1 cup of pasta water, then drain spaghetti.",
            "In a large skillet, cook diced pancetta over medium heat until crispy and golden brown, about 5-7 minutes. Remove skillet from heat.",
            "In a bowl, whisk together eggs, grated Parmesan cheese, and a generous amount of freshly ground black pepper.",
            "Add cooked spaghetti and crispy pancetta to the skillet with pancetta fat. Toss quickly to combine.",
            "Immediately pour egg and cheese mixture over the hot spaghetti, stirring quickly to coat the pasta. If needed, add reserved pasta water a little at a time to create a creamy sauce consistency.",
            "Season with salt to taste, if necessary. Serve immediately with extra grated Parmesan cheese and more freshly ground black pepper."
        ]
    },
    {
        title: "Chocolate Lava Cake",
        image: "/chocolate-lava-cake.jpg",
        description: "Decadent individual chocolate cakes with a gooey molten center, perfect for chocolate lovers.",
        ingredients: [
            "1/2 cup (1 stick) unsalted butter, plus extra for greasing",
            "4 oz (about 115g) semi-sweet or bittersweet chocolate, chopped",
            "2 large eggs",
            "2 large egg yolks",
            "1/4 cup granulated sugar",
            "1 tsp vanilla extract",
            "1/4 cup all-purpose flour",
            "Pinch of salt",
            "Powdered sugar, for dusting",
            "Vanilla ice cream or whipped cream, for serving (optional)"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C). Grease 4 ramekins or small oven-safe dishes with butter and dust with cocoa powder or flour. Tap out any excess.",
            "In a microwave-safe bowl or double boiler, melt butter and chopped chocolate together until smooth. Stir occasionally. Remove from heat and let cool slightly.",
            "In a separate bowl, whisk together eggs, egg yolks, granulated sugar, and vanilla extract until pale and slightly thickened.",
            "Gradually whisk the melted chocolate mixture into the egg mixture until well combined.",
            "Add flour and a pinch of salt to the batter. Gently fold until just combined and no flour streaks remain.",
            "Divide the batter evenly among the prepared ramekins. Place ramekins on a baking sheet and bake in preheated oven for 12-14 minutes, until the edges are set but the center is still soft.",
            "Remove from oven and let cool in the ramekins for 1-2 minutes. Carefully invert each cake onto a serving plate. Dust with powdered sugar and serve immediately with vanilla ice cream or whipped cream, if desired."
        ]
    },
];

type promps = {
    params:{
        id: string
    }
}

export const generateMetadata = ({params}:promps):Metadata =>{
    return{
        title: recipe[Number(`${params.id}`)].title,
    };
};

export default function Recipe({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'All Recipes', href: '/recipes' },
        { label: recipe[id].title, href: `/recipes/${id}` },
    ];

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="container-fluid p-4">
                <Breadcrumbs items={breadcrumbItems} />
                <h1 className="text-center mb-5 main-title">{recipe[id].title}</h1>
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <div className="position-relative" style={{ paddingTop: '38%' }}>
                            <Image
                                src={recipe[id].image}
                                alt={recipe[id].title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="rounded"
                            />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mt-4">{recipe[id].description}</h5>
                                <h5 className="card-title mt-4">Instructions</h5>
                                <ol>
                                    {recipe[id].instructions.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ingredients</h5>
                                <ul>
                                    {recipe[id].ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center mt-4">
                    <Link href="/recipes" className="btn btn-lg btn-view-recipe">
                        Back to All Recipes
                    </Link>
                </div>
            </div>
        </>
    );
}