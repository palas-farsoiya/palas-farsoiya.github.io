import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Research', href: '/publications' },
    {
      name: 'Courses',
      href: '/courses/computer-programming-and-numerical-analysis',
      children: [
        {
          name: 'Computer Programming and Numerical Analysis',
          href: '/courses/computer-programming-and-numerical-analysis',
        },
      ],
    },
    { name: 'People', href: '/people' },
    { name: 'Join Us', href: '/join-us' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
    /*{ name: 'Talks', href: '/talks' },*/
    /*{ name: 'Awards', href: '/awards' },*/
    /*{ name: 'Codes/Blogs', href: '/codes-blogs' },*/
    /*{ name: 'News', href: '/news' },*/
    /*{ name: 'Outreach', href: '/outreach' },*/
    /*{ name: 'Contact', href: '/contact' },*/
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-primary hover:text-accent transition-colors"
            >
              Farsoiya Lab
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="group relative">
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-xl border border-border bg-background p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
