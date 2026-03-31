import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { MenuItems } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';
import { useCart, useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MenuItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<MenuItems | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { currency } = useCurrency();
  const { addingItemId, actions } = useCart();

  useEffect(() => {
    const loadItem = async () => {
      if (!id) return;
      try {
        const data = await BaseCrudService.getById<MenuItems>('menuitems', id);
        setItem(data);
      } catch (error) {
        console.error('Error loading menu item:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadItem();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Item Not Found</h1>
            <p className="text-secondary-foreground">The menu item you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full max-w-[100rem] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            {item.itemImage ? (
              <Image
                src={item.itemImage}
                alt={item.itemName || 'Menu Item'}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
              />
            ) : (
              <div className="w-full aspect-square bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground">No image available</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            {item.category && (
              <p className="text-sm font-paragraph text-primary mb-2 uppercase tracking-wide">
                {item.category}
              </p>
            )}
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              {item.itemName}
            </h1>
            
            {item.itemDescription && (
              <p className="text-lg font-paragraph text-secondary-foreground mb-8 leading-relaxed">
                {item.itemDescription}
              </p>
            )}

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-heading font-bold text-primary">
                {formatPrice(item.itemPrice || 0, currency ?? DEFAULT_CURRENCY)}
              </span>
            </div>

            <button
              onClick={() => actions.addToCart({ collectionId: 'menuitems', itemId: item._id, quantity: 1 })}
              disabled={addingItemId === item._id}
              className="w-full bg-primary hover:bg-muted-orange text-primary-foreground font-heading font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {addingItemId === item._id ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
