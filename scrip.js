
  
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

   
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });

    
    document.getElementById('dropdown').addEventListener('change', (event) => {
        const sortValue = event.target.value;
      
    });

    
    const searchInput = document.querySelector('.search-input1');
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const title = card.querySelector('.text li').textContent.toLowerCase();
            card.style.display = title.includes(filter) ? '' : 'none';
        });
    });

    const menuToggle = document.querySelector('.menuToggle');
    const navLinks = document.querySelector('.navigation');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });




    document.addEventListener('DOMContentLoaded', () => {
        const allGamesButton = document.getElementById('all-games');
        const favoriteGamesButton = document.getElementById('favorite-games');
        const cards = document.querySelectorAll('.card');
    
        allGamesButton.addEventListener('click', () => {
            showGames('all');
        });
    
        favoriteGamesButton.addEventListener('click', () => {
            showGames('favorites');
        });
    
        function showGames(filter) {
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    card.style.width =' 200px';
                    card.style.height =' 100%';
                  
                } else if (filter === 'favorites') {
                    if (card.getAttribute('data-favorite') === 'true') {
                        card.style.display = 'block';
                        card.style.width =' 200px';
                        card.style.height =' 100%';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
    
           
            allGamesButton.classList.remove('active');
            favoriteGamesButton.classList.remove('active');
            if (filter === 'all') {
                allGamesButton.classList.add('active');
            } else {
                favoriteGamesButton.classList.add('active');
            }
        }
    });





