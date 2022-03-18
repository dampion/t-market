/* eslint-disable import/prefer-default-export */

// application
import { brands } from '~/fake-server/database/brands';
import { IBrand } from '~/interfaces/brand';
import { IProduct, IProductAttribute } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { makeIdGenerator, nameToSlug } from '~/fake-server/utils';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { IProductAttributesDef, IProductDef } from '~/fake-server/interfaces/product-def';
import { shopCategoriesList } from '~/fake-server/database/categories';

const getNextId = makeIdGenerator();

function resolveProductAttributesDef(attributesDef: IProductAttributesDef): IProductAttribute[] {
    const attributes: IProductAttribute[] = [];
    const keys = Object.keys(attributesDef);

    for (let i = 0; i < keys.length; i += 1) {
        const attributeName = keys[i];
        const attribute: IProductAttribute = {
            name: attributeName,
            slug: nameToSlug(attributeName),
            featured: false,
            values: [],
        };

        const valuesDef = attributesDef[attributeName];
        let valueNames: string[] = [];

        if (typeof valuesDef === 'string') {
            valueNames = [valuesDef];
        } else {
            if (valuesDef[0] === true) {
                attribute.featured = true;
                valuesDef.splice(0, 1);
            }

            valueNames = valuesDef as string[];
        }

        valueNames.forEach((valueName) => {
            attribute.values.push({
                name: valueName,
                slug: nameToSlug(valueName),
            });
        });

        if (attribute.values.length > 0) {
            attributes.push(attribute);
        }
    }

    return attributes;
}

function makeProducts(defs: IProductDef[]): IProduct[] {
    return defs.map((def) => {
        let badges: string[] = [];

        if (def.badges) {
            if (typeof def.badges === 'string') {
                badges = [def.badges];
            } else {
                badges = def.badges.slice(0);
            }
        }

        let brand: IBrand = {
            slug: 'brandix',
            name: 'Brandix',
            image: '',
            country: 'JP',
        };

        if (def.brand) {
            brand = brands.find((x) => x.slug === def.brand) || brand;
        }

        const categorySlugs: string[] = def.categories || ['tools-garage'];
        const categories = categorySlugs
            .map((categorySlug) => shopCategoriesList.find((x) => x.slug === categorySlug))
            .map((x) => (x ? prepareCategory(x) : null))
            .filter((x) => x !== null) as IShopCategory[];

        const attributesDef: IProductAttributesDef = {
            Speed: [true, '750 RPM'],
            'Power Source': [true, 'Cordless-Electric'],
            'Battery Cell Type': [true, 'Lithium'],
            Voltage: [true, '20 Volts'],
            'Battery Capacity': [true, '2 Ah'],
            Material: ['Aluminium', 'Plastic'],
            'Engine Type': 'Brushless',
            Length: '99 mm',
            Width: '207 mm',
            Height: '208 mm',
        };

        return {
            id: getNextId(),
            name: def.name,
            excerpt: `
                Many philosophical debates that began in ancient times are still debated today. In one general sense,
                philosophy is associated with wisdom, intellectual culture and a search for knowledge.
            `,
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus,
                    ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed
                    fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque
                    ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie
                    urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et
                    finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget
                    lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris
                    vitae tellus.
                </p>
                <h4>Etiam lacus lacus mollis in mattis</h4>
                <p>
                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel
                    eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien
                    neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
                </p>
                <p>
                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac
                    neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.
                    Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique
                    ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,
                    sit amet fringilla odio scelerisque non.
                </p>
            `,
            slug: def.slug,
            sku: def.sku,
            partNumber: 'BDX-750Z370-S',
            stock: 'in-stock',
            price: def.price,
            compareAtPrice: def.compareAtPrice || null,
            images: def.images.slice(0),
            badges,
            rating: def.rating,
            reviews: def.reviews,
            availability: def.availability,
            compatibility: def.compatibility || 'all',
            brand,
            type: {
                slug: 'default',
                name: 'Default',
                attributeGroups: [
                    {
                        name: 'General',
                        slug: 'general',
                        attributes: [
                            'speed',
                            'power-source',
                            'battery-cell-type',
                            'voltage',
                            'battery-capacity',
                            'material',
                            'engine-type',
                        ],
                    },
                    {
                        name: 'Dimensions',
                        slug: 'dimensions',
                        attributes: [
                            'length',
                            'width',
                            'height',
                        ],
                    },
                ],
            },
            attributes: resolveProductAttributesDef(
                {
                    ...attributesDef,
                    ...def.attributes,
                },
            ),
            options: [
                {
                    type: 'default',
                    slug: 'material',
                    name: 'Material',
                    values: [
                        { slug: 'steel', name: 'Steel' },
                        { slug: 'aluminium', name: 'Aluminium' },
                        { slug: 'thorium', name: 'Thorium' },
                    ],
                },
                {
                    type: 'color',
                    slug: 'color',
                    name: 'Color',
                    values: [
                        { slug: 'white', name: 'White', color: '#fff' },
                        { slug: 'yellow', name: 'Yellow', color: '#ffd333' },
                        { slug: 'red', name: 'Red', color: '#ff4040' },
                        { slug: 'blue', name: 'Blue', color: '#4080ff' },
                    ],
                },
            ],
            tags: ['Brake Kit', 'Brandix', 'Filter', 'Bumper', 'Transmission', 'Hood'],
            categories,
            customFields: {},
        };
    });
}

const productsDef: IProductDef[] = [
    {
        name: 'Fan Belt',
        slug: 'fan-belt',
        sku: '140-10440-B',
        price: 19,
        images: [
            '/images/products/20076111112.jpeg',
            '/images/products/20076111112.jpeg',
        ],
        badges: ['sale', 'new', 'hot'],
        rating: 4,
        reviews: 3,
        availability: 'in-stock',
        compatibility: [1, 2],
        attributes: {
            Color: 'White',
        },
    },
    {
        name: 'Timing Belt',
        slug: 'timing-belt',
        sku: '573-23743-C',
        price: 224,
        images: [
            '/images/products/200761111139.jpeg',
            '/images/products/200761111139.jpeg',
        ],
        rating: 5,
        reviews: 22,
        availability: 'in-stock',
        compatibility: [1],
        attributes: {
            Color: 'Silver',
        },
    },
    {
        name: 'MITSUBISHI MB316897',
        slug: 'MITSUBISHI-MB316897',
        sku: '009-50078-Z',
        price: 349,
        compareAtPrice: 415,
        images: [
            '/images/products/2008527142045.jpeg',
            '/images/products/2008527142045.jpeg',
        ],
        badges: ['sale'],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        attributes: {
            Color: 'Red',
        },
    },
    {
        name: 'TOYOTA 4720135640',
        slug: 'TOYOTA-4720135640',
        sku: 'A43-44328-B',
        price: 589,
        images: [
            '/images/products/200852712923.jpeg',
            '/images/products/200852712923.jpeg',
        ],
        badges: ['hot'],
        rating: 4,
        reviews: 26,
        availability: 'in-stock',
        compatibility: 'unknown',
        attributes: {
            Color: 'Black',
        },
    },
    {
        name: 'MITSUBISHI MB316897',
        slug: 'MITSUBISHI-MB316897',
        sku: '729-51203-B',
        price: 749,
        images: [
            '/images/products/2008527142045.jpeg',
            '/images/products/2008527142045.jpeg',
        ],
        rating: 4,
        reviews: 9,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Light Gray',
        },
    },
    {
        name: 'TOYOTA 4720130260',
        slug: 'TOYOTA-4720130260',
        sku: '573-49386-C',
        price: 23,
        images: [
            '/images/products/200852712737.jpeg',
            '/images/products/200852712737.jpeg',
        ],
        rating: 5,
        reviews: 2,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Gray',
        },
    },
    {
        name: 'TOYOTA 4720126530',
        slug: 'TOYOTA-4720126530',
        sku: '753-38573-B',
        price: 452,
        compareAtPrice: 573,
        images: [
            '/images/products/200852712534.jpeg',
            '/images/products/200852712534.jpeg',
        ],
        rating: 0,
        reviews: 0,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Dark Gray',
        },
    },
    {
        name: 'TOYOTA 4720135790',
        slug: 'TOYOTA-4720135790',
        sku: '472-67382-Z',
        price: 345,
        images: [
            '/images/products/20076111161.jpeg',
            '/images/products/20076111161.jpeg',
        ],
        rating: 3,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Coal',
        },
    },
    {
        name: 'HONDA 46100SM4A04',
        slug: 'HONDA-46100SM4A04',
        sku: '855-78336-G',
        price: 879,
        images: [
            '/images/products/2008527135941.jpeg',
            '/images/products/2008527135941.jpeg',
        ],
        rating: 4,
        reviews: 6,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Orange',
        },
    },
    {
        name: 'HONDA 46100SM4G54',
        slug: 'HONDA 46100SM4G54',
        sku: '473-75662-R',
        price: 78,
        compareAtPrice: 94,
        images: [
            '/images/products/200852711464.jpeg',
            '/images/products/200852711464.jpeg',
        ],
        rating: 4,
        reviews: 16,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Yellow',
        },
    },
    {
        name: 'KIA KK15043400D',
        slug: 'KIA KK15043400D',
        sku: '521-57812-H',
        price: 60,
        images: [
            '/images/products/201083131734.jpeg',
            '/images/products/201083131734.jpeg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Pear Green',
        },
    },
    {
        name: 'ISUZU 8979406400',
        slug: 'ISUZU 8979406400',
        sku: '994-34346-B',
        price: 12,
        images: [
            '/images/products/200852712146.jpeg',
            '/images/products/200852712146.jpeg',
        ],
        rating: 5,
        reviews: 41,
        availability: 'in-stock',
        attributes: {
            Color: 'Green',
        },
    },
    {
        name: 'ISUZU 8973015320',
        slug: 'ISUZU 8973015320',
        sku: '985-00884-S',
        price: 2579,
        images: [
            '/images/products/2008527114848.jpeg',
            '/images/products/2008527114848.jpeg',
        ],
        rating: 3,
        reviews: 17,
        availability: 'in-stock',
        attributes: {
            Color: 'Emerald',
        },
    },
    {
        name: 'DATSUN PLCK UP46010P08G1',
        slug: 'DATSUN PLCK UP46010P08G1',
        sku: '855-56888-U',
        price: 327,
        images: [
            '/images/products/201072810459.jpeg',
            '/images/products/201072810459.jpeg',
        ],
        rating: 4,
        reviews: 9,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Shamrock',
        },
    },
    {
        name: 'DATSUN 46010W8700',
        slug: 'DATSUN 46010W8700',
        sku: '345-99553-E',
        price: 4,
        compareAtPrice: 8,
        images: [
            '/images/products/201072810428.jpeg',
            '/images/products/201072810428.jpeg',
        ],
        rating: 4,
        reviews: 31,
        availability: 'in-stock',
        brand: 'no-name',
        attributes: {
            Color: 'Shakespeare',
        },
    },
    {
        name: 'MAZDA BJOP43400',
        slug: 'MAZDA BJOP43400',
        sku: '563-73744-Q',
        price: 78,
        images: [
            '/images/products/201072810829.jpeg',
            '/images/products/201072810829.jpeg',
        ],
        rating: 3,
        reviews: 4,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Blue',
        },
    },
    {
        name: 'NISSAN 4601049L01',
        slug: 'NISSAN 4601049L01',
        sku: '999-60606-X',
        price: 666.99,
        images: [
            '/images/products/2010728101125.jpeg',
            '/images/products/2010728101125.jpeg',
        ],
        rating: 5,
        reviews: 66,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Color: 'Dark Blue',
        },
    },
    {
        name: 'NISSAN 46010A05GD',
        slug: 'NISSAN 46010A05GD',
        sku: '545-74573-D',
        price: 40,
        compareAtPrice: 60,
        images: [
            '/images/products/2010728101032.jpeg',
            '/images/products/2010728101032.jpeg',
        ],
        rating: 4,
        reviews: 25,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Color: 'Violet',
        },
    },
    {
        name: 'VW AUDI AUTOM17161109A',
        slug: 'VW AUDI AUTOM17161109A',
        sku: '965-73344-F',
        price: 21,
        compareAtPrice: 31,
        images: [
            '/images/products/2010728101235.jpeg',
            '/images/products/2010728101235.jpeg',
        ],
        badges: ['sale'],
        rating: 3,
        reviews: 24,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Color: 'Purple',
        },
    },
    {
        name: 'VW 6M0614019',
        slug: 'VW 6M0614019',
        sku: '365-32667-P',
        price: 162,
        compareAtPrice: 174,
        images: [
            '/images/products/201072810126.jpeg',
            '/images/products/201072810126.jpeg',
        ],
        rating: 5,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Cerise',
        },
    },
    {
        name: 'KIA WVA20139',
        slug: 'KIA WVA20139',
        sku: 'SSX-780B390-S',
        price: 1259,
        images: [
            '/images/products/201083131954.jpeg',
            '/images/products/201083131954.jpeg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Orange',
        },
    },
    {
        name: 'KIA DWBPH06',
        slug: 'KIA DWBPH06',
        sku: 'SCT-123A380-S',
        price: 799,
        images: [
            '/images/products/201083131917.jpeg',
            '/images/products/201083131917.jpeg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'specter',
        attributes: {
            Color: 'Green',
        },
    },
    {
        name: 'MAZDA 32198184',
        slug: 'MAZDA 32198184',
        sku: 'NNO-120K643-S',
        price: 569,
        images: [
            '/images/products/20108295024.jpeg',
            '/images/products/20108295024.jpeg',
        ],
        rating: 3,
        reviews: 9,
        availability: 'in-stock',
        brand: 'no-name',
        attributes: {
            Color: 'Shamrock',
        },
    },
    {
        name: 'FORD RMD52S',
        slug: 'FORD RMD52S',
        sku: 'STP-577843-E',
        price: 379,
        images: [
            '/images/products/2010829449.jpeg',
            '/images/products/2010829449.jpeg',
        ],
        rating: 5,
        reviews: 22,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Dark Blue',
        },
    },
];

export const products: IProduct[] = makeProducts(productsDef);
