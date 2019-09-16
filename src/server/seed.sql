--journals seed--
INSERT INTO journals (journal_name, cover_img, user_id) VALUES ('Australia', 'https://www.china-briefing.com/news/wp-content/uploads/2019/04/China-Briefing-Australian-Businesses-Optimistic-about-China-Invested-for-the-Long-Term.jpg', 1);
INSERT INTO journals (journal_name, cover_img, user_id) VALUES ('Bali', 'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/pagePropertiesOgImage/bali.jpg.jpg', 1);
INSERT INTO journals (journal_name, cover_img, user_id) VALUES ('Taiwan', 'https://media.nomadicmatt.com/taipei101_004.jpg', 1);
INSERT INTO journals (journal_name, cover_img, user_id) VALUES ('Paris', 'https://vyapteetourism.com/wp-content/uploads/2019/04/Austria-Swiss-Paris-London.jpg', 1);
INSERT INTO journals (journal_name, cover_img, user_id) VALUES ('London', 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg', 1);


--entries seed--
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        1, 
        'Australia Day 1', 
        'https://prospects-ac-uk.cdn.prismic.io/prospects-ac-uk/b6ea84179668f1383bce034fadcf6b05092f77ef_work-in-australia-1.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Sydney', 
        '2019-07-11', 
        '2019-07-11');
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        1, 
        'Australia Day 2', 
        'https://i.pinimg.com/originals/9b/6c/65/9b6c6569fb7a8a5693e770f4c7561aab.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Melbourne', 
        '2019-07-11', 
        '2019-07-11');
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        2, 
        'Bali Day 1', 
        'https://media.timeout.com/images/105240189/image.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Kuta', 
        '2019-07-15', 
        '2019-07-15');
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        2, 
        'Bali Day 2', 
        'https://amp.businessinsider.com/images/5bbe86a292b3694b54281774-750-375.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Seminyak', 
        '2019-07-16', 
        '2019-07-16');
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        2, 
        'Bali Day 3 Part 1', 
        'https://img.traveltriangle.com/blog/wp-content/uploads/2015/05/Places-to-visit-in-Bali-Cover1.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Seminyak Beach', 
        '2019-07-17', 
        '2019-07-17');
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        2, 
        'Bali Day 3 Part 2', 
        'https://media.tacdn.com/media/attractions-splice-spp-360x240/07/35/e9/e7.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Seminyak Temple', 
        '2019-07-17', 
        '2019-07-17');
INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date, entry_update_date) VALUES 
        (1, 
        2, 
        'Bali Day 3 Part 3', 
        'https://img.jakpost.net/c/2017/01/26/2017_01_26_20118_1485402611._large.jpg', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus tincidunt, urna nec finibus dictum, lorem felis tempor magna, 
        blandit sagittis lacus libero vel sapien. Cras porttitor fermentum interdum. 
        Aenean vel euismod velit. Vestibulum sit amet aliquet quam, non fringilla lorem.', 
        'Seminyak', 
        '2019-07-17', 
        '2019-07-17');