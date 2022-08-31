begin;

drop table if exists users, products, cart cascade;
create table users(
    id serial primary key,
    first_name varchar(150) not null,
    last_name varchar(150) not null,
    email varchar(150) not null unique,
    password text
);

create table products(
    id serial primary key,
    title varchar(150) not null,
    description text,
    price float not null,
    image_url text not null default('https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png?20200509031052')
);

create table cart(
    id serial primary key,
    user_id int,
    product_id int,
    foreign key (user_id) references users(id),
    constraint fk_product_id foreign key(product_id) references products(id)
);

insert into users(first_name, last_name, email, password) values('Rabee', 'bhaisi', 'rabee@gmail.com', '12345'),
('Shams', 'khodary', 'shams@gmail.com', '123');

insert into products(title, description, price, image_url) values('iphone pro 13','iPhone 13 Pro takes a huge leap forward, bringing incredible speed to everything you do and dramatic new photo and video capabilities — all in two great sizes.', 1000, 'https://cdn.discordapp.com/attachments/1001457039173750794/1014113018289860679/unknown.png');

commit;