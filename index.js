import { localize } from '@deriv/translations';
import P2P from './src';

const routes = {
p2p_verification: '/cashier/p2p/verification',
p2p_buy_sell: '/cashier/p2p/buy-sell',
p2p_orders: '/cashier/p2p/orders',
p2p_my_ads: '/cashier/p2p/my-ads',
p2p_my_profile: '/cashier/p2p/my-profile',
p2p_advertiser_page: '/cashier/p2p/advertiser',
p2p_v2_inner: '/cashier/p2p-v2/inner',
}

export const p2p_routes = [
{
    path: routes.p2p_buy_sell,
    component: P2P,
    getTitle: () => localize('Buy / Sell'),
    default: true,
},
{
    path: routes.p2p_advertiser_page,
    component: P2P,
    getTitle: () => localize("Advertiser's page"),
},
{
    path: routes.p2p_orders,
    component: P2P,
    getTitle: () => localize('Orders'),
},
{
    path: routes.p2p_my_ads,
    component: P2P,
    getTitle: () => localize('My ads'),
},
{
    path: routes.p2p_my_profile,
    component: P2P,
    getTitle: () => localize('My profile'),
},
{
    path: routes.p2p_verification,
    component: P2P,
    getTitle: () => localize('P2P verification'),
}
];

export default P2P;