// application
import { ICategoryDef } from '~/fake-server/interfaces/category-def';
import { makeIdGenerator } from '~/fake-server/utils';
import {
    IBaseCategory,
    IBlogCategory,
    ICategory,
    IShopCategory,
} from '~/interfaces/category';

const getNextId = makeIdGenerator();

function makeShopCategory(def: ICategoryDef, parent: IShopCategory | null): IShopCategory {
    return {
        id: getNextId(),
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: ICategoryDef, parent: IBlogCategory | null): IBlogCategory {
    return {
        id: getNextId(),
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends IBaseCategory>(
    makeFn: (def: ICategoryDef, parent: T | null) => T,
    defs: ICategoryDef[],
    parent: T | null = null,
): T[] {
    const categories: T[] = [];

    defs.forEach((def) => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends ICategory>(categories: T[]): T[] {
    let result: T[] = [];

    categories.forEach((category) => {
        result = [...result, category, ...flatTree(category.children as T[])];
    });

    return result;
}

const shopCategoriesDef: ICategoryDef[] = [
    {
        name: 'Belt Series',
        slug: 'Belt Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Brake Master Cylinder',
        slug: 'Brake Master Cylinder',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Brake Pad',
        slug: 'Brake Pad',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Brake Wheel Cylinder',
        slug: 'Brake Wheel Cylinder',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Camshaft',
        slug: 'Camshaft',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Clutch Cover',
        slug: 'Clutch Cover',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Clutch Disc',
        slug: 'Clutch Disc',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Clutch Kit',
        slug: 'Clutch Kit',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Clutch Master Cylinder',
        slug: 'Clutch Master Cylinder',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Clutch Release Bearing',
        slug: 'Clutch Release Bearing',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Clutch Slave Cylinder',
        slug: 'Clutch Slave Cylinder',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Condenser Series',
        slug: 'Condenser Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'C.V. Joint Series',
        slug: 'C.V. Joint Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Cylinder Body',
        slug: 'Cylinder Body',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Carburetor',
        slug: 'Carburetor',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Cylinder Head',
        slug: 'Cylinder Head',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Complete Engine',
        slug: 'Complete Engine',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Distributor',
        slug: 'Distributor',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Distributor Cap',
        slug: 'Distributor Cap',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Distributor Rotor',
        slug: 'Distributor Rotor',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Engine Bearing',
        slug: 'Engine Bearing',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Engine Valves ',
        slug: 'Engine Valves ',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Electronic Fuel Pump',
        slug: 'Electronic Fuel Pump',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Fan Blades Series',
        slug: 'Fan Blades Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Filter Series',
        slug: 'Filter Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Gear Box',
        slug: 'Gear Box',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Gaskets',
        slug: 'Gaskets',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Ignition Coil',
        slug: 'Ignition Coil',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Lifter',
        slug: 'Lifter',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Mechanical Fuel Pump',
        slug: 'Mechanical Fuel Pump',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Oil Seal',
        slug: 'Oil Seal',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Oil Pump',
        slug: 'Oil Pump',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Piston',
        slug: 'Piston',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Piston Ring  ',
        slug: 'Piston Ring  ',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Radiator Series',
        slug: 'Radiator Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Regulator',
        slug: 'Regulator',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Shock Absorber',
        slug: 'Shock Absorber',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Silicon-oil Fan Clutch',
        slug: 'Silicon-oil Fan Clutch',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Spark Plug  ',
        slug: 'Spark Plug  ',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Suspension',
        slug: 'Suspension',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Switch Series',
        slug: 'Switch Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Tensioner',
        slug: 'Tensioner',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Timing Kit  ',
        slug: 'Timing Kit  ',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Turbo Charger',
        slug: 'Turbo Charger',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Universal Joint Series',
        slug: 'Universal Joint Series',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    {
        name: 'Water Pump',
        slug: 'Water Pump',
        image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
        items: 131,
    },
    // {
    //     name: 'Headlights & Lighting',
    //     slug: 'headlights-lighting',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-1.jpg',
    //     items: 131,
    //     children: [
    //         { name: 'Turn Signals', slug: 'turn-signals' },
    //         { name: 'Fog Lights', slug: 'fog-lights' },
    //         { name: 'Headlights', slug: 'headlights' },
    //         { name: 'Switches & Relays', slug: 'switches-relays' },
    //         { name: 'Tail Lights', slug: 'tail-lights' },
    //         { name: 'Corner Lights', slug: 'corner-lights' },
    //         { name: 'Off-Road Lighting', slug: 'off-road-lighting' },
    //         { name: 'Lighting Accessories', slug: 'lighting-accessories' },
    //     ],
    // },
    // {
    //     name: 'Fuel System',
    //     slug: 'fuel-system',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-2.jpg',
    //     items: 356,
    //     children: [
    //         { name: 'Fuel Pumps', slug: 'fuel-pumps' },
    //         { name: 'Motor Oil', slug: 'motor-oil' },
    //         { name: 'Gas Caps', slug: 'gas-caps' },
    //         { name: 'Fuel Injector', slug: 'fuel-injector' },
    //         { name: 'Control Motor', slug: 'control-motor' },
    //     ],
    // },
    // {
    //     name: 'Body Parts',
    //     slug: 'body-parts',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-3.jpg',
    //     items: 54,
    //     children: [
    //         { name: 'Bumpers', slug: 'bumpers' },
    //         { name: 'Hoods', slug: 'hoods' },
    //         { name: 'Grilles', slug: 'grilles' },
    //         { name: 'Fog Lights', slug: 'fog-lights' },
    //         { name: 'Door Handles', slug: 'door-handles' },
    //     ],
    // },
    // {
    //     name: 'Interior Parts',
    //     slug: 'interior-parts',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-4.jpg',
    //     items: 274,
    //     children: [
    //         { name: 'Dashboards', slug: 'dashboards' },
    //         { name: 'Seat Covers', slug: 'seat-covers' },
    //         { name: 'Floor Mats', slug: 'floor-mats' },
    //         { name: 'Sun Shades', slug: 'sun-shades' },
    //         { name: 'Visors', slug: 'visors' },
    //         { name: 'Car Covers', slug: 'car-covers' },
    //         { name: 'Accessories', slug: 'interior-parts-accessories' },
    //     ],
    // },
    // {
    //     name: 'Tires & Wheels',
    //     slug: 'tires-wheels',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-5.jpg',
    //     items: 508,
    //     children: [
    //         { name: 'Wheel Covers', slug: 'wheel-covers' },
    //         { name: 'Brake Kits', slug: 'brake-kits' },
    //         { name: 'Tire Chains', slug: 'tire-chains' },
    //         { name: 'Wheel disks', slug: 'wheel-disks' },
    //         { name: 'Tires', slug: 'tires' },
    //         { name: 'Sensors', slug: 'sensors' },
    //         { name: 'Accessories', slug: 'tires-wheels-accessories' },
    //     ],
    // },
    // {
    //     name: 'Engine & Drivetrain',
    //     slug: 'engine-drivetrain',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-6.jpg',
    //     items: 95,
    //     children: [
    //         { name: 'Timing Belts', slug: 'Timing Belts' },
    //         { name: 'Spark Plugs', slug: 'spark-plugs' },
    //         { name: 'Oil Pans', slug: 'oil-pans' },
    //         { name: 'Engine Gaskets', slug: 'engine-gaskets' },
    //         { name: 'Oil Filters', slug: 'oil-filters' },
    //         { name: 'Engine Mounts', slug: 'engine-mounts' },
    //         { name: 'Accessories', slug: 'engine-drivetrain-accessories' },
    //     ],
    // },
    // {
    //     name: 'Oils & Lubricants',
    //     slug: 'oils-lubricants',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-7.jpg',
    //     items: 179,
    // },
    // {
    //     name: 'Tools & Garage',
    //     slug: 'tools-garage',
    //     image: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/categories/category-8.jpg',
    //     items: 106,
    // },
];

const blogCategoriesDef: ICategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

export const shopCategoriesTree: IShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: IShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: IBlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: IBlogCategory[] = flatTree(blogCategoriesTree);
