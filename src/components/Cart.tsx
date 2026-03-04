import { useCart, useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Image } from '@/components/ui/image';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cart() {
  const { items, totalPrice, isOpen, isCheckingOut, actions } = useCart();
  const { currency } = useCurrency();

  return (
    <Sheet open={isOpen} onOpenChange={actions.toggleCart}>
      <SheetContent className="w-full sm:max-w-lg bg-dark-grey border-l border-foreground/10 overflow-y-auto">
        <SheetHeader className="pb-6 border-b border-foreground/10">
          <SheetTitle className="font-heading text-3xl text-foreground flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-6">
            <ShoppingCart className="h-24 w-24 text-foreground/20" />
            <p className="font-paragraph text-lg text-foreground/60 text-center">
              Your cart is empty
            </p>
            <Button
              onClick={actions.closeCart}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-6 py-5 h-auto"
            >
              Browse Menu
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Cart Items */}
            <div className="flex-1 py-6 space-y-4 overflow-y-auto">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-background rounded-xl p-4 space-y-4"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || 'https://static.wixstatic.com/media/db083c_8b472dddbdb743de9b4e5f563253aa58~mv2.png?originWidth=128&originHeight=128'}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          width={96}
                        />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <h4 className="font-heading text-lg text-foreground">
                          {item.name}
                        </h4>
                        <p className="font-paragraph text-xl text-primary">
                          {formatPrice(item.price, currency ?? DEFAULT_CURRENCY)}
                        </p>
                      </div>

                      <button
                        onClick={() => actions.removeFromCart(item)}
                        className="text-foreground/60 hover:text-destructive transition-colors p-2 h-fit"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-dark-grey rounded-lg p-1">
                        <button
                          onClick={() => actions.updateQuantity(item, Math.max(1, item.quantity - 1))}
                          className="p-2 text-foreground hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-paragraph text-base text-foreground w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => actions.updateQuantity(item, item.quantity + 1)}
                          className="p-2 text-foreground hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <p className="font-paragraph text-base text-foreground/70">
                        Subtotal: <span className="text-foreground font-medium">
                          {formatPrice(item.price * item.quantity, currency ?? DEFAULT_CURRENCY)}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Cart Footer */}
            <div className="border-t border-foreground/10 pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-foreground">Total</span>
                <span className="font-heading text-3xl text-primary">
                  {formatPrice(totalPrice, currency ?? DEFAULT_CURRENCY)}
                </span>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={actions.checkout}
                  disabled={isCheckingOut}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg px-6 py-6 h-auto"
                >
                  {isCheckingOut ? 'Processing...' : 'Checkout'}
                </Button>
                
                <Button
                  onClick={actions.clearCart}
                  variant="outline"
                  className="w-full border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-paragraph px-6 py-5 h-auto"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
