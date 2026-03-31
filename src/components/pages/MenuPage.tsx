import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { MenuItems } from '@/entities';

import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { BadgeIndianRupeeIcon, IndianRupeeIcon } from 'lucide-react';

export default function MenuPage() {
  const [items, setItems] = useState<MenuItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const { addingItemId, actions } = useCart();

  useEffect(() => {
    loadMenuItems();
  }, []);

  const loadMenuItems = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<MenuItems>('menuitems');
      setItems(result.items);
    } catch (error) {
      console.error('Error loading menu items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category).filter(Boolean)))];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 bg-dark-grey">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="font-heading text-6xl md:text-8xl text-foreground">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              Explore our delicious selection of fresh, flavorful fast food
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-12 bg-background border-b border-foreground/10 sticky top-[88px] z-40 backdrop-blur-sm bg-background/95">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-paragraph text-base px-6 py-3 transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-dark-grey text-foreground hover:bg-dark-grey/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="w-full py-24 min-h-[600px]">
        <div className="max-w-[100rem] mx-auto px-8">
          {isLoading ? null : filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-dark-grey rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <Link to={`/menu/${item._id}`}>
                    <div className="relative overflow-hidden h-64">
                      <Image
                        src={item.itemImage || 'https://static.wixstatic.com/media/db083c_84588b6813624599badffc3a8e6a9a3d~mv2.png?originWidth=576&originHeight=384'}
                        alt={item.itemName || 'Menu item'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={600}
                      />
                    </div>
                  </Link>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Link to={`/menu/${item._id}`}>
                        <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors">
                          {item.itemName}
                        </h3>
                      </Link>
                      {item.category && (
                        <p className="font-paragraph text-sm text-primary">
                          {item.category}
                        </p>
                      )}
                      {item.itemDescription && (
                        <p className="font-paragraph text-base text-foreground/70 line-clamp-2">
                          {item.itemDescription}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <span className="font-heading text-3xl text-primary">
                        {formatPrice(item.itemPrice || 0, currency ?? DEFAULT_CURRENCY)}
                      </span>
                      <Button
                        onClick={() => actions.addToCart({
                          collectionId: 'menuitems',
                          itemId: item._id
                        })}
                        disabled={addingItemId === item._id}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-6 py-5 h-auto"
                      >
                        {addingItemId === item._id ? 'Adding...' : 'Add to Cart'}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="font-paragraph text-xl text-foreground/60">
                No items found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
