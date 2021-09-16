/* eslint-disable camelcase */
/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on  seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */





module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  //   Set up fake development data (or if we already have some, avast)
  if (await Pet_product.count() > 0) {
    return;
  }

  //------------ CREATE CUSTOMERS ---------------//
  await Customer.createEach([
    { firstName: 'super', lastName: 'admin', address: 'In da house', contact_number: '1313', user_id: 1},
    { firstName: 'John', lastName: 'Doe', address: 'elpinikis 8, patisia', contact_number: '1212', user_id: 2},
  ]);

  //-------------- CREATE USERS ---------------//
  await User.createEach([
    {username:'admin', password:await sails.helpers.passwords.hashPassword('admin'), email: 'admin@admin.com',  isAdmin: 1, customer_id: 1},
    {username:'john', password:await sails.helpers.passwords.hashPassword('doe'), email: 'john@doe.com', isAdmin: 0, unique: true, customer_id: 2, payment_id: 1} //only one payment per user???
  ]);


  //-------------- CREATE PAYMENT METHODS ---------------///
  await Payment.createEach([
    {payment_type: 'Visa', user_id: 2},
    {payment_type: 'Cash', user_id: 2},
  ]);

  //------------- CREATE DISCOUNTS ------------------------//
  await Discount.createEach([
    { discountName: 'Summer Sales', description: 'Up to 40%', discountPercent: 40, active: 0},
    { discountName: 'Winter Sales', description: 'Up to 30%', discountPercent: 30, active: 0},
    // etc.
  ]);

  //-------------------- CREATE VENDORS ----------------//
  await Vendor.createEach([
    {companyName: 'Bon Appetit', contactPerson: 'Maria 5Isa', companyEmail: 'maria5i@bonappetit.com', companyWebSite: 'https://www.bonappetitpetfood.com/', companyPhone:'+3115553123' },
    {companyName: 'Natura Wild', contactPerson: 'George Bezos', companyEmail: 'Gbezos@nwild.com', companyWebSite: 'https://www.natura-wild.com/en/homepage/', companyPhone:'+3115553567' },
    {companyName: 'Natyka', contactPerson: 'orestis chang', companyEmail: 'karate@natyka.com', companyWebSite: 'https://www.natyka.com/en/homepage/#intro', companyPhone:'+3131453567' },
    {companyName: 'Ancol', contactPerson: 'John Bush', companyEmail: 'jbush@natyka.com', companyWebSite: 'https://www.ancol.co.uk/', companyPhone:'01922402428' },
    {companyName: 'Record'},
    {companyName: 'So Phresh'},

  ]);


  //---------------------CREATE PETS ------------------//
  await Pets.createEach([
    {name: 'dog', description:'dog...'},
    {name: 'cat', description:'cat...'},
    {name: 'fish', description:'fish...'},
    {name: 'bird', description:'bird...'},
    {name: 'small animals', description:'little animals'}
  ]);

  //------------------ CREATE PRODUCT CATEGORIES --------------//
  //---Dog--//
  await Product_category.createEach([
    {
      category_name: 'dog-foods',
      description: 'dry food, dog cans, dog-treats & chews',
      pets_id: 1,
      product_image:'pet-shop-veterinary-with-food-animals-vector.jpg'
    },
    {
      category_name: 'dog-grooming',
      description: 'diapers,  flea and wormers, dog shampoo, ' +
                    'brushes & combs, scissors & clippers, perfumes & fragrances',
      pets_id: 1,
      product_image:'shampoo.jpg'

    },
    {
      category_name: 'dog-accessories',
      description: 'toys, clothes, poop bags, collars, bowls & feeding, leads, harness, ' +
                    'muzles, transport boxes, beds, houses',
      pets_id: 1,
      product_image:'Bowls.webp'
    },
    {
      category_name: 'dog-veterinary-products',
      description: 'antiparasitics, antibiotics, wound care, ',
      pets_id: 1,
      product_image:'PetsCare.png'
    },

    //---Cat--//
    {
      category_name: 'cat-foods',
      description: 'dry food, cat cans, cat-treats & chews',
      pets_id: 2,
      product_image:'pet-shop-veterinary-with-food-animals-vector.jpg'
    },
    {
      category_name: 'cat-grooming',
      description: 'diapers,  flea and wormers, cat shampoo, ' +
                    'brushes & combs, scissors & clippers, perfumes & fragrances',
      pets_id: 2,
      product_image:'shampoo.jpg'
    },
    {
      category_name: 'cat-accessories',
      description: 'toys, clothes, poop bags, collars, bowls & feeding, leads, harness, ' +
                    'muzles, transport boxes, beds, houses',
      pets_id: 2,
      product_image:'Bowls.webp'
    },
    {
      category_name: 'cat-veterinary-products',
      description: 'antiparasitics, antibiotics, wound care, ',
      pets_id: 2,
      product_image:'PetsCare.png'
    },
    //-- fish --/
    {
      category_name:'fish-food',
      description:'fish flakes,granules/pellets/sticks',
      pets_id:3,
      product_image:'fish-food.jpg'
    },
    {
      category_name:'aquariums-equipment-and-decor',
      description:'aquariums & aquariums stands,aquarium substrate,artificial plants,gravel sand & stones,ornaments,breeders & nets,heating & lighting accessories',
      pets_id:3,
      product_image:'aquarium.jpg'
    },
    {
      category_name:'filters-and-pumps',
      description:'air & water pumps,filters,filter media,replacement parts',
      pets_id:3,
      product_image:'filter.webp'
    },
    {
      category_name:'fish-care',
      description:'fish medicines,fresh water improvement,sea water improvement,tests',
      pets_id:3,
      product_image:'fish-care.jpg'
    },
    //---- bird -- //
    {
      category_name:'foods-and-treats',
      description:'bird food,wild bird food,treats',
      pets_id:4,
      product_image:'bird-food.jpg'
    },
    {
      category_name:'bird-accessories',
      description:'cages & stands,bowls & feeders,toys,travels carriers,bird perches,bird nest',
      pets_id:4,
      product_image:'bird-accessories.jpg'
    },
    {
      category_name:'grooming-and-care',
      description:'bird medication,bird sand,bird vitamins,bird baths,nail & break trimmers',
      pets_id:4,
      product_image:'bird-grooming.jpg'

    },
    //---small animals ---//
    {
      category_name:'rabbit',
      description:'rabbit food,rabbit accessories,rabbit health care',
      pets_id:5,
      product_image:'rabbit.jpg'
    },
    {
      category_name:'hamster',
      description:'hamster food,hamster accessories,hamster health care',
      pets_id:5,
      product_image:'hamster.webp',
    },
    {
      category_name:'iguana',
      description:'iguana food,iguana accessories,iguana health care',
      pets_id:5,
      product_image:'iguana.jpg'
    }

  ]);

  //------------------ CREATE SUBCATEGORIES -------------------//
  await Product_subcategory.createEach([
    //--------------------- DOG ------------------------------//
    //------ FOODS -------//
    {subcategory: 'dog-dry-food', category_id: 1},
    {subcategory: 'dog-cans', category_id: 1},
    {subcategory: 'dog-treats-and-chews', category_id: 1},
    //------ GROOMING -------//
    {subcategory: 'dog-diapers', category_id: 2},
    {subcategory: 'dog-shampoo', category_id: 2},
    {subcategory: 'dog-brushes-and-combs', category_id: 2},
    {subcategory: 'dog-scissors-and-clippers', category_id: 2},
    {subcategory: 'dog-perfumes-and-fragrances', category_id: 2},
    //------ ACCESSORIES -------//
    {subcategory: 'dog-toys', category_id: 3},
    {subcategory: 'dog-clothes', category_id: 3},
    {subcategory: 'dog-collars', category_id: 3},
    {subcategory: 'dog-bowls-and-feeding', category_id: 3},
    {subcategory: 'dog-leads', category_id: 3},
    {subcategory: 'dog-harness', category_id: 3},
    {subcategory: 'dog-poop-bags', category_id: 3},
    {subcategory: 'dog-muzzle', category_id: 3},
    {subcategory: 'dog-transport-boxes', category_id: 3},
    {subcategory: 'dog-beds', category_id: 3},
    {subcategory: 'dog-houses', category_id: 3},
    //------ VETERINARY -------//
    {subcategory: 'dog-prescription-only-medicines', category_id: 4},
    {subcategory: 'dog-antibiotics', category_id: 4},
    {subcategory: 'dog-wound-care', category_id: 4},
    {subcategory: 'dog-fleas-and-wormers', category_id: 4},
    {subcategory: 'dog-vitamins-minerals-electrolytes', category_id: 4},
    {subcategory: 'barf', category_id: 1}, //------- FOODS ------//

    //--------------------- CAT ------------------------------//
    //------ FOODS -------//
    {subcategory: 'cat-dry-food', category_id: 5},
    {subcategory: 'cat-wet-food', category_id: 5},
    {subcategory: 'cat-treats-and-chews', category_id: 5},
    //------ GROOMING -------//
    {subcategory: 'cat-shampoo', category_id: 6},
    {subcategory: 'cat-brushes-and-combs', category_id: 6},
    {subcategory: 'cat-scissors-and-clippers', category_id: 6},
    //------ ACCESSORIES -------//
    {subcategory: 'cat-toys', category_id: 7},
    {subcategory: 'cat-litters', category_id: 7},
    {subcategory: 'cat-clothes', category_id: 7},
    {subcategory: 'cat-collars', category_id: 7},
    {subcategory: 'cat-bowls-and-feeding', category_id: 7},
    {subcategory: 'cat-transport-boxes', category_id: 7},
    {subcategory: 'cat-beds', category_id: 7},
    //------ VETERINARY -------//
    {subcategory: 'cat-antiparasitics', category_id: 8},
    {subcategory: 'cat-medicines', category_id: 8},
    {subcategory: 'cat-wound-care', category_id: 8},
    {subcategory: 'cat-vitamins-minerals-electrolytes', category_id: 8},
    //--------------------- FISH ------------------------------//
    //------ FOODS -------//
    {subcategory: 'fish-flakes', category_id: 9},
    {subcategory: 'fish-granules-pellets-sticks', category_id: 9},
    //------ aquariums equipment and decor -------//
    {subcategory: 'fish-aquariums-and-aquariums-stands', category_id: 10},
    {subcategory: 'fish-aquarium-substrate', category_id: 10},
    {subcategory: 'fish-artificial-plants', category_id: 10},
    {subcategory: 'fish-gravel-sand-and-stones', category_id: 10},
    {subcategory: 'fish-ornaments', category_id: 10},
    {subcategory: 'fish-breeders-and-nets', category_id: 10},
    {subcategory: 'fish-heating-and-lighting-accessories', category_id: 10},
    //------ filters and pumps -------//
    {subcategory: 'fish-air-and-water-pumps', category_id: 11},
    {subcategory: 'fish-filters', category_id: 11},
    {subcategory: 'fish-filter-media', category_id: 11},
    {subcategory: 'fish-replacement-parts', category_id: 11},
    //------ care -------//
    {subcategory: 'fish-fish-medicines', category_id: 12},
    {subcategory: 'fish-fresh-water-improvement', category_id: 12},
    {subcategory: 'fish-sea-water-improvement', category_id: 12},
    {subcategory: 'fish-tests', category_id: 12},
  ]);


  //-------------------------- CREATE PRODUCTS --------------------//

  await Pet_product.createEach([


    //--------------------- Dog ------------------------------//

    //----------Dog Foods---------------//

    //--------------DRY FOOD----------//
    {
      name: 'Bon Appetit Adult Dog Chicken & Rice Dry Food: hypoallergenic, gluten-free',
      description: 'A Bon Appetit dog food that is hypoallergenic and gluten-free suitable for all stages of life. 68% chicken, 32% Fruit and Vegetables and 0% gluten',
      quantity: 1,
      vendor_price: 8.00,
      retail_price: 13.40,
      image_name: 'Bon-Appetit-adult-chicken-rice-dog-food-premium-gluten-free-hypoallergenic.png',
      status: 1,
      vendor_id: 1,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Bon Appetit Adult Dog Lamb & Salmon & Rice Dry Food: hypoallergenic, gluten-free',
      description: 'A premium Bon Appetit dog food that is hypoallergenic and gluten free suitable for all stages of life. 62% lamb and salmon, 38% fruit and vegetables and 0% gluten. ',
      quantity: 2,
      vendor_price: 10,
      retail_price: 17.40,
      image_name: 'Bon-Appetit-premium-gluten-free-hypoallergenic-dog-food-adult-lamb-salmon-rice.png',
      status: 2,
      vendor_id: 1,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Bon Appetit Adult Dog Maxi Chicken & Rice Dry Food: hypoallergenic, gluten-free',
      description: 'A hypoallergenic, gluten free premium dog food is ideal for adult dogs of large breeds for all stages of life. 60% chicken, 40% fruit and vegetables, 0% gluten.',
      quantity: 1,
      vendor_price: 25.00,
      retail_price: 32.40,
      image_name: 'Bon-appetit-dog-food-gluten-free-adult-maxi-chicken-rice-hypoallergenic.png',
      status: 1,
      vendor_id: 1,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Grain Free Dog Food Natura Wild: Ontario Wildland Adult Dry Food',
      description: 'Complete grain-free dog food for adult dogs: Recipe with lamb & French pork. 35% fresh meat + 40% dehydrated meat + 25% fruits and vegetables',
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 11.80,
      image_name: 'ontario-wildland-12kg.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Grain Free Puppy Food: Natura Wild Little Creek',
      description: 'Complete grain-free food for puppies from 1- 18 months: Recipe with salmon, tuna and turkey. 40 % fresh meat + 42 % dehydrated meat & fat + 18 % fruits and vegetables',
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 9.40,
      image_name: 'Natura-Wolf-Little-Creek-Grain-Free-Dog-Puppy-Food-12kg.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1

    },
    {
      name: 'Grain-Free Dry Dog Food Natura Wild North Country: poultry, duck & turkey',
      description: 'Complete grain free food for dogs that tend to be overweight, sterilised dogs, adult dogs (of large breeds): Recipe with poultry, duck & turkey. 40% fresh meat + 40 % dehydrated meat + 20 % fruits and vegetables',
      quantity: 1,
      vendor_price: 25.00,
      retail_price: 32.40,
      image_name: 'Natura-wild-north-country-grain-free-dog-food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1

    },
    //---------DOG CANS ----------//
    {
      name: 'Purina Pro Plan Savor Adult Dog Food',
      description: 'Fill your dog\'s dish with Purina Pro Plan SAVOR Chicken and Rice Entree Classic adult wet dog food, and give him outstanding taste without compromise',
      quantity: 1,
      vendor_price: 25.00,
      retail_price: 32.40,
      image_name: 'Purina-Pro-Plan-Savor-Adult-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Simply Nourish® Shreds Adult Wet Dog Food',
      description: 'Make meal time delicious and nutritious for your dog by serving Simply Nourish Chicken & Rice Stew Adult Dog Food.',
      quantity: 1,
      vendor_price: 25.00,
      retail_price: 32.40,
      image_name: 'Simply-Nourish-Shreds-Adult-Wet-Dog-Food-Natural.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Blue Buffalo Homestyle Recipe Adult Dog Food',
      description: 'Blue Buffalo Homestyle Recipe canned food is made from all-natural, wholesome ingredients to provide superior nutrition for your dog.',
      quantity: 1,
      vendor_price: 25.00,
      retail_price: 32.40,
      image_name: 'Blue-Buffalo-Homestyle-Recipe-Adult-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Cesar® Canine Cuisine Adult Dog Food',
      description: 'Dogs with sophisticated palates will enjoy a rich culinary experience with CESAR Canine Cuisine Gourmet Wet Dog Food in meaty juices or in sauce.',
      quantity: 1,
      vendor_price: 15.00,
      retail_price: 17.40,
      image_name: 'Cesar-Canine-Cuisine-Adult-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Authority Cuts in Gravy Adult Wet Dog Food',
      description: 'Provide your dog with a delicious and nutritious meal time choice by serving Authority Chicken and Rice Entree Adult Wet Dog Food.',
      quantity: 1,
      vendor_price: 15.00,
      retail_price: 19.70,
      image_name: 'Authority-Cuts-in-Gravy-Adult-Wet-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Wellness® Stews Adult Wet Dog Food - Natural',
      description: 'These deliciously chunky, slow-cooked classics use whole food ingredients that provide exceptional nutrition and extraordinary flavor.',
      quantity: 1,
      vendor_price: 7.00,
      retail_price: 12.40,
      image_name: 'Wellness-Stews-Adult-Wet-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Purina ONE SmartBlend Tender Cuts in Gravy Wet Dog Food',
      description: 'Tempt your dog to his dish when you serve Purina ONE SmartBlend Tender Cuts Beef & Barley Entree in Gravy adult wet dog food.',
      quantity: 1,
      vendor_price: 10,
      retail_price: 17.40,
      image_name: 'Purina-ONE-SmartBlend-Tender-Cuts-in-Gravy-Wet-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Purina Pro Plan Savor Wet Dog Food, Grain Free',
      description: 'Serve up a wholesome meal combining high-quality nutrition and a delicious taste dogs love with Purina Pro Plan.',
      quantity: 1,
      vendor_price: 18.00,
      retail_price: 27.40,
      image_name: 'Purina-Pro-Plan-Savor-Wet-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Royal Canin® Canine Health Nutrition™ Advanced Nutrition Adult Dog Food',
      description: 'Founded by a veterinarian, Royal Canin has over 40 years experience in health nutrition.',
      quantity: 1,
      vendor_price: 20.00,
      retail_price: 29.00,
      image_name: 'Royal-Canin-Canine-Advanced-Nutrition-Dog-Food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    //---------DOG TREATS & CHEWS ----------//
    {
      name: 'Simply Nourish® Soft Chews Sticks Dog Treat - Natural',
      description: 'Make treat time delicious and nutritious for your dog by serving Simply Nourish Bacon & Cheese Recipe Soft Chews Dog Treats.',
      quantity: 1,
      vendor_price: 5.23,
      retail_price: 9.35,
      image_name: 'Simply-Nourish-Soft-Chews-Sticks-Dog-Treat-Natural.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 3,
      pet_id: 1

    },
    {
      name: 'Milk-Bone Soft & Chewy Dog Snacks',
      description: 'Add more wholesome goodness to your dog\'s day with Milk-Bone Soft & Chewy Beef & Filet Mignon Recipe with Chuck Roast dog treats. ',
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 6.50,
      image_name: 'Milk-Bone-Soft-&-Chewy-Dog-Snacks.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 3,
      pet_id: 1

    },
    {
      name: 'Bil-Jac® Little-Jacs Chicken Liver Small Breed Training Treats',
      description: 'Bil-Jac Little-Jacs Training Treats are ideal for training your small dog.',
      quantity: 1,
      vendor_price: 3.25,
      retail_price: 6.90,
      image_name: 'Bil-Jac-Little-Jacs-Chicken-Liver-Small-Breed-Training-Treats.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 3,
      pet_id: 1

    },


    //---------- BARF -----------//
    {
      name: 'Natyka Gourmet Gluten Free Puppy Food',
      description: 'This gluten free puppy food is a complete semi-moist poultry food for puppies. It\'s a delicious composition based on poultry, dried potatoes, rice, salmon oil and a range of high quality ingredients.',
      quantity: 1,
      vendor_price: 15.00,
      retail_price: 22.40,
      image_name: 'Natyka_Gourmet_gluten_free_puppy_dry_food_9kg.jpeg',
      status: 1,
      vendor_id: 3,
      product_category_id: 1,
      subcategory_id: 25,
      pet_id: 1

    },
    {
      name: 'Natyka Gourmet Adult Gluten Free Dog Food',
      description: 'This gluten free dog food is suitable for all dog breeds. It is very specific due to the semi-moist consistency that will promote a good metabolism. Due to its gluten-free composition, allergies and food intolerance risks are clearly reduced.',
      quantity: 1,
      vendor_price: 15.00,
      retail_price: 22.40,
      image_name: 'Natyka-Gourmet-Adult-Real-Poultry-Complete-Dog-Dry-Food.jpeg',
      status: 1,
      vendor_id: 3,
      product_category_id: 1,
      subcategory_id: 25,
      pet_id: 1

    },
    {
      name: 'Natyka Gourmet Adult Real Lamb & Salmon Dog Food',
      description: 'This gluten free lamb and salmon semi-moist recipe is suitable for all adult and senior dogs, but also because its semi-wet consistency makes it a favoured food for dogs with digestive or dental problems.',
      quantity: 1,
      vendor_price: 15.00,
      retail_price: 22.40,
      image_name: 'Natyka-gourmet-lamb-salmon-adult-dog-dry-food-02.jpeg',
      status: 1,
      vendor_id: 3,
      product_category_id: 1,
      subcategory_id: 25,
      pet_id: 1
    },


    //**** DOG GROOMING ******//
    //---Dog diapers---//
    {
      name: 'So Phresh Washable Diaper for Dogs, X-Small',
      description: 'Washable Diaper for Dogs, X-Small',
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 9.12,
      image_name: 'so-phresh-washable-dog-diaper-Xs.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },

    {
      name: 'Top Paw® Disposable Dog Diapers - 30 Pack',
      description: 'Top Paw Disposable Diapers are the perfect choice for dogs and pet parents dealing with incontinence, females in heat, excitable urination, and travel.' ,
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 9.10,
      image_name: 'top-paw-disposable-dog-diapers-30-pack.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Top Paw® Disposable Dog Diapers - 12 Pack',
      description: 'Top Paw Disposable Diapers are the perfect choice for dogs and pet parents dealing with incontinence, females in heat, excitable urination, and travel.' ,
      quantity: 12,
      vendor_price: 3.00,
      retail_price: 8.40,
      image_name: 'top-paw-disposable-dog-diapers-12pack.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'PoochPad Washable Diapers',
      description: 'The PoochPants Washable Diaper is a reusable diaper for dogs that is washable, leakproof, with no inserts needed.' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 8.40,
      image_name: 'pooch-pad-washable-diapers.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Simple Solution® Disposable Dog Diapers - 12 Pack',
      description: 'With tabs underneath and padding facing in, slip the hole of the diaper over your dogs tail. Position the diaper between the back legs and snug against your dogs underbelly' ,
      quantity: 1,
      vendor_price: 1.00,
      retail_price: 3.40,
      image_name: 'simple-solution-disposable-dog-diapers-12-pack.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Simple Solution® All Day Dog Pads',
      description: 'Neutralize accidents and unpleasant odors as you training your large dog with Simple Solutions All Day Premium Dog Pads.' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 9.40,
      image_name: 'simple-solution-all-day-dog-pads.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    //---Dog shampoo---//
    {
      name: 'Advance Atopic Care Shampoo',
      description: 'A special dog shampoo with triple effect, thanks to a combination of aloe vera, collagen and olive leaf extract.' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 10.90,
      image_name: 'advance-atopic-care-shampoo.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'beaphar Puppy Shampoo Glossy Coat',
      description: 'beaphar Puppy Shampoo Glossy Coat is a shampoo with valuable macadamia nut oil, especially developed for the sensitive skin of puppies.' ,
      quantity: 2,
      vendor_price: 6.00,
      retail_price: 12.40,
      image_name: 'beaphar-puppy-shampoo-glossy-coat.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'Trixie Aloe Vera Dog Shampoo',
      description: 'beaphar Puppy Shampoo Glossy Coat is a shampoo with valuable macadamia nut oil, especially developed for the sensitive skin of puppies.' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 8.90,
      image_name: 'trixie-aloe-vera-dog-shampoo.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'beaphar Dog Shampoo for White Coats',
      description: 'beaphar Shampoo with Aloe Vera is a newly developed shampoo for the gentle cleansing of dogs of all breeds with white fur.' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 9.90,
      image_name: 'beaphar-dog-shampoo-for-white-coats.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'Frontline Pet Care Sensitive Skin Shampoo',
      description: 'Frontline Pet Care Sensitive Skin Shampoo has been specifically developed for cat and dogs who suffer from irritable skin.' ,
      quantity: 1,
      vendor_price: 7.00,
      retail_price: 13.12,
      image_name: 'frontline-pet-care-sensitive-skin-shampoo.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    //---Dog brushes & combs---//
    {
      name: 'Record Pet Hair Remover Brush Set',
      description: 'The Record Pet Hair Remover Brush is reusable, double-sided and can be used on sofas, car seats, clothes, pet beds, but also on the pet directly, as it does not leave glue residue or dangerous chemical materials.',
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 8.40,
      image_name: 'RECORD-Brush-Hair-Remover-5540.jpeg',
      status: 1,
      vendor_id: 5,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Record Self Cleaning Slicker Brush',
      description: 'A tool specially made for the daily grooming of long-haired cats and dogs. After having combed your pet you’ll need to push the button on the back of the brush and the plastic board will easily expel the combed hair.',
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 8.40,
      image_name: 'Record-self-cleaning-slicker-brush.jpeg',
      status: 1,
      vendor_id: 5,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Ancol Ergo Wood Handle Soft Bristle Dog Brush',
      description: 'Removes dead hair and promotes glossy coat. It comes with a wood handle for comfort',
      quantity: 1,
      vendor_price: 2.00,
      retail_price: 4.10,
      image_name: 'Ancol-dog-brush-soft.jpeg',
      status: 1,
      vendor_id: 5,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Moser Dematter',
      description: 'Effective dematting grooming tool for removing knotted and matted fur in your dog’s undercoat.' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 5.40,
      image_name: 'moser_dematter.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: '8in1 Perfect Coat DeShedder for Dogs',
      description: 'A grooming brush for dogs that effectively removes loose hair and undercoat without damaging the top coat.' ,
      quantity: 2,
      vendor_price: 5.00,
      retail_price: 10.00,
      image_name: '8in1-perfect-coat-deshedder-for-dogs.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Trixie Universal Curry Combs',
      description: 'A high-quality wire brush for cats and dogs of all fur types, helping to remove loose hairs, dirt and matting.' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 8.00,
      image_name: 'trixie-universal-curry-combs.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Trixie Double-Sided Oval Pet Brush',
      description: 'The double-sided pet brush from Trixie is suitable for cats and dogs.' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 8.70,
      image_name: 'trixie-double-sided-oval-pet-brush.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Grooming Glove',
      description: 'Glove for grooming dogs and cats, double-sided use, one bobbly side and one velour side, pleasant massaging effect.' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 9.00,
      image_name: 'grooming-glove.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    //---Dog scissors & clippers---//
    {
      name: 'Trixie Easy Claw Pet Clippers',
      description: 'The claw scissors from Trixie are the easy way to trim your pets claws safely.' ,
      quantity: 2,
      vendor_price: 3.00,
      retail_price: 4.90,
      image_name: 'trixie-easy-claw-pet-clippers.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Trixie Household Claw Clippers',
      description: 'These handy Trixie clippers can be used to trim the claws of any household pet.' ,
      quantity: 2,
      vendor_price: 4.00,
      retail_price: 8.40,
      image_name: 'trixie-household-claw-clippers.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Oster Cordless Claw Trimmer',
      description: 'Battery powered file for stress-free claw trimming, with two speed settings for quick and easy pet manicures.' ,
      quantity: 1,
      vendor_price: 5.12,
      retail_price: 9.40,
      image_name: 'oster-cordless-claw-trimmer.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Wahl Pet U-Clip Dog Clipper Kit',
      description: 'Mains operated dog clipper with coloured combs for easy selection of cutting lengths and adjustable taper lever for wide variation of cutting lengths.' ,
      quantity: 1,
      vendor_price: 6.81,
      retail_price: 14.40,
      image_name: 'wahl-pet-u-clip-dog-clipper-kit.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Wahl Pet KMSS Dog Clipper Kit',
      description: 'The Wahl KM SS mains powered, high performance single speed animal clipper has a high torque rotary motor which is both durable and powerful.' ,
      quantity: 2,
      vendor_price: 6.81,
      retail_price: 14.40,
      image_name: 'wahl-pet-kmss-dog-clipper.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    //---Dog perfumes & fragrances---//
    {
      name: 'Earthbath Hypo-Allergenic Fragrance',
      description: 'earthbath Hypo-Allergenic Grooming Wipes safely and easily wipe away dirt & odor between baths.' ,
      quantity: 3,
      vendor_price: 3.89,
      retail_price: 8.10,
      image_name: 'earthbath-hypo-allergenic-fragrance.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },
    {
      name: 'Lavender & Chamomile Aromatherapy',
      description: 'Freshening & Shining Spray for Pets, Dog Grooming Spray & Pet Odor Eliminator' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 9.40,
      image_name: 'lavender-chamomile-aromatherapy.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },
    {
      name: 'Natural Pet Cologne',
      description: 'Deodorant and Scented Perfume Body Spray' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 8.40,
      image_name: 'natural-pet-cologne.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },
    {
      name: 'Lambert Kay Fresh N Clean Cologne Finishing Spray',
      description: 'Fresh N Clean Cologne Finishing Spray - Baby Powder Scent' ,
      quantity: 1,
      vendor_price: 4.15,
      retail_price: 8.57,
      image_name: 'lambert-kay-fresh-n-clean-cologne-finishing-spray.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },


    //**** DOG ACCESORIES ******//

    //---DOG TOYS---//
    {
      name: 'KONG® Classic Dog Toy-Treat Dispensing',
      description: 'The KONG Classic is the gold standard of dog toys, and has become the staple for dogs around the world for over forty years. Offering enrichment by helping satisfy a dogs instinctual needs' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 5.40,
      image_name: 'kong-toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'KONG® Cozie Spunky Monkey Dog Toy',
      description: 'Your dog loves to cuddle and he also loves to play, so grab a toy that he can do both with. Kong\'s Cozie Spunky Monkey is cute, cuddly and durable. Your dog will enjoy the versatility this toy offers.' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 5.80,
      image_name: 'kong-monkey-toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'KONG® AirDog® Tennis Ball Set Squeaker Dog Toy',
      description: 'The KONG SqueakAir Tennis Ball Dog Toy combines two classic dog toys -the tennis ball and the squeaker toy-to create the perfect fetch toy. This durable, high-quality Squeakair tennis ball will not wear down your dog\'s teeth' ,
      quantity: 1,
      vendor_price: 4.15,
      retail_price: 6.40,
      image_name: 'kong-tennis-ball.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Thrills & Chills™ Halloween GET SPOOKY! Purple Bone Dog Toy - Plush, Squeaker',
      description: 'Your dog will have a spook-tacular time playing with this Thrills & Chills Plush Spooky Bone Dog Toy' ,
      quantity: 1,
      vendor_price: 4.30,
      retail_price: 6.40,
      image_name: 'Thrills&Chills-Purple-Bone-Dog.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Top Paw® "I Love PetSmart" Flyer Dog Toy',
      description: 'Engage in fun, interactive play with your dog with this Top Paw Plastic Flyer. This fun flyer is the perfect vehicle by which to keep your dog active and engaged' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 5.80,
      image_name: 'Top-Paw-Flyer-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Nylabone® Puppy Ring Chew Dog Toy',
      description: 'The Puppy Ring Bone is specifically designed for teething puppies to encourage the development of non-destructive chewing habits. Not recommended for dogs with any adult teeth.' ,
      quantity: 1,
      vendor_price: 3.40,
      retail_price: 8.00,
      image_name: 'Nylabone-Puppy-Ring-Chew.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Nylabone® Puppy Teething Keys Chew Dog Toy',
      description: 'This Nylabone Just for Puppies Teething Chew Keys Toy is made from inert soft thermoplastic polymer to satisfy the chewing instinct of teething puppies, and encourages non-destructive chewing' ,
      quantity: 1,
      vendor_price: 3.65,
      retail_price: 8.40,
      image_name: 'Nylabone-Chew-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'KONG® Teddy Bear Dog Toy - Plush, Squeaker',
      description: ' A plush toy that lasts! KONG\'s Plush Teddy Bear Dog Toy is the perfect toy for your pooch who loves stuffed toys - minus the mess! This plush toy comes with a pre-loaded removable internal squeaker that all dogs love.' ,
      quantity: 1,
      vendor_price: 1.50,
      retail_price: 4.00,
      image_name: 'Kong-Teddy-Bear-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Multipet® Lamb Chop Dog Toy - Squeaker, Plush',
      description: ' The Multipet Lamb Chop Mini Dog Toy is the officially licensed Lamb Chop Dog Toy from the popular Shari Lewis children\'s program.' ,
      quantity: 1,
      vendor_price: 1.80,
      retail_price: 4.45,
      image_name: 'Kong-Teddy-Bear-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Top Paw® Spiky Football Dog Toy - Squeaker',
      description: 'Keep your dog active and entertained with this Top Paw Spiky TPR Football Dog Toy' ,
      quantity: 1,
      vendor_price: 1.90,
      retail_price: 5.00,
      image_name: 'Top-Paw-Spiky-Football-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Thrills & Chills™ Halloween Spider Dog Toy - Plush, Squeaker',
      description: 'Your dog will have a spook-tacular time playing with this Thrills & Chills Plush Spider Dog Toy.' ,
      quantity: 1,
      vendor_price: 2.00,
      retail_price: 3.40,
      image_name: 'Thrills-Chills-Halloween-Spider-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },

    //-------- Dog Clothes --------//
    {
      name: 'Hopping Bunny Flannel Dog Pajamas',
      description: 'XS dog Pajamas' ,
      quantity: 1,
      vendor_price: 10.00,
      retail_price: 18.40,
      image_name: 'Hopping-Bunny-Flannel-Dog-Pajamas.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Sparkling Bow Ruffle Layered Dog Dress',
      description: 'Adorable dog dress with a striped top and polka dots ruffle layered skirt. Made with soft knit cotton fabric, accented with an attached sparkling belt and sparkling bow.' ,
      quantity: 1,
      vendor_price: 10.00,
      retail_price: 17.40,
      image_name: 'Sparkling-Bow-Ruffle-Layered-Dog-Dress.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Juicy Watermelon Dog Sundress',
      description: 'Adorable and juicy watermelon dog sundress, with attached large D-ring for easy leash attachment. ' ,
      quantity: 1,
      vendor_price: 11.00,
      retail_price: 18.40,
      image_name: 'Juicy-Watermelon-Dog-Sundress.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Bobble Stitch Turtleneck Dog Sweater Pink',
      description: 'Adorable hand knitted (bobble stitch) turtleneck dog sweater, accented with a flower on the side. Made with soft acrylic yarn.' ,
      quantity: 1,
      vendor_price: 9.00,
      retail_price: 18.40,
      image_name: 'Bobble-Stitch-Turtleneck-Dog-Sweater-Pink.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Sun Shield Dog Tee Pebble',
      description: 'The Sun Shield Dog Tee is a silky soft, lightweight stretch jersey with a UPF-50 rating that blocks 98% of the sun\'s harmful UV rays.' ,
      quantity: 1,
      vendor_price: 8.00,
      retail_price: 15.10,
      image_name: 'Sun-Shield-Dog-Tee-Pebble.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Stretch Fleece Onesie Dog Pajamas Navy/Winter Mod',
      description: 'These are unbeatable dog pajamas but aren\'t they also perfect for the next polar vortex on their own or under a waterproof coat?' ,
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 12.80,
      image_name: 'Stretch-Fleece-Onesie-Dog-Pajamas-NavyWinter-Mod.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },

    //---------------- Dog Collars --------------//
    {
      name: 'Buttercup Plaid Flannel Dog Collar',
      description: 'A mellow yellow plaid in soft, thick flannel.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'buttercup-plaid-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Harbor Plaid Flannel Dog Collar',
      description: 'A timeless plaid in a calming cornflower blue made from soft flannel.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'harbor-plaid-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Harvest Plaid Flannel Dog Collar',
      description: 'A beautiful autumn collar made from soft flannel in shades of yellow, gray, orange and cream.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'harvest-plaid-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Pink Herringbone Flannel Dog Collar',
      description: 'A gentle pink collar with a subtle herringbone pattern made from luxuriously thick flannel.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'pink-herringbone-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Sunset Flannel Dog Collar',
      description: 'This flannel collar features warm jewel tones in purple, pink, and orange.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'sunset-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Red and Black Buffalo Check Dog Collar',
      description: 'A classic red and black buffalo plaid pattern is perfect during the winter and year-round.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'red-and-black-buffalo-check-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Upcycled Denim Dog Collar',
      description: 'Part of our Upcycled Denim capsule, a collection that is as beautiful as it is sustainable. Made in a zero-waste textile.' ,
      quantity: 1,
      vendor_price: 19.00,
      retail_price: 32.00,
      image_name: 'upcycled-denim-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },

    //------------ Dog Bowls And Feeding ------------//
    {
      name: 'Outward Hound Fun Feeder Drop, Turquoise, Large',
      description: 'Slow Feeder for obese pets' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 8.15,
      image_name: 'pet-slow-feeder.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'OurPets Comfort Elevated Dog Bowl, Black 8 Inches',
      description: 'This Feeder Is Perfect For Small Dogs' ,
      quantity: 1,
      vendor_price: 10,
      retail_price: 19.30,
      image_name: 'OurPets-Comfort-Elevated-Dog-Bowl-Black-8-Inches.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'Our Pets Durapet Stainless Steel Bowl, 7 Cups',
      description: 'Permanently-bonded rubber ring on bottom of bowl' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 8.85,
      image_name: 'OurPets-Durapet-Stainless-Steel-Bowl-7-Cups.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'Play On Matte Blue Ceramic Dog Bowl, Large, 33 Ounces',
      description: 'High-end style, oven fired and hand painted' ,
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 18.00,
      image_name: 'Play-On-Matte-Blue-Ceramic-Dog-Bowl-Large-33-Ounces.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'Play On Floral Melamine Bowl, Small, 8 Ounces',
      description: 'Non-skid bottom allows for stable dinning' ,
      quantity: 1,
      vendor_price: 1.50,
      retail_price: 8.00,
      image_name: 'Play-On-Floral-Melamine-Bowl-Small-8-Ounces.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1  },

    //----DOG LEADS---//
    {
      name: 'KONG® Comfort Dog Leash',
      description: 'The KONG Padded Hands-Free Leash offers you more freedom while still being in control on walks with your furry friend' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 12.50,
      image_name: 'KONG-Comfort-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Top Paw® Nylon Dog Leash: 6-ft long',
      description: 'This Top Paw Standard Navy Nylon Dog Leash makes walks safer and more enjoyable for you and your dog' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 12.50,
      image_name: 'Top-Paw-Nylon-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:13,
      pet_id: 1
    },
    {
      name: 'flexi® New Classic Retractable Cord Dog Leash',
      description: 'Keep your dog safe on walks while giving him a bit of room to roam with the Flexi New Classic Retractable Cord Dog Leash.' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 12.50,
      image_name: 'flexi-New-Retractable-Cord-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'KONG® Rope Dog Leash',
      description: 'The KONG Red Rope Leash offers pet parents more comfort and control on walks' ,
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 14.50,
      image_name: 'KONG-Rope-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Arcadia Trail™ Reflective Rope Dog Leash: 4-ft long',
      description: 'This Arcadia Trail Berry Reflective Rope Dog Leash is the perfect choice for doggie/pet parent duos that love enjoying the outdoors together' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 15.50,
      image_name: 'Arcadia-Trail-Reflective-Rope-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:13,
      pet_id: 1
    },
    {
      name: 'Top Paw® Rope Dog Leash',
      description: 'Make walks with your pup safer and more enjoyable with the Top Paw Rope Leash.' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 12.50,
      image_name: 'Top-Paw-Rope-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Thrills & Chills™ Halloween Orange & Black Waste Bag Dispenser Leash Set: 4-ft long',
      description: 'Walking your dog, and cleaning up after him in convenient fashion, is a breeze with this Thrills & Chills Waste Bag Dispenser Leash Set.' ,
      quantity: 1,
      vendor_price: 4.30,
      retail_price: 11.50,
      image_name: 'Thrills-&-Chills-Halloween-Waste-Bag-Dispenser-Leash-Set.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Lucy & Co. Dilly Lily Dog Leash',
      description: 'Make walks safer and more enjoyable for you and your pup with this Lucy & Co. Teal Floral Dog Leash' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 14.50,
      image_name: 'Lucy-&-Co-Dilly-Lily-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:13,
      pet_id: 1
    },
    {
      name: 'Top Paw® Blue Multi-Bone Dog Leash: 6-ft long, 5/8-in wide',
      description: 'This colorful leash is strong and sturdy, and offers you more control while the two of you enjoy walks together' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 12.50,
      image_name: 'Top-Paw-Blue-Multi-Bone-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Lucy & Co. Posy Pink Dog Leash',
      description: 'This great-looking leash comes in vibrant pink, and offers you optimal control as well as a padded handle for maximum comfort while the two of you enjoy walks together' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 13.50,
      image_name: 'Lucy-&-Co-Posy-Pink-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'KONG® Reflective Padded Hands-Free Dog Leash',
      description: 'The KONG Reflective Padded Hands-Free Leash offers you more freedom while still being in control on walks with your furry friend' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 13.10,
      image_name: 'KONG-Reflective-Padded-Hands-Free-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },


    //---DOG HARNESS---//
    {
      name: 'KONG® Reflective Pocket Dog Harness',
      description: 'Keep your dog safer and more comfortable on walks with this stylish KONG Reflective Pocket Dog Harness.' ,
      quantity: 1,
      vendor_price: 6.00,
      retail_price: 15.50,
      image_name: 'KONG-Reflective-Pocket-Dog-Harness.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:14,
      pet_id: 1
    },
    {
      name: 'Top Paw® Gunmetal Core Adjustable Dog Harness',
      description: 'The Top Paw Gunmetal Core Adjustable Harness is colorful and stylish, and provides you and your dog with the vehicle to make walks and other outdoor excursions safer and more enjoyable.' ,
      quantity: 1,
      vendor_price: 7.00,
      retail_price: 18.50,
      image_name: 'Top-Paw-Gunmetal-Core-Adjustable-Dog-Harness.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 14,
      pet_id: 1
    },
    {
      name: 'Arcadia Trail™ Neoprene Sport Dog Harness',
      description: 'Dogs and their humans that are serious about their tandem outdoor excursions will love this Arcadia Trail Yellow Neoprene Sport Harness' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 18.50,
      image_name: 'Arcadia-Trail-Neoprene-Sport-Dog-Harness.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 14,
      pet_id: 1
    },

    //---DOG POOP BAGS ---//

    {
      name: 'Beco Eco-Friendly Poop Bags',
      description: 'Beco Bags make cleaning up after your pet as eco-friendly as possible, thanks to our degradable material.' ,
      quantity: 1,
      vendor_price: 1.00,
      retail_price: 2.50,
      image_name: 'Beco-Eco-Friendly-Poop-Bags_1.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'T. Forrest Our Dog Biodegradable Poo Bags - 50 Bags',
      description: 'When buying poop bags, look for biodegradable bags, which are better for the environment. Biodegradable poop bags are typically made out of GMO free corn or other starches and vegetable oil.' ,
      quantity: 1,
      vendor_price: 1.00,
      retail_price: 2.50,
      image_name: 'T-Forrest-Our-Dog-Biodegradable-Poo-Bags.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'Bags on Board Blue Refill Poo Bags - 60 Pack',
      description: 'The super quality Bags on Board Refill blue bags are fantastic value forthe consumer.The clean-up bags are toughlong and robust making them easy to place the hand inside securely.' ,
      quantity: 1,
      vendor_price: 3.00,
      retail_price: 10.50,
      image_name: 'Bags-on-Board-Blue-Refill-Poo-Bags.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'Bags On Board Refill Neutral Coloured Poo Bags - 140 Pack',
      description: 'Bags on Board Neutral Dog Waste Bags makes picking up dog poop and pet waste quick, easy, and simple whether on a walk or in the Garden' ,
      quantity: 1,
      vendor_price: 5.00,
      retail_price: 18.50,
      image_name: 'Bags-On-Board-Refill-Neutral-Coloured-Poo-Bags.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'Good Boy Antibacterial Degradable Poo Bags - 100 Pack ',
      description: 'Good Boy Degradable Poo Bags are a great way of cleaning up after your dog, allowing quick, easy and hygienic disposal. ' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 16.50,
      image_name: 'Good-Boy-Antibacterial-Degradable-Poo-Bags.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'KONG Handi POD Refill Bags for Dogs',
      description: 'KONG is renowned for high quality and durability, KONG HandiPOD has been developed to bring dog walkers useful solutions for when they are out and about.' ,
      quantity: 1,
      vendor_price: 2.00,
      retail_price: 8.50,
      image_name: 'KONG-Handi-POD-Refill-Bags-for-Dogs.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'Beco Compostable Poo Bags - 96 Pack ',
      description: 'Made from a plant based material these bags are certified both home compostable and biodegradable. Made to be extra long and thick these bags protect your hands and cater for all poop bag sizes.',
      quantity: 1,
      vendor_price: 2.00,
      retail_price: 9.50,
      image_name: 'Beco-Compostable-Poo-Bags-96-Pack.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'Pedigree Easi Scoop Refill 50s',
      description: 'Clean easy method of removing droppings. A handy & hygenic device to help quickly & safely lift & dispose of dog mess. 50 refills for Easi Scoop.',
      quantity: 1,
      vendor_price: 1.30,
      retail_price: 5.50,
      image_name: 'Pedigree-Easi-Scoop-Refill-50s.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },
    {
      name: 'Bags On Board Grey Cushy Dispenser with 14 Bags',
      description: 'New Cushy waste pick-up dispensers are made from lightweight soft silicon, to give your pet extra comfort when out walking',
      quantity: 1,
      vendor_price: 0.50,
      retail_price: 3.50,
      image_name: 'Bags-On-Board-Grey-Cushy-Dispenser-with-14-Bags.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 15,
      pet_id: 1
    },


    //------DOG BEDS -------//
    {
      name: 'Top Paw® Grey Hearts Classic Pillow Dog Bed',
      description: 'This Top Paw Grey Hearts Core Classic Pillow Dog Bed is lightweight enough for your dog to sleep anywhere. It features a field of colorful hearts at the heart of its design, and features soft polyfill for optimal comfort.' ,
      quantity: 1,
      vendor_price: 4.00,
      retail_price: 10.50,
      image_name: 'Top-Paw®-Grey-Hearts-Classic-Pillow-Dog-Bed_files.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Lounger Dog Bed',
      description: 'This Top Paw Orthopedic Lounger Bed is overstuffed for a dreamy blend of support your dog will love.' ,
      quantity: 1,
      vendor_price: 7.00,
      retail_price: 15.50,
      image_name: 'Top-Paw®-Orthopedic-Lounger-Dog Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Memory Foam Quilt Mattress Dog Bed',
      description: 'The KONG SqueakAir Tennis Ball Dog Toy combines two classic dog toys -the tennis ball and the squeaker toy-to create the perfect fetch toy. This durable, high-quality Squeakair tennis ball will not wear down your dog\'s teeth' ,
      quantity: 1,
      vendor_price: 10.00,
      retail_price: 22.50,
      image_name: 'Top-Paw®-Orthopedic-Memory-Foam-Quilt-Mattress-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Cuddler Dog Bed',
      description: 'This Top Paw Grey Heather Orthopedic Cuddler Bed features dual layers the delicately balance softness and support.' ,
      quantity: 1,
      vendor_price: 10.00,
      retail_price: 22.50,
      image_name: 'Top-Paw®-Orthopedic-Cuddler-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Super Support Cuddler Dog Bed',
      description: 'Your pet will experience ultimate relaxation when cradled against the cushioned walls of the new and improved Top Paw Orthopedic Cuddler Bed.' ,
      quantity: 1,
      vendor_price: 10.00,
      retail_price: 22.50,
      image_name: 'Top-Paw®-Orthopedic-Super-Support-Cuddler-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'PAIKKA Recovery Burrow Pet Bed',
      description: 'The PAIKKA Recovery Burrow Bed supports restful sleep and offers a warm hiding place for your dog. ' ,
      quantity: 1,
      vendor_price: 7.00,
      retail_price: 17.30,
      image_name: 'PAIKKA-Recovery-Burrow-Pet-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },

    {
      name: 'Armarkat Soothing Blue Memory Foam Mattress Dog Bed',
      description: 'The Armarkat Model D08B medium bolstered pet bed is made with durable upholstery and a 7-inch thick memory foam mattress for maximum comfort.' ,
      quantity: 1,
      vendor_price: 10.00,
      retail_price: 22.50,
      image_name: 'Armarkat-Soothing-Blue-Memory-Foam-Mattress-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Carolina Pet Orthopedic Comfort Couch Personalized Dog Bed',
      description: 'You can personalize this product with one line of personalization and up to 10 characters including spaces.' ,
      quantity: 1,
      vendor_price: 9.00,
      retail_price: 20.50,
      image_name: 'Carolina-Pet-Orthopedic-Comfort-Couch-Personalized-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },







    //---Dog muzzle---//
    {
      name: 'Baskerville Ultra 2.0 Muzzle',
      description: 'Ergonomically shaped muzzle for dogs, extremely robust and padded with three attachment points.' ,
      quantity: 1,
      vendor_price: 1.00,
      retail_price: 6.50,
      image_name: 'baskerville-ultra-2.0-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Grreat Choice® Adjustable Mesh Dog Muzzle',
      description: 'Prevent unwanted behaviors including biting, barking and chewing with the Grreat Choice Adjustable Mesh Muzzle.' ,
      quantity: 3,
      vendor_price: 1.10,
      retail_price: 6.90,
      image_name: 'grreat-choice-adjustable-mesh-dog-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Baskerville Ultra Dog Muzzle',
      description: 'Prevent unwanted behaviors including biting, barking and chewing with the Grreat Choice Adjustable Mesh Muzzle.' ,
      quantity: 2,
      vendor_price: 7.00,
      retail_price: 16.50,
      image_name: 'baskerville-ultra-dog-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Mesh Muzzle',
      description: 'Prevent unwanted behaviors including biting, barking and chewing with the Grreat Choice Adjustable Mesh Muzzle.' ,
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 11.50,
      image_name: 'mesh-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Beaphar Gentle Anti-Pull',
      description: 'The Worlds Best Selling Headcollar That Stops Your Dog Pulling On The Lead. Adjustable Nose Loop For A Comfortable Fit. Kind Control And Effective Leadership.' ,
      quantity: 3,
      vendor_price: 3.00,
      retail_price: 12.50,
      image_name: 'beaphar-gentle-anti-pull.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Mikki Muzzle',
      description: 'Mikki Muzzle (boxer) Size 8' ,
      quantity: 3,
      vendor_price: 2.00,
      retail_price: 9.50,
      image_name: 'mikki-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },

    //---Dog transport boxes---//
    {
      name: 'HUNTER Transport Box Outdoor',
      description: 'Transport box for dogs, made from robust nylon and usable as a dog house, with extra stable metal frame and matching carry bag.' ,
      quantity: 2,
      vendor_price: 7.00,
      retail_price: 18.50,
      image_name: 'hunter-transport-box-outdoor.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Feria Transport Crate with Wheels',
      description: 'Transport box for dogs, ideal for flights and IATA compliant, with air vents to ensure circulation.' ,
      quantity: 2,
      vendor_price: 6.50,
      retail_price: 13.90,
      image_name: 'feria-transport-crate-with-wheels.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Mappa Transport Box',
      description: 'A plastic transport box for dogs, cats & small animals, removable entrance door, excellent ventilation system.' ,
      quantity: 2,
      vendor_price: 3.90,
      retail_price: 11.50,
      image_name: 'mappa-transport-box.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Ferplast Atlas Scenic Car Transport Box - Black',
      description: 'Car transport box for dogs, with a large mesh door and security closure, offering plenty of space.' ,
      quantity: 1,
      vendor_price: 2.00,
      retail_price: 7.50,
      image_name: 'ferplast-atlas-scenic-car-transport-box-black.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Easy Go Folding Transport Box',
      description: 'Comfortable transport box for dogs, perfect as a sleeping and relaxing area for camping trips or use at home.' ,
      quantity: 2,
      vendor_price: 3.00,
      retail_price: 11.55,
      image_name: 'easy-go-folding-transport-box.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Collapsible Transport Case',
      description: 'This extraordinary transport case is light and collapsible, ideal for transporting cats and small dogs weighing up to 6kg.' ,
      quantity: 2,
      vendor_price: 3.40,
      retail_price: 9.90,
      image_name: 'collapsible-transport-case.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },

    // -----Dog houses ----//

    {
      name: 'Petmate® Indigo Igloo-Style Dog House',
      description: 'The Petmate Indigo Dog House with Microban is a top-of-the-line igloo-shaped doghouse, and is a sturdy and spacious option that provides security and comfort for your dog.' ,
      quantity: 3,
      vendor_price: 15.00,
      retail_price: 44.50,
      image_name: 'Petmate®-Indigo-Igloo-Style-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Precision Pet Products® Outback Log Cabin Dog House',
      description: 'Assembles in three simple steps, a great mountain retreat just outside the backdoor' ,
      quantity: 3,
      vendor_price: 20.00,
      retail_price: 50.90,
      image_name: 'Precision-Pet-Products®-Outback-Log-Cabin-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'TRIXIEs Log Cabin Dog House',
      description: 'Give your pet a place to escape the elements with TRIXIEs Log Cabin Dog House with peaked roof.' ,
      quantity: 3,
      vendor_price: 22.90,
      retail_price: 50.50,
      image_name: 'TRIXIEs-Log-Cabin-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Petmate® Dogloo XT Dog House',
      description: 'etmates Dogloo XT is an outdoor doghouse that helps to protect your dog from the elements.' ,
      quantity: 2,
      vendor_price: 25.00,
      retail_price: 44.90,
      image_name: 'Petmate®-Dogloo-XT-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'New Age Pet® ecoFLEX™ Bunkhouse™ Dog House',
      description: 'The New Age ecoFLEX Bunkhouse Dog House offers many wonderful features that include a traditional peaked roof line, raised floors and a step-in design. ' ,
      quantity: 3,
      vendor_price: 29.90,
      retail_price: 57.75,
      image_name: 'New-Age-Pet®-ecoFLEX™-Bunkhouse™-Dog House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'TRIXIEs Rustic Dog House',
      description: 'Give your pet a place to escape the elements with TRIXIEs Rustic Dog House witha charming covered porch. ' ,
      quantity: 3,
      vendor_price: 12.00,
      retail_price: 29.50,
      image_name: 'TRIXIEs-Rustic-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Petmate® Husky Dog House',
      description: 'Provide your dog with a place to call his own and protection from the elements while outside with this Petmate Husky Doghouse.' ,
      quantity: 4,
      vendor_price: 27.70,
      retail_price: 55.90,
      image_name: 'Petmate®-Husky-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Trixie Pet Products Dogs Inn Dog House',
      description: 'Give your pet a place to escape the elements with TRIXIEs Dogs Inn Dog House.' ,
      quantity: 2,
      vendor_price: 40.00,
      retail_price: 89.50,
      image_name: 'Trixie-Pet-Products-Dogs-Inn-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },

    //------- Veterinary Products --------//

    //--- Prescription Mesicines For Dogs ----//

    {
      name: 'Hills® Prescription Diet® Metabolic + Mobility Weight + Joint Care Dog Food - Chicken',
      description: 'Nutritionists & veterinarians developed Hill Prescription Diet Metabolic + Mobility Canine clinical nutrition specially to help manage your dogs weight and joint health.' ,
      quantity: 3,
      vendor_price: 9.00,
      retail_price: 18.99,
      image_name: 'Hills®-Prescription-Diet®-Metabolic-Weight-Management-Dog-Food-Chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Ectoparasiticide spot-on for dog up to 4 kg',
      description: 'The medicines are PoM (Prescription only Medicines) and must be used under veterinarian instructions and according to the approved Leaflets by the National Organization for Medicines (EOF) in Greece.' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 11.99,
      image_name: 'Ectoparasiticide-spot-on-for-dog-up-to-4-kg.png',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Endo-ecto parasiticide spot-on for dog up to 4 kg',
      description: 'The medicines are PoM (Prescription only Medicines) and must be used under veterinarian instructions and according to the approved Leaflets by the National Organization for Medicines (EOF) in Greece.' ,
      quantity: 3,
      vendor_price: 5.00,
      retail_price: 12.99,
      image_name: 'Endo-ecto-parasiticide-spot-on-for-dog-up-to-4-kg.png',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Endo-ecto parasiticide spot-on for dog from 4 up to 10 kg',
      description: 'The medicines are PoM (Prescription only Medicines) and must be used under veterinarian instructions and according to the approved Leaflets by the National Organization for Medicines (EOF) in Greece.' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 10.99,
      image_name: 'Endo-ecto-parasiticide-spot-on-for-dog-from-4-up-to-10-kg.png',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Ectoparasiticide spot-on for dog from 4 up to 10 kg',
      description: 'The medicines are PoM (Prescription only Medicines) and must be used under veterinarian instructions and according to the approved Leaflets by the National Organization for Medicines (EOF) in Greece.' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 13,
      image_name: 'Ectoparasiticide-spot-on-for-dog-from-4-up-to-10-kg.png',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Hills® Prescription Diet® Metabolic Weight Management Dog Food - Chicken',
      description: 'Nourish your furry best friend with the complete and balanced nutrition of Hills Prescription Diet Metabolic Weight Management Chicken Flavor Dry Dog Food. ' ,
      quantity: 3,
      vendor_price: 9.00,
      retail_price: 19.00,
      image_name: 'Hills®-Prescription-Diet®-Metabolic-Weight-Management-Dog-Food-Chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Ectoparasiticide collar for dog above 8 kg',
      description: 'The medicines are PoM (Prescription only Medicines) and must be used under veterinarian instructions and according to the approved Leaflets by the National Organization for Medicines (EOF) in Greece.' ,
      quantity: 3,
      vendor_price: 7.50,
      retail_price: 13.50,
      image_name: 'Ectoparasiticide-collar-for-dog-above-8-kg.png',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },

    {
      name: 'Hills® Prescription Diet® Derm Defense Environmental Sensitivities Dog Food - Chicken',
      description: 'There are many types of environmental irritants that surround us and our pets each and every day including fleas, pollen and even the dust in our homes.' ,
      quantity: 3,
      vendor_price: 10.00,
      retail_price: 19.99,
      image_name: 'Hills®-Prescription-Diet®-Derm-Defense-Environmental-Sensitivities-Dog-Food-Chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 20,
      pet_id: 1
    },





    //--- Antibiotics For Dogs ----//

    {
      name: 'Enroquin (Enrofloxacin Flavored Tab) 22.7 mg, 68 mg, 136 mg',
      description: 'Enrofloxacin is an antibiotic that treats a broad range of susceptible bacterial infections.' ,
      quantity: 3,
      vendor_price: 12.00,
      retail_price: 21.99,
      image_name: 'Enroquin-(Enrofloxacin-Flavored-Tab)-22.7-mg,-68-mg,-136-mg.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Tylan Soluble Powder 100 gm',
      description: 'Tylan Soluble Powder is a powdered antibiotic that is useful in treating CRD (chronic respiratory disease), controlling American Foulbrood of honey bees, treating and controlling swine dysentery.' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 13.00,
      image_name: 'Tylan-Soluble-Powder-100-gm.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Albon Tablet',
      description: 'Albon is used to treat canine and feline soft tissue, enteric, genitourinary tract, and respiratory infections, including wound infections.' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 12.00,
      image_name: 'Albon-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Orbax Oral Suspension 30 mg/ml, 20 ml',
      description: 'Orbax Oral Suspension is used to treat wound, soft tissue, or urinary tract infections. It cannot be detected by the taste buds, which makes it easy to administer.' ,
      quantity: 3,
      vendor_price: 9.80,
      retail_price: 19.00,
      image_name: 'Orbax-Oral-Suspension-30-mg-ml,-20-ml.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Cefpoderm (Cefpodoxime Proxetil) Tablet',
      description: 'Cefpodoxime Proxetil is useful in treating skin infection.' ,
      quantity: 3,
      vendor_price: 8.25,
      retail_price: 16.99,
      image_name: 'Cefpoderm-(Cefpodoxime-Proxetil)-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Doxycycline Hyclate 100 mg Tablet',
      description: 'Doxycycline Hyclate is a bacteriostatic antibiotic that is useful in treating susceptible bacterial infections, including Lyme disease, chlamydia, and Rocky Mountain Spotted Fever.' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 13.00,
      image_name: 'Doxycycline-Hyclate-100-mg-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Ketoconazole 200 mg Tablet',
      description: 'Ketoconazole is used to treat yeast infections, lung infections (histoplasmosis), aspergillosis, blastomycosis, and Cryptococcus neoformans infections (cryptococcosis). ' ,
      quantity: 3,
      vendor_price: 8.30,
      retail_price: 19.00,
      image_name: 'Ketoconazole-200-mg-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'ANTIROBE (Clindamycin Hydrochloride) Capsules',
      description: 'Antirobe Capsules use Clindamycin Hydrochloride to treat soft tissue, dental, and bone infections caused by susceptible strains of bacteria.' ,
      quantity: 3,
      vendor_price: 4.87,
      retail_price: 15.00,
      image_name: 'ANTIROBE-(Clindamycin-Hydrochloride)-Capsules.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    //--- Wound Care For Dogs ----//

    {
      name: 'Calm Paws Behavior Support™ Protective Inflatable Pet Collarby Calm Paw',
      description: 'Help your pets injuries, rashes and wounds heal properly with this Calm Paws Pet Inflatable Protective Collar.' ,
      quantity: 3,
      vendor_price: 7.80,
      retail_price: 15.00,
      image_name: 'Calm-Paws-Behavior-Support™-Protective-Inflatable-Pet-Collarby-Calm-Paw.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'Calm Paws Behavior Support™ Calming E-Collar',
      description: 'Choose the safe and humane way to keep your pet from aggravating a healing wound or injury with the Calm Paws Calming E-Collar.' ,
      quantity: 3,
      vendor_price: 12.00,
      retail_price: 18.00,
      image_name: 'Calm-Paws-Behavior-Support™-Calming-E-Collar.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'Zymox® 0.5% Hydrocortisone Pet Ear Solution',
      description: 'Veterinarian recommended. ZYMOX Ear Solution with 0.5% hydrocortisone offers relief from ear infections on all animals including dogs and cats of any age. ' ,
      quantity: 3,
      vendor_price: 4.80,
      retail_price: 13.80,
      image_name: 'Zymox®-Hydrocortisone-Pet-Ear-Solution.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'MicrocynAH® Wound & Skin Pet Care',
      description: 'Helps keep wounds, , cuts, lacerations, abrasions, sores and skin irritations clean' ,
      quantity: 3,
      vendor_price: 7.45,
      retail_price: 15.00,
      image_name: 'McrocynAH®-Wound&Skin-Pet-Care.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'MicrocynAH® Opthalmic Pet Gel',
      description: 'Relieve burning in your pets eyes with MicrocynAH Opthalmic Gel.' ,
      quantity: 3,
      vendor_price: 9.50,
      retail_price: 14.80,
      image_name: 'MicrocynAH®-Opthalmic-Pet-Gel.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'Purina ONE SmartBlend Sensitive Systems Adult Dog Food - Salmon',
      description: 'Tend to your dogs specific nutritional needs with Purina ONE SmartBlend Natural Sensitive Systems Formula adult dry dog food.' ,
      quantity: 3,
      vendor_price: 10.99,
      retail_price: 18.00,
      image_name: 'Purina-ONE-SmartBlend-Sensitive-Systems-Adult-Dog-Food-Salmon.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'Zymox® 0.5% Hydrocortisone Skin Support Topical Cream',
      description: 'Veterinarian Recommended ZYMOX Topical Cream with 0.5% Hydrocortisone offers relief of hot spots, body fold irritations, wounds, cuts, and skin infections on all animals including dogs and cats of any age.' ,
      quantity: 3,
      vendor_price: 10.99,
      retail_price: 20.00,
      image_name: 'Zymox-Hydrocortisone-Skin-Support-Topical-Cream.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },

    {
      name: 'Dog MX™ Self Adhering Bandage Wrap',
      description: 'Protect damages and let wounds heal correctly with the help of Dog MX Self-Adhering Wrap. ' ,
      quantity: 3,
      vendor_price: 15.50,
      retail_price: 22.50,
      image_name: 'Dog-MX™-Self-Adhering-Bandage-Wrap.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 22,
      pet_id: 1
    },





    //--- Dogs fleas and wormers ----//

    {
      name: 'Frontline Plus Flea and Tick Treatment for Dogs (Large Dog, 45-88 Pounds, 6 Doses)',
      description: 'Kills fleas and ticks: Frontline flea and tick treatment for dogs kills fleas, flea eggs, lice, and ticks.' ,
      quantity: 3,
      vendor_price: 5.99,
      retail_price: 17.00,
      image_name: 'Frontline-Plus-Flea-and-Tick-Treatment-for-Dogs-(Large-Dog,-45-88-Pounds,-6-Doses).jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'TevraPet Activate II Flea and Tick Prevention for Dogs | Large 21-55 lbs | 4 Months | Fast Acting, Repels Mosquitoes',
      description: 'Effective - This broad spectrum flea and tick topical kills all stages of fleas, flea eggs, ticks, and lice' ,
      quantity: 3,
      vendor_price: 9.99,
      retail_price: 20.00,
      image_name: 'TevraPet-Activate-Flea-and-Tick-Prevention-for-Dogs-Large-21-55-lbs-4-Months-Fast-Acting,-Repels-Mosquitoes.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'CapAction Oral Flea Treatment Large Dog 6ct',
      description: 'TREAT RE-INFESTATIONS FAST: If your pet gets re-invested with fleas simply apply another dose as often as once a day. ' ,
      quantity: 3,
      vendor_price: 15.00,
      retail_price: 26.00,
      image_name: 'CapAction-Oral-Flea-Treatment-Large-Dog-6ct.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'K9 advantix II Flea and Tick Prevention for Large Dogs, 21-55 Pounds',
      description: 'Starts working to kill fleas within 12 hours and keeps working for 30 days' ,
      quantity: 3,
      vendor_price: 9.99,
      retail_price: 19.00,
      image_name: 'K9-advantix-Flea-and-Tick-Prevention-for-Large-Dogs,-21-55-Pounds.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'Classics Lime Sulfur Dip ',
      description: '8 oz Pet Care and Veterinary Treatment Agains Ringworm, Mange, Lice, Flea, Itchy and Dry Skin Extra Strength Formula - Safe Solution for Dog, Cat, Puppy, Kitten, Horse' ,
      quantity: 3,
      vendor_price: 8.99,
      retail_price: 17.00,
      image_name: 'Classics-Lime-Sulfur-Dip_.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: '8in1 Safe-Guard Canine Dewormer for Small Dogs',
      description: 'Safe-Guard treats against Tapeworms, Roundworms, Hookworms, and Whipworms' ,
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 13.99,
      image_name: '8in1-Safe-Guard-Canine-Dewormer-for-Small-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'TevraPet Activate II Flea and Tick Prevention for Dogs ',
      description: '8 Months Supply | Medicine for Treatment and Control | Topical Drops' ,
      quantity: 3,
      vendor_price: 7.99,
      retail_price: 16.00,
      image_name: 'TevraPet-Activate-Flea-and-Tick-Prevention-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'Bayer Tapeworm Dewormer (praziquantel tablets) for Dogs',
      description: '5-count bottle of tapeworm dewormer for dogs' ,
      quantity: 3,
      vendor_price: 7.85,
      retail_price: 19.00,
      image_name: 'Bayer-Tapeworm-Dewormer-(praziquantel-tablets)-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },




    // Dog Vitamins Minerals Electrolytes

    {
      name: 'Vitamin K1 for Dogs and Cats 50 mg, 50 Capsules',
      description: 'Vitamin K1 Capsules are vitamin supplements that promote health. ' ,
      quantity: 3,
      vendor_price: 5.00,
      retail_price: 13.00,
      image_name: 'Vitamin-K1-for-Dogs-and-Cats-50-mg,-50-Capsules.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },

    {
      name: 'Vitamin B Complex 150 mg - ml - 100 ml',
      description: 'Vitamin B Complex delivers a source of Vitamin B.' ,
      quantity: 3,
      vendor_price: 7.99,
      retail_price: 15.00,
      image_name: 'Vitamin-B-Complex-150-mg-ml-100-ml.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },

    {
      name: 'NaturVet All-in-One Dog Supplement - for Joint Support, Digestion, Skin, Coat Care',
      description: 'Dog Vitamins, Minerals, Omega-3, 6, 9 – Wheat-Free Supplements for Dogs ' ,
      quantity: 3,
      vendor_price: 7.00,
      retail_price: 18.00,
      image_name: 'NaturVet-All-in-One-Dog-Supplement-for-Joint-Support,Digestion,Skin,Coat-Care.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },


    {
      name: 'True Earth Mineral Spa Dog Shampoo - Cherry Blossom',
      description: 'Wet coat. Then apply a generous amount of shampoo while massaging deeply into the coat for 2-3 minutes. ' ,
      quantity: 3,
      vendor_price: 5.00,
      retail_price: 11.99,
      image_name: 'True-Earth-Mineral-Spa-Dog-Shampoo-Cherry-Blossom.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },



    {
      name: 'Dog Greens- Organic and Wild Harvested Vitamin and Mineral Supplement for Dogs',
      description: 'Add to Home Made Dog Food, RAW Food or Kibble' ,
      quantity: 3,
      vendor_price: 15.00,
      retail_price: 26.00,
      image_name: 'Dog-Greens-Organic-and-Wild-Harvested-Vitamin-and-Mineral-Supplement-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },


    {
      name: 'Annamaet Enhance Vitamins and Mineral Supplement for Raw and Home Cook Meals for Dogs, 8.5-oz jar',
      description: 'Annamaet ENHANCE is a vitamin and mineral supplement designed to simply balance your dog’s home-prepared or raw diet.' ,
      quantity: 3,
      vendor_price: 10.00,
      retail_price: 19.99,
      image_name: 'Annamaet-Enhance-Vitamins-and-Mineral-Supplement-for-Raw-and-Home-Cook-Meals-for-Dogs,-8.5-oz-jar.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },

    {
      name: 'Wholistic Pet Organics Canine Complete: Dog Multivitamin for Total Body Health',
      description: 'Dog Supplement with Vitamins, Minerals, Prebiotics, Probiotics, Antioxidants and More' ,
      quantity: 3,
      vendor_price: 9.99,
      retail_price: 19.00,
      image_name: 'Wholistic-Pet-Organics-Canine-Complete-Dog-Multivitamin-for-Total-Body-Health.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },

    {
      name: 'Nupro Nutri-Pet Research Electrolytes for Dogs',
      description: 'Maintain proper fluid balance in the blood and tissues' ,
      quantity: 3,
      vendor_price: 12.00,
      retail_price: 23.00,
      image_name: 'Nupro-Nutri-Pet-Research-Electrolytes-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },



    {
      name: 'PetHonesty 10 in 1 Dog Multivitamin with Glucosamine',
      description: '10-For-1 Multivitamin chews combine a well-rounded blend of the most essential vitamins and supplements for dogs\' overall daily health including glucosamine, probiotics, vitamins, and omega\'s.' ,
      quantity: 3,
      vendor_price: 14.50,
      retail_price: 25.00,
      image_name: 'PetHonesty-10-in-1-Dog-Multivitamin-with-Glucosamine.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },
    {
      name: 'ProSense Vitamin Solutions 90 Count, Chewable Tablets for Dogs',
      description: 'Formulated with vitamins, minerals and antioxidants to support overall canine wellness' ,
      quantity: 3,
      vendor_price: 10.99,
      retail_price: 19.99,
      image_name: 'ProSense-Vitamin-Solutions-90-Count-Chewable-Tablets.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },
    {
      name: 'VetIQ Supplements for Dogs',
      description: 'Formulated to help support Active Brain Function, Strong Immune System, and Healthy Digestive System.' ,
      quantity: 3,
      vendor_price: 9.00,
      retail_price: 18.99,
      image_name: 'VetIQ-Supplements-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },
    {
      name: 'Pet Naturals - Daily Multi for Dogs, Daily Multivitamin Formula, 150 Bite Sized Chews',
      description: 'Daily Multi for dogs is a veterinarian formulated supplement for use in dogs of all ages. It includes 28 nutrients to help keep dogs of all ages in peak condition.' ,
      quantity: 3,
      vendor_price: 7.99,
      retail_price: 15.00,
      image_name: 'Pet-Naturals-Daily-Multi-for-Dogs-Daily-Multivitamin-Formula.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },
    {
      name: 'Nutramax Laboratories 21 Count Crananidin Pet Supplement',
      description: 'Supports urinary tract by stopping bacteria from sticking in the urinary tract, allowing them to be flushed out in the urine.Helps to prevent urinary tract infections',
      quantity: 3,
      vendor_price: 10.00,
      retail_price: 19.00,
      image_name: 'Nutramax-Laboratories-21-Count-Crananidin-Pet-Supplement.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },
    {
      name: 'Natural Dog Company Multivitamin Supplement with Turmeric and Fish Oil',
      description: 'Effective dog multivitamin includes (1) 90 Count of Natural Dog Company Multivitamin Supplement Chews that are ideal for dogs of any age, size or breed.',
      quantity: 3,
      vendor_price: 10.00,
      retail_price: 18.00,
      image_name: 'Natural-Dog-Company-Multivitamin-Supplement-with-Turmeric-and-Fish-Oil.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 24,
      pet_id: 1
    },







    //--------------------- Cat ------------------------------//
    //--- Food ---//
    //--- Dry Food ---//
    {
      name: 'Hills Science Diet Indoor Adult Dry Cat Food - Chicken',
      description: 'During your cats adult years, you want to feed nutrition that supports everyday health and digestion.' ,
      quantity: 3,
      vendor_price: 10.99,
      retail_price: 19.00,
      image_name: 'hills-science-diet-indoor-adult-dry-cat-food-chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Purina ONE SmartBlend Adult Cat Food',
      description: 'Serve your cat a plate of the deliciously crunchy bites and meaty, tender morsels shes been craving with Purina ONE Tender Selects Blend With Real Chicken adult dry cat food.' ,
      quantity: 3,
      vendor_price: 4.50,
      retail_price: 14.99,
      image_name: 'purina-one-smartBlend-adult-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Purina Pro Plan Essentials Adult Cat Food',
      description: 'Capture your cats curiosity when you fill her dish with Purina Pro Plan COMPLETE ESSENTIALS Chicken & Rice Formula adult dry cat food at mealtime.' ,
      quantity: 3,
      vendor_price: 7.00,
      retail_price: 17.00,
      image_name: 'purina-pro-plan-essentials-adult-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Purina Friskies® Seafood Sensations Cat Food',
      description: 'Pour a purr-worthy dish full of yum with Purina Friskies Seafood Sensations dry cat food.' ,
      quantity: 2,
      vendor_price: 8.20,
      retail_price: 18.00,
      image_name: 'purina-friskies-seafood-sensations-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Authority Indoor Adult Cat Food - Chicken & Rice',
      description: 'Provide delicious taste while promoting better everyday health in your indoor kitty by serving Authority Everyday Health Adult Indoor Cat Food.' ,
      quantity: 3,
      vendor_price: 11.00,
      retail_price: 25.00,
      image_name: 'authority-indoor-adult-cat-food-chicken-&-rice.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Rachael Ray Nutrish Indoor Complete Cat Food',
      description: 'Rachael Ray Nutrish Indoor Complete Chicken with Lentils & Salmon Recipe Natural Dry Cat Food is a simple, natural food created to meet the specific needs of indoor cats.' ,
      quantity: 3,
      vendor_price: 10.00,
      retail_price: 18.00,
      image_name: 'rachael-ray-nutrish-indoor-complete-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Hills Science Diet Kitten Dry Cat Food - Chicken',
      description: 'Your little kitten needs premium nutrition that can keep up with their active lifestyle.' ,
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 18.00,
      image_name: 'hills-science-diet-kitten-dry-cat-food-chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Royal Canin Feline Health Nutrition Indoor Adult Cat Food',
      description: 'Your indoor cats lifestyle of napping, grooming, and grazing requires a diet made for their nutritional needs.' ,
      quantity: 2,
      vendor_price: 9.99,
      retail_price: 18.00,
      image_name: 'royal-canin-feline-health-nutrition-indoor-adult-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },

    //--- Cat Cans ---//
    {
      name: 'Applaws Cat Food Cans 156g - Tuna / Fish',
      description: 'Applaws premium wet food for cats - 100% natural cat food without artificial preservatives.' ,
      quantity: 3,
      vendor_price: 8.99,
      retail_price: 19.00,
      image_name: 'applaws-cat-food-cans-156g-tuna-fish.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Applaws Cat Food Cans 156g - Tuna / Fish',
      description: 'The delicate broth and tender meat pieces are the perfect way to entice your cat to drink more.' ,
      quantity: 3,
      vendor_price: 12.00,
      retail_price: 23.00,
      image_name: 'smilla-cat-drink-with-chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: '70g Applaws Mousse',
      description: 'Delicious supplementary food for adult cats, in a soft, light mousse with natural ingredients.' ,
      quantity: 4,
      vendor_price: 10.00,
      retail_price: 19.00,
      image_name: '70g-applaws-mousse.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Bozita Canned Food 6 x 410g',
      description: 'Bozita cat food is a complete food from Sweden for cats of all lifestyles and ages.' ,
      quantity: 4,
      vendor_price: 9.99,
      retail_price: 18.00,
      image_name: 'bozita-canned-food-6x410g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Purina Pro Plan Cat Food - Chicken & Turkey',
      description: 'Let your cat pick her mealtime favorites when you stock your pantry with this Purina Pro Plan Chicken and Turkey Favorites adult wet cat food variety pack.' ,
      quantity: 4,
      vendor_price: 10.00,
      retail_price: 20.00,
      image_name: 'purina-pro-plan-cat-food-chicken&turkey.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Royal Canin® Feline Health Nutrition™ Instinctive Kitten Food',
      description: 'Royal Canin Thin Slices in Gravy is formulated to match the instinctively preferred macronutrient profile of your energetic kitten, ensuring long-time palatability.' ,
      quantity: 4,
      vendor_price: 8.00,
      retail_price: 17.00,
      image_name: 'royal-canin-feline-health-nutrition-instinctive-kitten-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    //--- Cat Treats ---//
    {
      name: 'thrive Cat Treats',
      description: '100% natural and additive-free cat snacks made only from 100% fresh meat or fish.' ,
      quantity: 4,
      vendor_price: 6.99,
      retail_price: 17.00,
      image_name: 'thrive-cat-treats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Dreamies Mix Cat Treats 60g',
      description: 'Each pack of Dreamies Mix Cat Treats contains 2 delicious flavours.' ,
      quantity: 4,
      vendor_price: 10.00,
      retail_price: 23.00,
      image_name: 'dreamies-mix-cat-treats-60g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Big Pack Dreamies Cat Treats 180g',
      description: 'All cats dream about these crunchy squares filled with a scrumptious soft centre.' ,
      quantity: 3,
      vendor_price: 11.00,
      retail_price: 22.00,
      image_name: 'big-pack-dreamies-cat-treats-180g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Catz Finefood Meatz Treats',
      description: 'These high-quality cat treats boast 98% tender Swiss meat, with just a single protein source per variety.' ,
      quantity: 4,
      vendor_price: 10.99,
      retail_price: 22.00,
      image_name: 'catz-finefood-meatz-treats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Only Natural Pet Hemp Calming Support Soft Dog Chews',
      description: 'Only Natural Pet Just Relax Herbal Calming Support Chews are holistically formulated natural calming treat for dogs to help reduce stress-related behavior and promise relaxation.' ,
      quantity: 2,
      vendor_price: 10.99,
      retail_price: 18.00,
      image_name: 'only-natural-pet-just-relax-herbal-calming-support-soft-dog-chews.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },

    //---Cat shampoo---//
    {
      name: 'Trixie Neutral Shampoo',
      description: 'Moisturising Trixie Neutral shampoo is suitable for all breeds of dogs and cats.' ,
      quantity: 3,
      vendor_price: 9.50,
      retail_price: 20.00,
      image_name: 'trixie-neutral-shampoo.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 29,
      pet_id: 2
    },
    {
      name: 'Advantage® Flea & Tick Kitten and Cat Shampoo',
      description: 'Bayer Advantage Treatment Shampoo for cats and kittens kills fleas and ticks through contact.' ,
      quantity: 3,
      vendor_price: 8.00,
      retail_price: 17.00,
      image_name: 'advantage-flea&tick-kitten-and-cat-shampoo.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 29,
      pet_id: 2
    },
    {
      name: 'Whisker City® Cat Hypoallergenic Shampoo - Unscented',
      description: 'Help your cat feel squeaky clean with a sweet and gentle vanilla shampoo that helps calm sensitive skin: Whisker City Hypoallergenic Shampoo.' ,
      quantity: 4,
      vendor_price: 8.00,
      retail_price: 19.00,
      image_name: 'whisker-city-cat-hypoallergenic-shampoo.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 29,
      pet_id: 2
    },
    {
      name: 'Vets Best Flea + Tick Waterless Cat Bath Foam',
      description: 'Vets Best Flea & Tick Waterless Bath Foam for Cats eliminates fleas, flea eggs, and ticks by contact, leaving your cat clean and spa day-fresh.' ,
      quantity: 4,
      vendor_price: 6.99,
      retail_price: 17.00,
      image_name: 'vets-best-flea-tick-waterless-cat-bath-foam.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 29,
      pet_id: 2
    },
    {
      name: 'Pro Plan LIVECLEAR Rinse-Free Allergen Reducing Cat Shampoo',
      description: 'Enjoy the time you spend with your exceptional cat to the fullest with Purina Pro Plan LIVECLEAR Rinse Free Allergen Reducing dry shampoo for cats.' ,
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 19.00,
      image_name: 'pro-plan-liveclear-rinse-free-allergen-reducing-cat-shampoo.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 29,
      pet_id: 2
    },
    {
      name: 'CHI for Cats 2-in-1 Conditioning Shampoo',
      description: 'Chi for Cats 2-in-1 Conditioning Shampoo provides moisturizing and balancing ingredients that penetrate the coats cuticle, strengthening the follicles of the fur as they nourish it from the inside out.' ,
      quantity: 5,
      vendor_price: 6.99,
      retail_price: 17.00,
      image_name: 'chi-for-cats-2-in-1-conditioning-shampoo.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 29,
      pet_id: 2
    },

    //---Cat brushes and combs---//
    {
      name: 'KONG Massage Brush Zoom Groom',
      description: 'Special cat-shaped massage brush from KONG, for blissful fur care and gentle attention' ,
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 15.00,
      image_name: 'kong-massage-brush-zoom-groom.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'Trixie Corner Massage Brush',
      description: 'Brush for cats to clean their coats, affixes to wall corner, flexible bristles, cats can groom themselves whenever they like.' ,
      quantity: 2,
      vendor_price: 4.99,
      retail_price: 13.99,
      image_name: 'trixie-corner-massage-brush.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'Double-Sided Wellness Glove',
      description: 'Wellness glove with two sides, ideal for caring for your dog or cat’s coat and perfect for left- or right-handed owners.' ,
      quantity: 3,
      vendor_price: 5.00,
      retail_price: 16.00,
      image_name: 'double-sided-wellness-glove.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'FURminator Bathing Brush',
      description: 'Shampoo brush for dogs and cats, easy to refill and with a dispenser button on the top, with soft, flexible bristles' ,
      quantity: 3,
      vendor_price: 5.99,
      retail_price: 16.00,
      image_name: 'furminator-bathing-brush.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'FURminator Short Hair Undercoat deShedding Cat Tool',
      description: 'The FURminator Undercoat deShedding Tool for cats removes the loose hair from shedding, and helps keep the coat dirt- and debris-free.' ,
      quantity: 4,
      vendor_price: 8.00,
      retail_price: 17.00,
      image_name: 'furminator-short-hair-undercoat-deshedding-cat-tool.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'Whisker City Soft Slicker Cat Brush',
      description: 'Keep your kittys skin and coat looking their best with the help of this Whisker City Soft Slicker Brush.' ,
      quantity: 4,
      vendor_price: 6.5,
      retail_price: 17.00,
      image_name: 'whisker-city-soft-slicker-cat-brush.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'Whisker City Cat Grooming Glove',
      description: 'Make bath time special and enjoyable for your kitty using this Whisker City All in 1 Grooming Glove.' ,
      quantity: 2,
      vendor_price: 6.99,
      retail_price: 17.00,
      image_name: 'whisker-city-cat-grooming-glove.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },
    {
      name: 'Whisker City Cat Dematter',
      description: 'Remove mats from your kittys hair in quick and easy fashion using this Whisker City Dematter.' ,
      quantity: 2,
      vendor_price: 8.99,
      retail_price: 19.00,
      image_name: 'whisker-city-cat-dematter.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 30,
      pet_id: 2
    },

    //---Cat scissors & clippers---//
    {
      name: 'Trixie Deluxe Claw Clippers - Large',
      description: 'Claw clippers with safety lock and adjustable blades.' ,
      quantity: 3,
      vendor_price: 5.99,
      retail_price: 15.00,
      image_name: 'trixie-deluxe-claw-clippers-large.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 31,
      pet_id: 2
    },
    {
      name: 'Trixie Pet Scissors for Face and Paws',
      description: 'These rounded scissors will prevent injuries when you are trimming the fur on your pets face or paws.' ,
      quantity: 3,
      vendor_price: 4.99,
      retail_price: 13.99,
      image_name: 'trixie-pet-scissors-for-face-and-paws.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 31,
      pet_id: 2
    },
    {
      name: 'CHI® for Cats Nail Scissors',
      description: 'The Chi for Cats Nail Scissors help you groom your cats nails in a clean and comfortable way.' ,
      quantity: 4,
      vendor_price: 6.00,
      retail_price: 17.00,
      image_name: 'chi-for-cats-nail-scissors.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 31,
      pet_id: 2
    },
    {
      name: 'Whisker City Cat Nail Scissors',
      description: 'Help your kitty keep her nails in tip top shape with these Whisker City Nails Scissors.' ,
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 16.99,
      image_name: 'whisker-city-cat-nail-scissors.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 6,
      subcategory_id: 31,
      pet_id: 2
    },

    //*********CAT ACCESSORIES *******//
    //----Cat Toys------///

    {
      name: 'KONG® Eight Track Cat Toy',
      description: 'Promote healthy exercise while fulfilling your cat\'s instinctual desire to chase, hunt and capture with the KONG Eight Track.' ,
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 16.00,
      image_name: 'KONG-Eight-Track-Cat-Toy.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'Good Girl Laser Mouse Cat Toy',
      description: 'The Good Girl Laser Mouse Cat Toy projects a mouse shaped laser beam that your cat will love to chase.' ,
      quantity: 4,
      vendor_price: 6.50,
      retail_price: 17.00,
      image_name: 'good-girl-laser-mouse-cat-toy.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'Catit Senses 2.0 Self Groomer',
      description: 'The Catit Senses 2.0 Self Groomer provides your cat with a constant source of rubbing and grooming pleasure.' ,
      quantity: 4,
      vendor_price: 4.99,
      retail_price: 14.00,
      image_name: 'catit-senses-20-self-groomer.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'KONG Cat Teaser Snake Catnip Toy',
      description: 'With natural feathers and an irresistible rattle sound, this soft, plush KONG Cat Snake Teaser is a great cat toy!' ,
      quantity: 4,
      vendor_price: 4.99,
      retail_price: 15.00,
      image_name: 'kong-cat-teaser-snake.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'Play N Squeak Twice The Mice',
      description: 'Now your pet can hunt two mice concurrently and make use of all its innate preying instincts, while its agility, and alertness will be pushed to the absolute limit.' ,
      quantity: 4,
      vendor_price: 5.00,
      retail_price: 14.00,
      image_name: 'Play-N-Squeak-Twice-The-Mice.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'Ancol Super Cat Play Tunnel',
      description: 'The Ancol Super Cat Play Tunnel will help provide hours of fun and entertainment for your beloved cat.' ,
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 17.00,
      image_name: 'Ancol-Super-Cat-Play-Tunnel.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'FroliCat Bolt Automatic Laser Light',
      description: 'Simply hold the toy in your hand or place it on a flat surface, turn it on and watch your pet pounce, chase and bat at the exciting laser patterns.' ,
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 18.00,
      image_name: 'FroliCat-Bolt-Automatic-Laser-Light.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },
    {
      name: 'KONG Play Spaces SeaQuins Cat Toy',
      description: 'Uniquely designed to stay perched open, this toy fulfills natural hiding needs while supporting engaging stalk and grab play.' ,
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 18.00,
      image_name: 'KONG-Play-Spaces-SeaQuins-Cat-Toy.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 32,
      pet_id: 2
    },

    ///----Cat Litter Boxes------///

    {
      name: 'Frieda Litter Box Enclosure',
      description: 'A house like this is a great option for giving your feline friend a spot to take care of their business while contributing to your home\'s style.' ,
      quantity: 4,
      vendor_price: 6.99,
      retail_price: 16.00,
      image_name: 'Frieda-Litter-Box-Enclosure.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Ginny Litter Box Enclosure',
      description: 'Hide your kitty\'s business with this versatile litter box and end table combo. Perfect for your master bath, laundry room, or den.' ,
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 18.00,
      image_name: 'Ginny-Litter-Box-Enclosure.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Plastic Standard Litter Box with Scoop',
      description: 'Large open litter pan with an extra-tall shield to help contain litter scatter and spray. High-polished interior surfaces to make cleaning a snap.' ,
      quantity: 4,
      vendor_price: 4.99,
      retail_price: 14.99,
      image_name: 'Plastic-Standard-Litter-Box-with-Scoop.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Litter Box Enclosure',
      description: 'Hide your kitties business with this versatile litter box and end table combo.' ,
      quantity: 4,
      vendor_price: 6.00,
      retail_price: 15.00,
      image_name: 'Litter-Box-Enclosure.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Elijah Covered Hidden Cat Litter Box with Decorative Planter',
      description: 'Hide the cat litter at your home in a stylish way with this Archie & Oscar™ Covered Hidden Cat Litter Box / Decorative Planter' ,
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 20.00,
      image_name: 'Elijah-Covered-Hidden-Cat-Box-with-Decorative-Planter.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Cathey Litter Box Enclosure',
      description: 'Cats are lovable, but their litter boxes? Not so much. Keep that essential around without disrupting your ensemble with this classic cabinet' ,
      quantity: 4,
      vendor_price: 6.50,
      retail_price: 19.00,
      image_name: 'Cathey-Litter-Box-Enclosure.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Basic Hooded Standard Litter Box',
      description: 'Combines price, appearance, and quality craftsmanships with multiple features into one litter box making this a great starter pan for your cat. ' ,
      quantity: 4,
      vendor_price: 7.25,
      retail_price: 19.00,
      image_name: 'Basic-Hooded-Standard-Litter-Box.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Sulema Litter Box Enclosure',
      description: 'The divider can be removed for a more spacious room. With a large top, it can double as a side table or nightstand.' ,
      quantity: 4,
      vendor_price: 4.85,
      retail_price: 16.00,
      image_name: 'Sulema-Litter-Box-Enclosure.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Fason Litter Box Enclosure with Scoop',
      description: 'The divider can be removed for a more spacious room. With a large top, it can double as a side table or nightstand.' ,
      quantity: 4,
      vendor_price: 4.00,
      retail_price: 13.00,
      image_name: 'Litter-Box-Enclosure-with-Scoop.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },
    {
      name: 'Cat Litter Box Enclosure,Washroom Bench',
      description: 'Amazing furniture to use both as home decor and for cat privacy. Give you a great odorless home.' ,
      quantity: 4,
      vendor_price: 5.85,
      retail_price: 18.00,
      image_name: 'Cat-Litter-Box-Enclosure-Washroom-Bench.jpeg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 33,
      pet_id: 2
    },

    ///----Cat Clothes------///

    {
      name: 'Cat Solid Bat Wing',
      description: 'Bat wings for your kitten',
      quantity: 4,
      vendor_price: 10.00,
      retail_price: 19.99,
      image_name: 'Cat-Solid-Bat-Wing.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'Plain Pet Hoodie',
      description: 'Plain Pet Hoodie for your kitten',
      quantity: 4,
      vendor_price: 6.00,
      retail_price: 15.00,
      image_name: 'Plain-Pet-Hoodie.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'PETSIN Solid Color Cat Sweater',
      description: 'Solid Color Cat Sweater for your kitten',
      quantity: 4,
      vendor_price: 4.99,
      retail_price: 15.00,
      image_name: 'PETSIN-Solid-Color-Cat-Sweater.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'Slogan Graphic Pet Tee',
      description: 'Slogan Graphic Pet Tee for your kitten',
      quantity: 4,
      vendor_price: 7.99,
      retail_price: 19.00,
      image_name: 'Slogan-Graphic-Pet-Tee.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'Plain Pet Recovery Suit',
      description: 'Plain Pet Recovery Suit for your kitten',
      quantity: 4,
      vendor_price: 8.50,
      retail_price: 20.00,
      image_name: 'Plain-Pet-Recovery-Suit.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'Bow Decor Pet Lace Dress',
      description: 'Bow Decor Pet Lace Dress',
      quantity: 4,
      vendor_price: 6.00,
      retail_price: 17.00,
      image_name: 'Bow-Decor-Pet-Lace-Dress.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'PETSIN Argyle Turtleneck Cat Sweater',
      description: 'Turtleneck Cat Sweater',
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 19.00,
      image_name: 'PETSIN-Argyle-Turtleneck-Cat-Sweater.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    {
      name: 'Cowboy Design Pet Costume',
      description: 'Cowboy Design Pet Costume',
      quantity: 4,
      vendor_price: 8.00,
      retail_price: 20.00,
      image_name: 'Cowboy-Design-Pet-Costume.webp',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 34,
      pet_id: 2
    },
    
     //-------- Cat Collars ---------//

    {
      name: 'Red Dingo Nylon Reflective Breakaway Cat Collar with Bell',
      description: 'Take your cat outdoors safely in a versatile, good looking collar. With style and strength, the quality nylon webbing and abrasion resistant ribbon ensure long lasting comfort. Featuring a safety release fish clip and wildlife protection bell.',
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 6.90,
      image_name: 'Red-Dingo-Nylon-Reflective-Breakaway-Cat-Collar-with-Bell.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },

    {
      name: 'Pawtitas Glow in the Dark Nylon Breakaway Cat Collar with Bell',
      description: 'Take your cat outdoors safely in a versatile, good looking collar. With style and strength, the quality nylon webbing and abrasion resistant ribbon ensure long lasting comfort. Featuring a safety release fish clip and wildlife protection bell.',
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 9.90,
      image_name: 'Pawtitas-Glow-in-the–Nylon-Cat-Collar-with-Bell.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },
    {
      name: 'Country Brook Design Paint Splatter Polyester Breakaway Cat Collar with Bell',
      description: 'Add some color to your kitty’s life with the Paint Splatter Breakaway Cat Collar. This lightweight collar was made in the USA from a soft yet durable polyester webbing that won’t scratch or irritate your furry friend’s sensitive skin.',
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 9.90,
      image_name: 'Country-Brook-Design-Paint-Splatter-Polyester-Breakaway-Cat-Collar-with-Bell.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },
    {
      name: 'Country Brook Design Tie-Dye Flowers Polyester Breakaway Cat Collar with Bell',
      description: 'You and your best bud will be feeling the love and good vibes with the Tie-Dye Flowers Breakaway Cat Collar.',
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 9.90,
      image_name: 'Country-Brook-Design-Tie-Flowers-Polyester-Breakaway-Cat-Collar-with-Bell.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },
    {
      name: 'Safe Cat Snag-Proof Polyester Breakaway Cat Collar with Bell',
      description: 'The Safe Cat Adjustable Snag-Proof Breakaway Cat Collar helps keep your feline friend safe through every pounce and purr.',
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 6.50,
      image_name: 'Safe-Cat-Snag-Proof-Polyester-Breakaway-Cat-Collar-with-Bell.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },
    {
      name: 'Necoichi Japanese Kimono Bow Tie Cotton Breakaway Cat Collar with Bell',
      description: 'Upgrade your kitty’s swagger with the Necoichi Japanese Kimono Style Bow Tie Cat Collar. Whether he’s an indoor cuddle buddy or an outdoor adventurist―or both―this handcrafted collar is purr-fect for daily wear.',
      quantity: 4,
      vendor_price: 3.00,
      retail_price: 9.90,
      image_name: 'Necoichi-Japanese-Kimono-Bow-Tie-Cotton-Breakaway-Cat-Collar-with-Bell.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },
    {
      name: 'Pettsie Cotton Breakaway Cat Collar with Friendship Bracelet, Red',
      description: 'Share a special and fashionable connection with your feline best friend with the Pettsie Cat Collar with Friendship Bracelet. Your kitty will be able to sport a unique and comfy 100% cotton collar',
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 15.90,
      image_name: 'Pettsie-Cotton-Cat-Collar-with-Friendship-Bracele-Red.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },
    {
      name: 'Pettsie Heart Cotton Breakaway Cat Collar with Friendship Bracelet',
      description: 'Share a special and fashionable connection with your feline best friend with the Pettsie Heart Cat Collar with Friendship Bracelet.',
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 18.99,
      image_name: 'Pettsie-Heart-Breakaway-Cat-Collar-with-Friendship-Bracelet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 35,
      pet_id: 2
    },

    //-------- Cat Bowls & Feeding ---------//
    {
      name: 'Mason Cash Lettered High Water Bowl',
      description: 'This bowl features thick sides to prevent chipping, is made from heavy stoneware to ensure durability & keep the food cool and fresh.',
      quantity: 3,
      vendor_price: 4.00,
      retail_price: 9.00,
      image_name: 'mason-cash-lettered-high-water-bowl.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Food Scoop - 1 Cup',
      description: 'Food Scoop - 1 Cup.',
      quantity: 6,
      vendor_price: 0.50,
      retail_price: 2.00,
      image_name: 'food-scoop-1-cup.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Mason Cash Cat Drinking Saucer - 5',
      description: 'This bowl features thick sides to prevent chipping, is made from heavy stoneware to ensure durability & keep the food cool and fresh.',
      quantity: 5,
      vendor_price: 1.50,
      retail_price: 4.00,
      image_name: 'mason-cash-cat-drinking-saucer.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Radiator Heat Transferring Cat Bed',
      description: 'This Radiator Pet Bed simply attaches to radiators in the home to offer cats and small dogs a warm place to sleep and rest.',
      quantity: 2,
      vendor_price: 3.50,
      retail_price: 8.00,
      image_name: 'radiator-cat-bed.png',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Catit 2.0 Flower Stainless Steel Water Fountain',
      description: 'Cat drinking fountain with stainless steel top, the shallow hygienic top doesn’t irritate your cat’s whiskers or skin.',
      quantity: 2,
      vendor_price: 13.00,
      retail_price: 27.00,
      image_name: 'catit-2-flower-stainless-steel-water-fountain.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Snugglesafe Microwavable Heat Pad with Cozy Cover',
      description: 'The Snugglesafe Heatpad is a fabulous invention suitable for all animals.',
      quantity: 4,
      vendor_price: 12.00,
      retail_price: 24.00,
      image_name: 'snugglesafe-microwavable-heat-pad-with-free-cozy-cover.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Catit Double Diner Pink Cat Bowl',
      description: 'Catit Double Diner Pink Cat Bowl.',
      quantity: 6,
      vendor_price: 2.00,
      retail_price: 5.00,
      image_name: 'catit-double-diner-pink.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },
    {
      name: 'Lickimat Salmon & Catnip Cat Sprinkles',
      description: 'Lickimat Sprinkles are freshly baked biscuits that have been crushed into small crumbs to shake on to a Lickimat.',
      quantity: 5,
      vendor_price: 1.00,
      retail_price: 4.00,
      image_name: 'lickimat-salmon-catnip-cat-sprinkles.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 36,
      pet_id: 2
    },

    //----Cat Transport Boxes------///
    {
      name: 'Onoen Carry Bag with Run',
      description: 'This Onoen Carry Bag with Run offers comfort on any journey and makes the ideal carry case for both owners and pets.',
      quantity: 3,
      vendor_price: 19.00,
      retail_price: 40.00,
      image_name: 'pla-tragetasche-onoen-fg.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 37,
      pet_id: 2
    },
    {
      name: 'Hard Case Carrier Bag Sandy',
      description: 'The mobile pet home has a variety of different functions and manages to look elegant at the same time.',
      quantity: 2,
      vendor_price: 20.00,
      retail_price: 55.00,
      image_name: 'tragetasche-sandy.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 37,
      pet_id: 2
    },
    {
      name: 'Trixie Friends on Tour Ryan Pet Carrier',
      description: 'This handy travel bag from Trixie is suitable for cats and small dogs, ideal for trips to the vet or short car, bus and train journeys.',
      quantity: 4,
      vendor_price: 8.00,
      retail_price: 18.00,
      image_name: 'trixie-friends-on-tour-ryan-pet-carrier.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 37,
      pet_id: 2
    },
    {
      name: 'Catit Voyageur White Tiger Crate - White',
      description: 'The stylish Catit Voyageur White Tiger Crate is a great way to transport your pet safely and comfort.',
      quantity: 5,
      vendor_price: 10.00,
      retail_price: 23.00,
      image_name: 'catit-voyageur-white-tiger-crate.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 37,
      pet_id: 2
    },
    {
      name: 'Catit Voyageur White Tiger Crate - Black',
      description: 'The stylish Catit Voyageur White Tiger Pet Carrier - Black is a great way to transport your pet safely and comfort.',
      quantity: 5,
      vendor_price: 13.00,
      retail_price: 29.00,
      image_name: 'catit-voyageur-white-tiger-crate-black.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 37,
      pet_id: 2
    },
    {
      name: 'Trixie Capri Open Top Pet Carrier',
      description: 'The Trixie Capri Open Top Pet Carrier has been thoughtfully designed to be stable and to offer excellent ventilation thanks to the air slits.',
      quantity: 4,
      vendor_price: 15.00,
      retail_price: 33.00,
      image_name: 'trixie-capri-open-top-pet-carrier.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 37,
      pet_id: 2
    },

    //----Cat beds------///
    {
      name: 'Trixie Mijou Cuddly Cat Bed',
      description: 'Trixie’s Mijou cuddly cat bed is a soft, lovingly designed place for your cat to snuggle into.',
      quantity: 3,
      vendor_price: 5.00,
      retail_price: 14.00,
      image_name: 'trixie-mijou-cuddly-cat-bed.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Modern Living Visby Cat Bed',
      description: 'Modern Living was created for pet owners with high standards who look for the finest, long-lasting products.',
      quantity: 1,
      vendor_price: 25.00,
      retail_price: 50.00,
      image_name: 'modern-living-visby-cat-bed.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Cat Bed Branca Two in One',
      description: 'The Cat Bed Branca Two in One offers flexibility and comfort.',
      quantity: 4,
      vendor_price: 5.00,
      retail_price: 12.00,
      image_name: 'cat-bed-branca-two-in-one.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Snuggle Cat Bed',
      description: 'This elegant Snuggle Cat Bed offers the perfect place for your cat or small dog to dream away a few hours.',
      quantity: 3,
      vendor_price: 14.00,
      retail_price: 30.00,
      image_name: 'snuggle-cat-bed.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Vanilla Cat Bed',
      description: 'Your pet will not want to get up from this warm, comfortable snuggle bed with its high, padded sides which are perfect to cosy up to or to lean against.',
      quantity: 3,
      vendor_price: 5.00,
      retail_price: 12.00,
      image_name: 'vanilla-cat-bed.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Luxus Radiator Cat Bed',
      description: 'This cuddly Luxus Radiator Cat Bed is a cat’s dream! It is simple to hang this bed over any radiator with a maximum depth of 7.5cm.',
      quantity: 2,
      vendor_price: 12.00,
      retail_price: 29.00,
      image_name: 'luxus-radiator-cat-bed.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Mochi Cat Bed – Light Grey',
      description: 'The Mochi Cat Bed offers your cat an extremely cosy and snug environment to snooze and sleep in.',
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 16.00,
      image_name: 'mochi-cat-bed-light-grey.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },
    {
      name: 'Cosma Snuggle Bed',
      description: 'The Cosma Snuggle bed for cats is ideal for the trendsetter cat.',
      quantity: 3,
      vendor_price: 9.00,
      retail_price: 23.00,
      image_name: 'cosma-snuggle-bed.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:7,
      subcategory_id: 38,
      pet_id: 2
    },


    //********Cat Veterinary Products *******//
    //----Cat Antiparasitics------///
    {
      name: 'Vectra Felis Anti-parasite pipette for cats 3 pipettes',
      description: 'Antiparasitic pipette for cats from 0.6 kg or 7 weeks that repels and kills fleas for a whole month.',
      quantity: 3,
      vendor_price: 7.00,
      retail_price: 18.00,
      image_name: 'vectra-felis-antiparastiario-para-gatos_1_g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 39,
      pet_id: 2
    },
    {
      name: 'Hills Prescription Diet Feline',
      description: 'Hills Prescription Diet c / d Urinary Stresss diet food for adult cats with bladder inflammation (FIC) due to stress.',
      quantity: 4,
      vendor_price: 8.00,
      retail_price: 21.00,
      image_name: 'pla_pd_feline_cd_stress_2842u_f_1.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 39,
      pet_id: 2
    },
    {
      name: 'Beaphar Natural Antiparasitic Tablets',
      description: 'Antiparasitic tablets for cats contain herbs used traditionally to promote the expulsion of intestinal parasites creating a hostile terrain for their development.',
      quantity: 5,
      vendor_price: 5.00,
      retail_price: 11.00,
      image_name: 'beaphar-natural-antiparasitic-tablets.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 39,
      pet_id: 2
    },
    {
      name: 'Advocate Large Cat 4-8kg (9-18lbs), 6 Pack',
      description: 'For the treatment and prevention of flea infestation in catsthe treatment of ear mite infestation in catsthe treatment of notoedric mange.',
      quantity: 3,
      vendor_price: 15.00,
      retail_price: 59.00,
      image_name: 'advocate-large-cat-4-8kg-6-pack.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 39,
      pet_id: 2
    },
    {
      name: 'Bio Band natural antiparasitic collar dogs and cats',
      description: 'Specific and waterproof collar for the protection of dogs and cats against the bites of ticks, fleas, lice, flies and mosquitoes (including Phlebotomes, carrier of leishmaniosis).',
      quantity: 5,
      vendor_price: 4.00,
      retail_price: 12.00,
      image_name: 'bio-band-natural-antiparasitic-collar-dogs-and-cats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 39,
      pet_id: 2
    },

    //----Cat Medicines------///
    {
      name: 'Feliway Optimum 30 Day Refill for Cats',
      description: 'The products contain complex pheromones that convey impactful messages to your cat helping them cope and adjust to our lifestyles.',
      quantity: 5,
      vendor_price: 6.00,
      retail_price: 19.00,
      image_name: 'feliway-optimum-30-day-refill-for-cats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Panacur Oral Suspension for Dogs and Cats',
      description: 'Panacur Small Animal 10% Suspension is a broad spectrum wormer for the treatment of roundworms, tapeworms and lungworms in dogs, cats, puppies and kittens.',
      quantity: 4,
      vendor_price: 5.00,
      retail_price: 18.00,
      image_name: 'panacur-oral-suspension-for-dogs-and-cats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Feliway Classic Travel Pack for Cats - Spray & Cat Carrier Cover',
      description: 'To comfort your cat during travelling use the FELIWAY design cage-cover together with the FELIWAY Classic Spray 20ml.',
      quantity: 4,
      vendor_price: 4.00,
      retail_price: 14.00,
      image_name: 'feliway-classic-travel-pack-for-cats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Johnsons Hairball Remedy 50g',
      description: 'A tasty malt-flavoured paste to aid the elimination and prevention of hairballs in cats and kittens.',
      quantity: 7,
      vendor_price: 1.00,
      retail_price: 5.00,
      image_name: 'johnsons-hairball-remedy.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Beaphar CatComfort Calming 30 Day Refill',
      description: 'Beaphar CatComfort is a simple and effective solution to reducing problem behaviour in cats, such as inappropriate scratching and urination, or general feelings of anxiety.',
      quantity: 7,
      vendor_price: 4.00,
      retail_price: 11.00,
      image_name: 'beaphar-cat-comfort-calming-refill.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Protexin Pro-Kolin for Cats & Dogs',
      description: 'Protexin Pro-Kolin+ is a carefully formulated probiotic and intestinal calming product for use in cats and dogs.',
      quantity: 5,
      vendor_price: 6.00,
      retail_price: 16.00,
      image_name: 'protexin-pro-kolin.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Beaphar Calming Spot On For Cats',
      description: 'Beaphar Calming Spot On for cats naturally and effectively calms and reduces problem behaviour in cats of all breeds and ages.',
      quantity: 8,
      vendor_price: 2.00,
      retail_price: 7.00,
      image_name: 'beaphar-calming-spot-on-for-cats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },
    {
      name: 'Optixcare Eye Lube for Dogs & Cats',
      description: 'Optixcare Eye Lube is formulated for pets, both those dealing with dry eyes and those going under anaesthetic.',
      quantity: 6,
      vendor_price: 5.00,
      retail_price: 12.00,
      image_name: 'optixcare-eye-ube.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 40,
      pet_id: 2
    },


    //----Cat vitamins minerals electrolytes------///
    {
      name: 'GimCat Nutri Pockets with Catnip and Multi-Vitamin',
      description: 'Nutri pockets with catnip and multi-vitamin.',
      quantity: 7,
      vendor_price: 0.50,
      retail_price: 1.50,
      image_name: 'gimcat-nutri-pockets-with-catnip-and-multi-vitamin.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 41,
      pet_id: 2
    },
    {
      name: 'GimCat Multi-Vitamin Paste',
      description: 'A strong immune system is the prerequisite for a healthy and long cat life.',
      quantity: 5,
      vendor_price: 6.00,
      retail_price: 13.00,
      image_name: 'gimcat-multi-vitamin-paste.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 41,
      pet_id: 2
    },
    {
      name: 'Vet IQ Nutri-Vit Plus Vitamin Energiser for Cats & Kittens',
      description: 'VetIQ Nutri-Vit Plus Cat Vitamin Mineral Support is a high calorie, tasty and nutritional supplement providing a range of vitamins & minerals for your cat.',
      quantity: 5,
      vendor_price: 3.00,
      retail_price: 8.00,
      image_name: 'mark-chappell-nurish-um-cat.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 41,
      pet_id: 2
    },
    {
      name: 'Dodson and Horrell Daily Vitamins and Minerals',
      description: 'A broad-spectrum pelleted vitamin and mineral supplement for equine diets.',
      quantity: 4,
      vendor_price: 7.00,
      retail_price: 17.00,
      image_name: 'dodson-and-horrell-daily-vitamins-and-minerals.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 41,
      pet_id: 2
    },
    {
      name: 'Collo-Cal D Calcium & Vitamin D Liquid Supplement for Dogs & Cats',
      description: 'Collo-Cal D is a palatable Calcium and Vitamin D Supplement developed for young animals and whelping bitches/nursing queens.',
      quantity: 3,
      vendor_price: 6.00,
      retail_price: 15.00,
      image_name: 'collo-cal-d-vitamin-supplement.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 41,
      pet_id: 2
    },
    {
      name: 'Dodson and Horrell Performance Vitamins and Minerals',
      description: 'Vitamin and mineral supplement for equine use. Suitable for all horses and ponies including mares and youngstock.',
      quantity: 4,
      vendor_price: 10.00,
      retail_price: 26.00,
      image_name: 'dodson-and-horrell-performance-vitamins-and-minerals.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:8,
      subcategory_id: 41,
      pet_id: 2
    },
    
//--------------------- Fish ------------------------------//
    //--- Food ---//
    //--- Fish Flakes ---//
    {
      name: 'Bio Band natural antiparasitic collar dogs and cats',
      description: 'Specific and waterproof collar for the protection of dogs and cats against the bites of ticks, fleas, lice, flies and mosquitoes (including Phlebotomes, carrier of leishmaniosis).',
      quantity: 5,
      vendor_price: 4.00,
      retail_price: 12.00,
      image_name: 'bio-band-natural-antiparasitic-collar-dogs-and-cats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id:9,
      subcategory_id: 42,
      pet_id: 2
    },

    


  ]);

};
