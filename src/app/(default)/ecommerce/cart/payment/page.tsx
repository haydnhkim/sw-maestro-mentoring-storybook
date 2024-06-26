import Sidebar from '@/app/(default)/ecommerce/cart/payment/sidebar';
import CartItems from '../cart-items';

export const metadata = {
  title: 'Cart 2 - Mosaic',
  description: 'Page description',
};

export default function Cart2() {
  return (
    <div className="lg:relative lg:flex">
      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
        <div className="lg:max-w-[640px] lg:mx-auto">
          {/* Cart items */}
          <div className="mb-6 lg:mb-0">
            <div className="mb-3">
              <div className="flex text-sm font-medium text-slate-400 dark:text-slate-500 space-x-2">
                <span className="text-slate-500 dark:text-slate-400">
                  Review
                </span>
                <span>-&gt;</span>
                <span className="text-indigo-500">Payment</span>
                <span>-&gt;</span>
                <span className="text-slate-500 dark:text-slate-400">
                  Confirm
                </span>
              </div>
            </div>
            <header className="mb-2">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
                Shopping Cart (3) ✨
              </h1>
            </header>
            <CartItems />
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
