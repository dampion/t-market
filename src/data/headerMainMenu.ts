// application
import { IMainMenuLink } from '~/interfaces/main-menu-link';

const dataHeaderMainMenu: IMainMenuLink[] = [
    // {
    //     title: 'Products',
    //     url: '/catalog/products',
    //     submenu: {
    //         // type: 'megamenu',
    //         type: 'menu',
    //         links: [
    //             { title: 'Headlights', url: '/catalog/products' },
    //             { title: 'Tail Lights', url: '/catalog/products' },
    //             { title: 'Fog Lights', url: '/catalog/products' },
    //             { title: 'Turn Signals', url: '/catalog/products' },
    //             { title: 'Switches & Relays', url: '/catalog/products' },
    //             { title: 'Corner Lights', url: '/catalog/products' },
    //         ],
    //         // size: 'nl',
    //         // columns: [
    //         //     {
    //         //         size: 6,
    //         //         links: [
    //         //             {
    //         //                 title: 'Headlights & Lighting',
    //         //                 url: '/catalog/products',
    //         //                 links: [
    //         //                     { title: 'Headlights', url: '/catalog/products' },
    //         //                     { title: 'Tail Lights', url: '/catalog/products' },
    //         //                     { title: 'Fog Lights', url: '/catalog/products' },
    //         //                     { title: 'Turn Signals', url: '/catalog/products' },
    //         //                     { title: 'Switches & Relays', url: '/catalog/products' },
    //         //                     { title: 'Corner Lights', url: '/catalog/products' },
    //         //                 ],
    //         //             },
    //         //             {
    //         //                 title: 'Brakes & Suspension',
    //         //                 url: '/catalog/products',
    //         //                 links: [
    //         //                     { title: 'Brake Discs', url: '/catalog/products' },
    //         //                     { title: 'Wheel Hubs', url: '/catalog/products' },
    //         //                     { title: 'Air Suspension', url: '/catalog/products' },
    //         //                     { title: 'Ball Joints', url: '/catalog/products' },
    //         //                 ],
    //         //             },
    //         //         ],
    //         //     },
    //         //     {
    //         //         size: 6,
    //         //         links: [
    //         //             {
    //         //                 title: 'Interior Parts',
    //         //                 url: '/catalog/products',
    //         //                 links: [
    //         //                     { title: 'Floor Mats', url: '/catalog/products' },
    //         //                     { title: 'Gauges', url: '/catalog/products' },
    //         //                     { title: 'Consoles & Organizers', url: '/catalog/products' },
    //         //                     { title: 'Mobile Electronics', url: '/catalog/products' },
    //         //                 ],
    //         //             },
    //         //             {
    //         //                 title: 'Engine & Drivetrain',
    //         //                 url: '/catalog/products',
    //         //                 links: [
    //         //                     { title: 'Air Filters', url: '/catalog/products' },
    //         //                     { title: 'Oxygen Sensors', url: '/catalog/products' },
    //         //                     { title: 'Heating', url: '/catalog/products' },
    //         //                     { title: 'Exhaust', url: '/catalog/products' },
    //         //                     { title: 'Cranks & Pistons', url: '/catalog/products' },
    //         //                     { title: 'Cargo Accessories', url: '/catalog/products' },
    //         //                 ],
    //         //             },
    //         //         ],
    //         //     },
    //         // ],
    //     },
    //     // customFields: {
    //     //     ignoreIn: ['spaceship'],
    //     // },
    // },
    {
        title: 'Home',
        url: '/',
    },
    // {
    //     title: 'Shop',
    //     url: '/demo/shop/shop-grid-4-sidebar',
    //     submenu: {
    //         type: 'menu',
    //         links: [
    //             {
    //                 title: 'Category',
    //                 url: '/demo/shop/category-columns-4-sidebar',
    //                 links: [
    //                     { title: '3 Columns Sidebar', url: '/demo/shop/category-columns-3-sidebar' },
    //                     { title: '4 Columns Sidebar', url: '/demo/shop/category-columns-4-sidebar' },
    //                     { title: '5 Columns Sidebar', url: '/demo/shop/category-columns-5-sidebar' },
    //                     { title: '4 Columns Full', url: '/demo/shop/category-columns-4-full' },
    //                     { title: '5 Columns Full', url: '/demo/shop/category-columns-5-full' },
    //                     { title: '6 Columns Full', url: '/demo/shop/category-columns-6-full' },
    //                     { title: '7 Columns Full', url: '/demo/shop/category-columns-7-full' },
    //                     { title: 'Right Sidebar', url: '/demo/shop/category-right-sidebar' },
    //                 ],
    //             },
    //             {
    //                 title: 'Shop Grid',
    //                 url: '/demo/shop/shop-grid-4-sidebar',
    //                 links: [
    //                     { title: '6 Columns Full', url: '/demo/shop/shop-grid-6-full' },
    //                     { title: '5 Columns Full', url: '/demo/shop/shop-grid-5-full' },
    //                     { title: '4 Columns Full', url: '/demo/shop/shop-grid-4-full' },
    //                     { title: '4 Columns Sidebar', url: '/demo/shop/shop-grid-4-sidebar' },
    //                     { title: '3 Columns Sidebar', url: '/demo/shop/shop-grid-3-sidebar' },
    //                 ],
    //             },
    //             { title: 'Shop List', url: '/demo/shop/shop-list' },
    //             { title: 'Shop Table', url: '/demo/shop/shop-table' },
    //             { title: 'Shop Right Sidebar', url: '/demo/shop/shop-right-sidebar' },
    //             {
    //                 title: 'Shop Navigation',
    //                 url: '/demo/shop/shop-cursor-navigation',
    //                 links: [
    //                     { title: 'Cursor-Based', url: '/demo/shop/shop-cursor-navigation' },
    //                     { title: 'Page-Based', url: '/demo/shop/shop-page-navigation' },
    //                 ],
    //             },
    //             {
    //                 title: 'Product',
    //                 url: '/demo/shop/product-full',
    //                 links: [
    //                     { title: 'Full Width', url: '/demo/shop/product-full' },
    //                     { title: 'Left Sidebar', url: '/demo/shop/product-sidebar' },
    //                 ],
    //             },
    //             { title: 'Cart', url: '/cart' },
    //             { title: 'Checkout', url: '/cart/checkout' },
    //             { title: 'Order Success', url: '/demo/shop/order-success' },
    //             { title: 'Wishlist', url: '/wishlist' },
    //             { title: 'Compare', url: '/compare' },
    //             // { title: 'Track Order', url: '/track-order' },
    //         ],
    //     },
    // },
    // {
    //     title: 'Blog',
    //     url: '/demo/blog/classic-right-sidebar',
    //     submenu: {
    //         type: 'menu',
    //         links: [
    //             {
    //                 title: 'Blog Classic',
    //                 url: '/demo/blog/classic-right-sidebar',
    //                 links: [
    //                     { title: 'Left Sidebar', url: '/demo/blog/classic-left-sidebar' },
    //                     { title: 'Right Sidebar', url: '/demo/blog/classic-right-sidebar' },
    //                 ],
    //             },
    //             {
    //                 title: 'Blog List',
    //                 url: '/demo/blog/list-right-sidebar',
    //                 links: [
    //                     { title: 'Left Sidebar', url: '/demo/blog/list-left-sidebar' },
    //                     { title: 'Right Sidebar', url: '/demo/blog/list-right-sidebar' },
    //                 ],
    //             },
    //             {
    //                 title: 'Blog Grid',
    //                 url: '/demo/blog/grid-right-sidebar',
    //                 links: [
    //                     { title: 'Left Sidebar', url: '/demo/blog/grid-left-sidebar' },
    //                     { title: 'Right Sidebar', url: '/demo/blog/grid-right-sidebar' },
    //                 ],
    //             },
    //             {
    //                 title: 'Post Page',
    //                 url: '/demo/blog/post-full-width',
    //                 links: [
    //                     { title: 'Full Width', url: '/demo/blog/post-full-width' },
    //                     { title: 'Left Sidebar', url: '/demo/blog/post-left-sidebar' },
    //                     { title: 'Right Sidebar', url: '/demo/blog/post-right-sidebar' },
    //                 ],
    //             },
    //             { title: 'Post Without Image', url: '/demo/blog/post-without-image' },
    //         ],
    //     },
    // },
    // {
    //     title: 'Account',
    //     url: '/account/dashboard',
    //     submenu: {
    //         type: 'menu',
    //         links: [
    //             { title: 'Login & Register', url: '/account/login' },
    //             { title: 'Dashboard', url: '/account/dashboard' },
    //             { title: 'Garage', url: '/account/garage' },
    //             { title: 'Edit Profile', url: '/account/profile' },
    //             { title: 'Order History', url: '/account/orders' },
    //             {
    //                 title: 'Order Details',
    //                 url: {
    //                     href: '/account/orders/[id]?id=1',
    //                     as: '/account/orders/1',
    //                 },
    //             },
    //             { title: 'Address Book', url: '/account/addresses' },
    //             {
    //                 title: 'Edit Address',
    //                 url: {
    //                     href: '/account/addresses/[id]?id=new',
    //                     as: '/account/addresses/new',
    //                 },
    //             },
    //             { title: 'Change Password', url: '/account/password' },
    //         ],
    //     },
    // },
    // {
    //     title: 'Pages',
    //     url: '/about-us',
    //     submenu: {
    //         type: 'menu',
    //         links: [
    //             { title: 'About Us', url: '/about-us' },
    //             { title: 'Contact Us v1', url: '/demo/site/contact-us-v1' },
    //             { title: 'Contact Us v2', url: '/demo/site/contact-us-v2' },
    //             { title: '404', url: '/demo/site/not-found' },
    //             { title: 'Terms And Conditions', url: '/terms' },
    //             { title: 'FAQ', url: '/faq' },
    //             { title: 'Components', url: '/demo/site/components' },
    //             { title: 'Typography', url: '/demo/site/typography' },
    //         ],
    //     },
    // },
    {
        title: 'Products',
        url: '/catalog/products',
        submenu: {
            type: 'menu',
            links: [
                { title: 'Belt Series', url: '/catalog/products' },
                { title: 'Brake Master Cylinder', url: '/catalog/products' },
                { title: 'Brake Pad', url: '/catalog/products' },
                { title: 'Brake Wheel Cylinder', url: '/catalog/products' },
                { title: 'Camshaft', url: '/catalog/products' },
                { title: 'Clutch Cover', url: '/catalog/products' },
                { title: 'Clutch Disc', url: '/catalog/products' },
                { title: 'Clutch Kit', url: '/catalog/products' },
                { title: 'Clutch Master Cylinder', url: '/catalog/products' },
                { title: 'Clutch Release Bearing', url: '/catalog/products' },
                { title: 'Clutch Slave Cylinder', url: '/catalog/products' },
                { title: 'Condenser Series', url: '/catalog/products' },
                { title: 'C.V. Joint Series', url: '/catalog/products' },
                { title: 'Cylinder Body', url: '/catalog/products' },
                { title: 'Carburetor', url: '/catalog/products' },
                { title: 'Cylinder Head', url: '/catalog/products' },
                { title: 'Complete Engine', url: '/catalog/products' },
                { title: 'Distributor', url: '/catalog/products' },
                { title: 'Distributor Cap', url: '/catalog/products' },
                { title: 'Distributor Rotor', url: '/catalog/products' },
                { title: 'Engine Bearing', url: '/catalog/products' },
                { title: 'Engine Valves ', url: '/catalog/products' },
                { title: 'Electronic Fuel Pump', url: '/catalog/products' },
                { title: 'Fan Blades Series', url: '/catalog/products' },
                { title: 'Filter Series', url: '/catalog/products' },
                { title: 'Gear Box', url: '/catalog/products' },
                { title: 'Gaskets', url: '/catalog/products' },
                { title: 'Ignition Coil', url: '/catalog/products' },
                { title: 'Lifter', url: '/catalog/products' },
                { title: 'Mechanical Fuel Pump', url: '/catalog/products' },
                { title: 'Oil Seal', url: '/catalog/products' },
                { title: 'Oil Pump', url: '/catalog/products' },
                { title: 'Piston', url: '/catalog/products' },
                { title: 'Piston Ring  ', url: '/catalog/products' },
                { title: 'Radiator Series', url: '/catalog/products' },
                { title: 'Regulator', url: '/catalog/products' },
                { title: 'Shock Absorber', url: '/catalog/products' },
                { title: 'Silicon-oil Fan Clutch', url: '/catalog/products' },
                { title: 'Spark Plug  ', url: '/catalog/products' },
                { title: 'Suspension', url: '/catalog/products' },
                { title: 'Switch Series', url: '/catalog/products' },
                { title: 'Tensioner', url: '/catalog/products' },
                { title: 'Timing Kit  ', url: '/catalog/products' },
                { title: 'Turbo Charger', url: '/catalog/products' },
                { title: 'Universal Joint Series', url: '/catalog/products' },
                { title: 'Water Pump', url: '/catalog/products' },
            ],
        },
    },
    {
        title: 'About Us',
        url: '/about-us',
    },
    {
        title: 'Contact Us',
        url: '/demo/site/contact-us-v1',
    },
];

export default dataHeaderMainMenu;
