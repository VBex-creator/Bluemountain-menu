const menuData = {
  "english_menu": {
    "espresso_based": [
      { "item": "Espresso", "price": "2.30€" },
      { "item": "Double Espresso", "price": "3.50€" },
      { "item": "Single Origin Espresso", "price": "2.60€" },
      { "item": "Double Single Origin", "price": "3.80€" },
      { "item": "Macchiato", "price": "2.60€" },
      { "item": "Americano", "price": "3.50€" },
      { "item": "Cappuccino", "price": "3.60€" },
      { "item": "Double Cappuccino", "price": "4.00€" },
      { "item": "Latte", "price": "3.60€" },
      { "item": "Iced Latte", "price": "3.60€" },
      { "item": "Freddo Espresso", "price": "3.50€" },
      { "item": "Freddo Cappuccino", "price": "4.00€" },
      { "item": "Flat White", "price": "4.00€" },
      { "item": "Iced Flat White", "price": "4.00€" },
      { "item": "Filter Coffee", "price": "3.50€" },
      { "item": "Black Eye", "price": "5.00€", "description": "Filter coffee with 2 shots of espresso" },
      { "item": "Cold Brew", "price": "4.00€", "description": "Cold filter coffee with slow & cold distillation for intense flavor & aroma" },
      { "item": "Red Fruits & Honey Cold Brew", "price": "4.50€", "description": "With red fruit ice & maple syrup" }
    ],
    "chocolates_and_teas": [
      { "item": "Salted Caramel Chocolate", "price": "4.60€", "description": "White chocolate with salted caramel flavor & a shot of espresso" },
      { "item": "Raspberry & Blueberry White Chocolate", "price": "4.60€", "description": "White chocolate with raspberry & blueberry pieces" },
      { "item": "Ginger Chocolate & Indonesian Cinnamon", "price": "4.60€", "description": "Asian aroma with natural ginger & natural cinnamon" },
      { "item": "Orange Holic Cocoa", "price": "4.50€" },
      { "item": "Milk Chocolate", "price": "4.00€" },
      { "item": "Dark Chocolate", "price": "4.00€" },
      { "item": "White Chocolate", "price": "4.00€" },
      { "item": "Little Prince Tea", "price": "3.50€", "description": "Apple pieces, grape, strawberry, hibiscus & chamomile. Caffeine-free." },
      { "item": "Red Square Tea", "price": "3.50€", "description": "Fruit tea with intense red color from hibiscus & cranberry with a sweet-sour taste. Caffeine-free." },
      { "item": "Cascara Coffee Cherry Tea", "price": "4.00€", "description": "Drink made from the dried shell of coffee fruits (fruit of the coffee tree). Rich in antioxidants and with about the caffeine contained in a cup of coffee." },
      { "item": "White Angel Tea", "price": "3.50€", "description": "Combination of white & green tea with cinnamon, orange peels, lemongrass, almond fillet, orange blossoms, sliced orange & flavorings." },
      { "item": "Matcha Tea", "price": "4.00€" },
      { "item": "Black Tea", "price": "3.00€" },
      { "item": "Green Tea", "price": "3.00€" },
      { "item": "Earl Grey", "price": "3.00€", "description": "Black tea & citrus fruits" },
      { "item": "Spicy Orange Tea", "price": "3.00€", "description": "Hibiscus, chili, red pepper & orange" },
      { "item": "Fresh Mountain Tea", "price": "3.50€" },
      { "item": "Chamomile", "price": "3.50€" }
    ],
    "smoothies_and_juices": [
      { "item": "Dream Cream Smoothie", "price": "5.00€", "description": "Pineapple, banana, coconut" },
      { "item": "Green Freak Smoothie", "price": "5.00€", "description": "Spinach, carrot, orange, pineapple" },
      { "item": "Wild Forest Smoothie", "price": "5.00€", "description": "Strawberry, blueberry, raspberry, redcurrant, red & black berry, cherry" },
      { "item": "Red Passion Smoothie", "price": "5.00€", "description": "Strawberry, raspberry, mango" },
      { "item": "Fresh Orange Juice", "price": "4.00€" },
      { "item": "Homemade Lemonade", "price": "4.50€" },
      { "item": "Mixed Fresh Juice", "price": "4.50€" },
      { "item": "Juices 250ml", "price": "3.00€" }
    ],
    "beers_and_wines": [
      { "item": "Alfa 330ml", "price": "3.50€" },
      { "item": "Kaiser 330ml", "price": "4.00€" },
      { "item": "Heineken 330ml", "price": "3.50€" },
      { "item": "Amstel 330ml", "price": "3.50€" },
      { "item": "Radler 330ml", "price": "3.50€" },
      { "item": "Stella Artois 330ml", "price": "5.00€" },
      { "item": "Mamos 330ml", "price": "3.50€" },
      { "item": "Fischer 330ml", "price": "3.50€" },
      { "item": "Corona 330ml", "price": "6.00€" },
      { "item": "Bud 330ml", "price": "5.00€" },
      { "item": "Peroni 330ml", "price": "5.00€" },
      { "item": "Milokleftis 330ml", "price": "3.50€" },
      { "item": "Paulaner 330ml", "price": "5.00€" },
      { "item": "Dry Red Wine (Glass)", "price": "4.00€" },
      { "item": "Dry White Wine (Glass)", "price": "4.00€" },
      { "item": "Semi-sweet Red Wine (Glass)", "price": "4.00€" },
      { "item": "Semi-sweet White Wine (Glass)", "price": "4.00€" },
      { "item": "White Sangria (Glass)", "price": "4.50€" },
      { "item": "Red Sangria (Glass)", "price": "4.50€" }
    ],
    "food_and_brunch": [
      { "item": "Caesar Salad", "price": "12.00€", "description": "with grilled chicken" },
      { "item": "Beef Burger", "price": "12.00€", "description": "mayonnaise, lettuce, tomato, cheddar, caramelized onion, bacon & parmesan flakes" },
      { "item": "Chicken Burger", "price": "12.00€", "description": "chicken patty, lettuce, tomato, cheddar, caramelized onion, bacon & parmesan flakes" },
      { "item": "Chicken Schnitzel Burger", "price": "12.00€", "description": "cereal-crusted, grated graviera, avocado lime sauce, tomato, lettuce & hot chili sauce." },
      { "item": "Greek Style Beef Burger", "price": "12.00€", "description": "grilled vegetables, lettuce, tomato, Cretan graviera, mayonnaise & hot chili sauce" },
      { "item": "Pork Belly Burger", "price": "12.00€", "description": "tomato, arugula, grated feta, mustard sauce & spicy BBQ sauce. Served with sweet potato fries" },
      { "item": "Club Sandwich", "price": "7.50€" },
      { "item": "Grilled Chicken Club Sandwich", "price": "8.70€", "description": "bacon, tomato & lettuce" },
      { "item": "Fouantre Ham Club Sandwich", "price": "8.50€", "description": "cheddar, tomato & lettuce" },
      { "item": "Vegetarian Club Sandwich", "price": "8.50€", "description": "peppers, tomato, lettuce, mushrooms & guacamole" },
      { "item": "Deluxe Club Sandwich", "price": "13.00€", "description": "rustic bread, cheddar, tomato, lettuce, bacon & chicken schnitzel" },
      { "item": "Freshly Baked Butter Croissant", "price": "10.00€", "description": "with mozzarella, lettuce, tomato, poached eggs, hollandaise sauce & grated graviera" },
      { "item": "Sourdough Bread", "price": "13.50€", "description": "with pork chops, cheese potatoes, spreadable cheese, mushrooms, poached eggs, salad & graviera" },
      { "item": "Savory French Toast", "price": "10.00€", "description": "with spreadable cheese, egg, lettuce, tomato & grated regato cheese" },
      { "item": "Chicken Tortilla", "price": "10.00€", "description": "with lettuce, tomato, corn, graviera flakes & caesar's sauce" },
      { "item": "Eggs Benedict (Ham)", "price": "9.00€", "description": "with cream cheese, lettuce, tomato, fouantre ham, poached egg & hollandaise sauce" },
      { "item": "Eggs Benedict (Katiki)", "price": "9.00€", "description": "with Katiki Domokou, pistachio mortadella, lettuce, tomato, poached egg & hollandaise sauce" },
      { "item": "Brioche Bread (Turkey)", "price": "9.00€", "description": "with tomato, lettuce, fouantre turkey, egg & mozzarella" },
      { "item": "Brioche Bread (Bacon)", "price": "8.00€", "description": "with cheddar, bacon, lettuce, tomato, egg & Grana Padano" },
      { "item": "Scrambled Eggs with Salmon", "price": "9.50€", "description": "with smoked Salmon, cream cheese & lemon zest" },
      { "item": "Scrambled Eggs (Bacon)", "price": "8.50€", "description": "whole wheat bread, bacon & regato cheese" },
      { "item": "Avocado Toast", "price": "8.50€", "description": "whole wheat bread, guacamole, grated feta, poached eggs, cherry tomatoes & salad" },
      { "item": "Spaghetti Pancakes Bowl", "price": "9.00€", "description": "Long thin pancakes in pasta form with liquid Vanilla cream, fresh fruits, almond fillet & Aegina pistachio" },
      { "item": "Nutella French Toast", "price": "10.50€", "description": "banana & crunchy hazelnut" },
      { "item": "Bueno Sweet Pancakes", "price": "8.50€", "description": "Bueno praline & crunchy biscuit" }
    ]
  },
  "greek_menu": {
    "espresso_based": [
      { "item": "Espresso", "price": "2.30€" },
      { "item": "Διπλό Espresso", "price": "3.50€" },
      { "item": "Espresso μονοποικιλιακός", "price": "2.60€" },
      { "item": "Διπλό Espresso μονοποικιλιακό", "price": "3.80€" },
      { "item": "Macchiato", "price": "2.60€" },
      { "item": "Americano", "price": "3.50€" },
      { "item": "Cappuccino", "price": "3.60€" },
      { "item": "Διπλό Cappuccino", "price": "4.00€" },
      { "item": "Latte", "price": "3.60€" },
      { "item": "Iced Latte", "price": "3.60€" },
      { "item": "Freddo Espresso", "price": "3.50€" },
      { "item": "Freddo Cappuccino", "price": "4.00€" },
      { "item": "Flat White", "price": "4.00€" },
      { "item": "Flat White κρύο", "price": "4.00€" },
      { "item": "Καφές Φίλτρου", "price": "3.50€" },
      { "item": "Black Eye", "price": "5.00€", "description": "Καφές φίλτρου με 2 δόσεις espresso" },
      { "item": "Cold Brew", "price": "4.00€", "description": "Κρύος καφές φίλτρου με αργή & κρύα απόσταξη για έντονη γεύση & άρωμα" },
      { "item": "Red Fruits & Honey Cold Brew", "price": "4.50€", "description": "Με πάγο από κόκκινα φρούτα & σιρόπι σφένδαμου" }
    ],
    "σοκολάτες_και_τσάι": [
      { "item": "Salted Caramel", "price": "4.60€", "description": "Λευκή σοκολάτα με γεύση αλμυρής καραμέλας & μια δόση espresso" },
      { "item": "White Chocolate with Raspberry & Blueberry", "price": "4.60€", "description": "Λευκή σοκολάτα με κομμάτια raspberry & blueberry" },
      { "item": "Ginger Chocolate & Indonesian Cinnamon", "price": "4.60€", "description": "Άρωμα από Ασία με φυσικό ginger & φυσική κανέλα" },
      { "item": "Orange Holic Cocoa", "price": "4.50€" },
      { "item": "Σοκολάτα Γάλακτος", "price": "4.00€" },
      { "item": "Σοκολάτα Bitter", "price": "4.00€" },
      { "item": "Λευκή Σοκολάτα", "price": "4.00€" },
      { "item": "Μικρός Πρίγκιπας", "price": "3.50€", "description": "Κομμάτια μήλου, σταφύλι, φράουλα, ιβίσκος & χαμομήλι. Δεν περιέχει καφεΐνη." },
      { "item": "Κόκκινη Πλατεία", "price": "3.50€", "description": "Τσάι φρούτων με έντονο κόκκινο χρώμα από ιβίσκο & κρανμπέρι με γλυκόξινη γεύση. Δεν περιέχει καφεΐνη." },
      { "item": "Cascara Coffee Cherry Tea", "price": "4.00€", "description": "Ρόφημα φτιαγμένο από αποξηραμένο κέλυφος των καρπών του καφέ (καρπός του καφεόδεντρου). Πλούσιο σε αντιοξειδωτικά στοιχεία και με το περίπου της καφεΐνης που περιέχει μια κούπα καφέ." },
      { "item": "Λευκός Άγγελος", "price": "3.50€", "description": "Συνδυασμός λευκού & πράσινου τσαγιού με κανέλα, φλούδες πορτοκαλιού, λεμονόχορτο, φιλέ αμυγδάλου, άνθη πορτοκαλιάς, πορτοκάλι σε φέτες & αρωματικές ύλες." },
      { "item": "Matcha Tea", "price": "4.00€" },
      { "item": "Black Tea", "price": "3.00€" },
      { "item": "Green Tea", "price": "3.00€" },
      { "item": "Earl Grey", "price": "3.00€", "description": "Μαύρο τσάι & εσπεριδοειδή" },
      { "item": "Πικάντικο Πορτοκάλι", "price": "3.00€", "description": "Ιβίσκος, τσίλι, κόκκινο πιπέρι & πορτοκάλι" },
      { "item": "Τσάι του Βουνού φρέσκο", "price": "3.50€" },
      { "item": "Χαμομήλι", "price": "3.50€" }
    ],
    "smoothies_και_χυμοί": [
      { "item": "Dream Cream", "price": "5.00€", "description": "Ανανάς, μπανάνα, καρύδα" },
      { "item": "Green Freak", "price": "5.00€", "description": "Σπανάκι, καρότο, πορτοκάλι, ανανάς" },
      { "item": "Wild Forest", "price": "5.00€", "description": "Φράουλα, μύρτιλο, βατόμουρο, φραγγοστάφυλλο, κόκκινο & μαύρο μούρο, κεράσι" },
      { "item": "Red Passion", "price": "5.00€", "description": "Φράουλα, βατόμουρο, μάνγκο" },
      { "item": "Φυσικός Χυμός Πορτοκάλι", "price": "4.00€" },
      { "item": "Λεμονάδα Σπιτική", "price": "4.50€" },
      { "item": "Φυσικός Χυμός Ανάμεικτος", "price": "4.50€" },
      { "item": "Χυμοί 250ml", "price": "3.00€" }
    ],
    "μπύρες_και_κρασιά": [
      { "item": "Άλφα 330ml", "price": "3.50€" },
      { "item": "Kaiser 330ml", "price": "4.00€" },
      { "item": "Heineken 330ml", "price": "3.50€" },
      { "item": "Amstel 330ml", "price": "3.50€" },
      { "item": "Radler 330ml", "price": "3.50€" },
      { "item": "Stella Artois 330ml", "price": "5.00€" },
      { "item": "Μάμος 330ml", "price": "3.50€" },
      { "item": "Fischer 330ml", "price": "3.50€" },
      { "item": "Corona 330ml", "price": "6.00€" },
      { "item": "Bud 330ml", "price": "5.00€" },
      { "item": "Peroni 330ml", "price": "5.00€" },
      { "item": "Μηλοκλέφτης 330ml", "price": "3.50€" },
      { "item": "Paulaner 330ml", "price": "5.00€" },
      { "item": "Κόκκινο Ξηρό (Κρασί ποτήρι)", "price": "4.00€" },
      { "item": "Λευκό Ξηρό (Κρασί ποτήρι)", "price": "4.00€" },
      { "item": "Κόκκινο Ημίγλυκο (Κρασί ποτήρι)", "price": "4.00€" },
      { "item": "Λευκό Ημίγλυκο (Κρασί ποτήρι)", "price": "4.00€" },
      { "item": "Λευκή Σαγκρία (Κρασί ποτήρι)", "price": "4.50€" },
      { "item": "Κόκκινη Σαγκρία (Κρασί ποτήρι)", "price": "4.50€" }
    ],
    "φαγητό_και_brunch": [
      { "item": "Caesar Salad", "price": "12.00€", "description": "με ψητό κοτόπουλο" },
      { "item": "Beef Burger", "price": "12.00€", "description": "μαγιονέζα, μαρούλι, ντομάτα, τσένταρ, καραμελωμένο κρεμμύδι, μπέικον & νιφάδες παρμεζάνας" },
      { "item": "Chicken Burger", "price": "12.00€", "description": "μπιφτέκι κοτόπουλο, μαρούλι, ντομάτα, τσένταρ, καραμελωμένο κρεμμύδι, μπέικον & νιφάδες παρμεζάνας" },
      { "item": "Chicken Burger με Σνίτσελ Κοτόπουλο", "price": "12.00€", "description": "παναρισμένο με δημητριακά, τριμμένη γραβιέρα, avocado lime sauce, ντομάτα, μαρούλι & hot chili sauce." },
      { "item": "Burger με Μοσχαρίσιο Μπιφτέκι", "price": "12.00€", "description": "ψητά λαχανικά, μαρούλι, ντομάτα, γραβιέρα Κρήτης, μαγιονέζα & hot chili sauce" },
      { "item": "Burger με Χοιρινά Πανσετάκια", "price": "12.00€", "description": "ντομάτα, ρόκα, τριμμένη φέτα, σως μουστάρδας & καυτερή BBQ sauce. Σερβίρεται με τηγανιτές γλυκοπατάτες" },
      { "item": "Club Sandwich", "price": "7.50€" },
      { "item": "Club Sandwich με ψητό κοτόπουλο", "price": "8.70€", "description": "μπέικον, ντομάτα & μαρούλι" },
      { "item": "Club Sandwich με φουαντρέ ζαμπόν", "price": "8.50€", "description": "τσένταρ, ντομάτα & μαρούλι" },
      { "item": "Vegetarian Club Sandwich", "price": "8.50€", "description": "πιπεριές, ντομάτα, μαρούλι, μανιτάρια & γουακαμόλε" },
      { "item": "Deluxe Club Sandwich", "price": "13.00€", "description": "χωριάτικο ψωμί, τσένταρ, ντομάτα, μαρούλι μπέικον & σνίτσελ κοτόπουλο" },
      { "item": "Φρεσκοψυμένο Κρουασάν Βουτυρου", "price": "10.00€", "description": "με μοτσαρέλα μαρούλι ντομάτα αυγά ποσέ ολλαντέζ σάλτσα & τριμμένη γραβιέρα" },
      { "item": "Προζυμένιο Ψωμί", "price": "13.50€", "description": "με χοιρινά μπριζολάκια, τσίης ποτότος αλειφωτή μανιτάρια αυγά ποσέ σαλάτα & γραβιέρα" },
      { "item": "Αλμυρές Αυγόφετες", "price": "10.00€", "description": "με αλειφωτή αυγό μαρούλι ντομάτα & τριμμένο τυρί regato" },
      { "item": "Τορτίγιο Κοτόπουλο", "price": "10.00€", "description": "με μαρούλι ντομάτα καλαμπόκι flakes γραβιέρος & caesar's sauce" },
      { "item": "Eggs Benedict (Ζαμπόν)", "price": "9.00€", "description": "με τυρί κρέμα μαρούλι, ντομάτα, φουαντρέ ζαμπόν αυγό ποσέ σάλτσα ολλαντέζ" },
      { "item": "Eggs Benedict (Κατίκι)", "price": "9.00€", "description": "με Κατίκι Δομοκού μορταδέλα με φυστίκια μαρούλι, ντομάτα αυγό ποσέ & σάλτσα ολλαντέζ" },
      { "item": "Brioche Ψωμάκι (Γαλοπούλα)", "price": "9.00€", "description": "με ντομάτα μαρούλι, φουαντρέ γαλοπούλα, αυγό & μοτσαρέλα" },
      { "item": "Brioche Ψωμάκι (Μπέικον)", "price": "8.00€", "description": "με τσένταρ μπέικον, μαρούλι, ντομάτα, αυγό & Grana Padano" },
      { "item": "Scrambled Eggs με καπνιστό Σολομό", "price": "9.50€", "description": "με καπνιστό Σολομό, τυρί κρέμα & ξύσμα λεμονιού" },
      { "item": "Scrambled Eggs (Μπέικον)", "price": "8.50€", "description": "ψωμί ολικής μπέικον & τυρί regato" },
      { "item": "Αβοκάντο Τόστ", "price": "8.50€", "description": "ψωμί ολικής γουακαμόλε τριμμένη φέτα αυγά ποσέ ντοματίνια & σαλάτα" },
      { "item": "Spaghetti Pancakes Bowl", "price": "9.00€", "description": "Μακριά λεπτά pancakes σε μορφή ζυμαρικού με ρευστή κρέμα Βανίλιας φρέσκα φρούτα αμύγδαλο φιλέ & φιστίκι Αιγίνης" },
      { "item": "French Toast με Nutella", "price": "10.50€", "description": "μπανόνα & τραγανό φουντούκι" },
      { "item": "Pancakes Γλυκά Bueno", "price": "8.50€", "description": "πραλίνα Bueno & τραγανό μπισκότο" }
    ]
  }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const landingOverlay = document.getElementById('landing-overlay');
    const mainContent = document.getElementById('main-content');
    const navList = document.getElementById('nav-list-container');
    const menuContainer = document.getElementById('menu-container');

    // Check if user already picked a language
    const savedLang = localStorage.getItem('blueMountainLang');
    if (savedLang) {
        setLanguage(savedLang);
    }

    // Language Selection Logic
    document.getElementById('btn-en').addEventListener('click', () => {
        setLanguage('en');
    });

    document.getElementById('btn-el').addEventListener('click', () => {
        setLanguage('el');
    });

    // Language Change from floating button
    document.getElementById('btn-change-lang').addEventListener('click', () => {
        landingOverlay.classList.remove('hidden');
        mainContent.classList.add('hidden');
    });

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('blueMountainLang', lang); // Remember choice
        renderMenu();
        // Hide landing, show content
        landingOverlay.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function renderMenu() {
        // Clear previous content
        navList.innerHTML = '';
        menuContainer.innerHTML = '';

        const allCategories = currentLang === 'en' ? menuData.english_menu : menuData.greek_menu;

        Object.keys(allCategories).forEach((categoryKey, index) => {
            const items = allCategories[categoryKey];
            
            // Format the raw key from JSON (e.g., "food_and_brunch" -> "Food And Brunch")
            let catName = categoryKey.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            // Small fix for Greek lowercase accented letters if needed, but the above works nicely for Greek too.
            
            // 1. Render Nav Link
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${categoryKey}`;
            a.className = `nav-link ${index === 0 ? 'active' : ''}`;
            a.textContent = catName;
            li.appendChild(a);
            navList.appendChild(li);

            // 2. Render Section
            const section = document.createElement('section');
            section.id = categoryKey;
            section.className = 'menu-section';
            
            const h2 = document.createElement('h2');
            h2.className = 'section-title';
            h2.textContent = catName;
            section.appendChild(h2);

            const grid = document.createElement('div');
            grid.className = 'menu-grid';

            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';

                let descHTML = '';
                if (item.description) {
                    descHTML = `<p class="item-desc">${item.description}</p>`;
                }

                menuItem.innerHTML = `
                    <div class="item-header">
                        <h3 class="item-name">${item.item}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    ${descHTML}
                `;
                grid.appendChild(menuItem);
            });

            section.appendChild(grid);
            menuContainer.appendChild(section);
        });

        setupScrollLogic();
    }

    function setupScrollLogic() {
        const sections = document.querySelectorAll('.menu-section');
        const navLinks = document.querySelectorAll('.nav-link');
        const navBar = document.getElementById('category-nav');

        // Smooth scrolling
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                const navHeight = navBar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });

        // Update active link on scroll
        const scrollHandler = () => {
            let current = '';
            const navHeight = navBar.offsetHeight;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - navHeight - 50)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                    const linkRect = link.getBoundingClientRect();
                    const navRect = navBar.getBoundingClientRect();
                    if (linkRect.left < navRect.left || linkRect.right > navRect.right) {
                        navBar.scrollLeft += (linkRect.left - navRect.left) - 20;
                    }
                }
            });
        };

        window.removeEventListener('scroll', scrollHandler);
        window.addEventListener('scroll', scrollHandler);

        // Stunning Entrance Animations using Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
});
