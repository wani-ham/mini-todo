create database sesac_todo default character set utf8 collate utf8_general_ci;
show databases;

use sesac_todo;

create table Todo (
	id int not null primary key auto_increment,
    title varchar(100) not null,
    done boolean not null default false
);

desc Todo;

insert into todo values (null, 'my todo1', 0);
insert into todo values (null, 'my todo2', 1);
insert into todo values (null, 'my todo3', 0);
insert into todo values (null, 'my todo4', 0);
insert into todo values (null, 'my todo5', 1);
insert into todo values (null, 'my todo6', 0);

update todo set title='my todo7' where id = 1;

select * from Todo;

create user 'user'@'%' identified with mysql_native_password by '1234'; 

select * from mysql.user;
flush privileges;

SET GLOBAL validate_password.policy=LOW;
SET GLOBAL validate_password.length=4;