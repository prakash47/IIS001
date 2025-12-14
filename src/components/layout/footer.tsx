export function Footer() {
    return (
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-gray-200 dark:border-white/10 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wider mb-4">
                        The Saffron Table
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Experience luxury dining with flavors that tell a story.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wider mb-4">
                        Contact
                    </h3>
                    <address className="not-italic text-gray-500 dark:text-gray-400">
                        123 Culinary Avenue, Food City, FC 90210<br />
                        +1 (555) 123-4567<br />
                        reservations@saffrontable.com
                    </address>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wider mb-4">
                        Hours
                    </h3>
                    <ul className="text-gray-500 dark:text-gray-400 space-y-2">
                        <li>Mon - Thu: 5:00 PM - 10:00 PM</li>
                        <li>Fri - Sat: 5:00 PM - 11:00 PM</li>
                        <li>Sun: 4:00 PM - 9:00 PM</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} The Saffron Table. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
