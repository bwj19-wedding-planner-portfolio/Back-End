exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      couple_name: "Erica & Andrew's Wedding",
      wedding_theme: "Rustic",
      wedding_date: "2019-03-30",
      photo:
        "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
      location: "Boston, Massachusetts",
      description: "Daniel Westbrook",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Eric & Samantha's Wedding",
      wedding_theme: "Beach",
      wedding_date: "2019-04-20",
      photo:
        "https://images.unsplash.com/photo-1546193430-c2d207739ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1978&q=80",
      location: "San Diego, CA",
      description: "Katherine Vogel",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Mitsuki & Takao's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2019-01-10",
      photo:
        "https://images.unsplash.com/photo-1522057384400-681b421cfebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Austin, TX",
      description: "Lucy Hale",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Sam & Alice's Wedding",
      wedding_theme: "Country",
      wedding_date: "2018-02-20",
      photo:
        "https://images.unsplash.com/photo-1475714622877-641e013c6096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80",
      location: "Colonie, NY",
      description: "Tim Horton",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Kate & Kristen's Wedding",
      wedding_theme: "Rustic",
      wedding_date: "2018-06-04",
      photo:
        "https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Seattle, WA",
      description: "John Stamos",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Josh & Amanda's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2016-02-18",
      photo:
        "https://images.unsplash.com/photo-1527578400122-85bbbb91d53c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      location: "Los Angelos, CA",
      description: "Linda Selby",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Daniel & Lucy's Wedding",
      wedding_theme: "Country",
      wedding_date: "2016-10-29",
      photo:
        "https://images.unsplash.com/photo-1509610973147-232dfea52a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      location: "Denver, CO",
      description: "Jameson Armstrong",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Cynthia & Christina's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2017-03-20",
      photo:
        "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      location: "Manhattan, NY",
      description: "Joshua Samus",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    },
    {
      couple_name: "Sumiko & Ryosuke's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2018-07-23",
      photo:
        "https://images.unsplash.com/photo-1522333323-32663f141b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      location: "Boston, MA",
      description: "Candace Lindsale",
      vendors: "test",
      user_id: 2,
      username: "jefftest"
    }
  ]);
};