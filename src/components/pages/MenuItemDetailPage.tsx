import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { MenuItems } from '@/entities';
import { useCurrency, formatPrice, DEFAULT_CURRENCY, useCart } from '@/integrations';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MenuItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<MenuItems | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { currency } = useCurrency();
  const { addingItemId, actions } = useCart();

  useEffect(() => {
    loadMenuItem();
  }, [id]);

  const loadMenuItem = async () => {
    if (!id) return;
    
    try {
      setIsLoading(true);
      const data = await BaseCrudService.getById<MenuItems>('menuitems', id);
      setItem(data);
    } catch (error) {
      console.error('Error loading menu item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-24 min-h-[600px]">
        <div className="max-w-[100rem] mx-auto px-8">
          <Link to="/menu">
            <Button
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-paragraph px-6 py-5 h-auto mb-12"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Menu
            </Button>
          </Link>

          {isLoading ? (
            <div className="flex items-center justify-center py-24">
              <LoadingSpinner />
            </div>
          ) : !item ? (
            <div className="text-center py-24 space-y-6">
              <h2 className="font-heading text-4xl text-foreground">Item Not Found</h2>
              <p className="font-paragraph text-lg text-foreground/60">
                The menu item you're looking for doesn't exist.
              </p>
              <Link to="/menu">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-6 py-5 h-auto">
                  Browse Menu
                </Button>
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <Image
                    src={item.itemImage || 'https://static.wixstatic.com/media/db083c_bf78e73bacce4f86964120db642d2732~mv2.png?originWidth=768&originHeight=768'}
                    alt={item.itemName || 'Menu item'}
                    className="w-full h-full object-cover"
                    width={800}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-8 lg:sticky lg:top-32">
                {item.category && (
                  <span className="inline-block font-paragraph text-sm text-primary bg-primary/10 px-4 py-2 rounded">
                    {item.category}
                  </span>
                )}
                
                <h1 className="font-heading text-5xl md:text-6xl text-foreground">
                  {item.itemName}
                </h1>

                <div className="font-heading text-5xl text-primary">
                  {formatPrice(item.itemPrice || 0, currency ?? DEFAULT_CURRENCY)}
                </div>

                {item.itemDescription && (
                  <div className="space-y-4">
                    <h2 className="font-heading text-2xl text-foreground">Description</h2>
                    <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                      {item.itemDescription}
                    </p>
                  </div>
                )}

                <div className="pt-8 space-y-4">
                  <Button
                    onClick={() => actions.addToCart({ 
                      collectionId: 'menuitems', 
                      itemId: item._id 
                    })}
                    disabled={addingItemId === item._id}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg px-8 py-6 h-auto"
                  >
                    {addingItemId === item._id ? 'Adding to Cart...' : 'Add to Cart'}
                  </Button>
                  
                  <Button
                    onClick={actions.openCart}
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-paragraph text-lg px-8 py-6 h-auto"
                  >
                    View Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
