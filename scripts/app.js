(function (root) {
    let Router = root.Routy.Router;
    
    class Application {
        constructor() {
            this.setup();
        }
        
        setup() {
            let router = new Router();
            
            router
                .add('/', { template: '<h1>home</h1>' })
                .add('/products', { template: '<h1>Products</h1>' })
                .add('/about', { template: '<h1>About</h1>' })
                .add('/contact', { template: '<h1>Contact</h1>' })
                .otherwise('/')
                .on('change', this.render);
    
            router.run();
        }
        
        render(req) {
            let $view = document.getElementById('view');
            $view.innerHTML = req.route.options.template;
        }
    }
    
    root.addEventListener('DOMContentLoaded', () => {
        new Application();
    });
}(window));
