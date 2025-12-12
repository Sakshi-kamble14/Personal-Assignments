create database sunbeam_db;

use sunbeam_db;

set sql_safe_updates=0;

show tables;

drop table users;

create table users(email varchar(20) primary key,password varchar(20),role enum('student','admin'));

create table courses(course_id int primary key auto_increment,course_name varchar(20),description varchar(20),fees int,start_date date,end_date date,video_expire_days int);

create table students(reg_no int primary key auto_increment,name varchar(20), email varchar(20),course_id int,mobile_no int ,profile_pic blob,foreign key (email) references users(email),foreign key (course_id) references courses(course_id));

create table videos(video_id int primary key auto_increment,course_id int ,title varchar(20),description varchar(50),youtube_url varchar(70),added_at date,foreign key (course_id) references courses(course_id));

insert into users (email,password,role) values('s1','s1@gmail.com','student');
insert into users (email,password,role) values('s2','s2@gmail.com','student');
insert into users (email,password,role) values('s3','s3@gmail.com','student');


select *from users;
select *from courses;
select *from students;
select *from videos;
desc courses;
desc students;
desc videos;


insert into courses (course_name,description,fees,start_date,end_date,video_expire_days) values ('IIT-MERN-2025','MERN',4000,'2025-12-20','2026-01-20',30);
insert into courses (course_name,description,fees,start_date,end_date,video_expire_days) values ('AI','Related AI',10000,'2025-12-24','2026-01-24',5);
insert into courses (course_name,description,fees,start_date,end_date,video_expire_days) values ('Android','Related Android',9999,'2025-12-24','2026-01-24',7);
insert into courses (course_name,description,fees,start_date,end_date,video_expire_days) values ('Python','py',10000,'2025-12-24','2026-01-24',20);
insert into courses (course_name,description,fees,start_date,end_date,video_expire_days) values ('Python','py',10000,'2025-11-24','2025-12-24',30);

insert into students (name, email, course_id, mobile_no, profile_pic) values('Rohan Patil', 's1', 1, 123, NULL);
insert into students (name, email, course_id, mobile_no, profile_pic) values('Sneha Kulkarni', 's2', 2, 987, NULL);
insert into students (name, email, course_id, mobile_no, profile_pic) values('Amit Sharma', 's3', 3, 655, NULL);

insert into videos (course_id,title,description,youtube_url,added_at) values(1,'Mern 1','Video-yt','some_url','2025-12-12');
insert into videos (course_id,title,description,youtube_url,added_at) values(2,'Python 2','Video-py','url','2025-12-13');
insert into videos (course_id,title,description,youtube_url,added_at) values(3,'Android','Video-android','some_url','2025-12-12');
insert into videos (course_id,title,description,youtube_url,added_at) values(4,'Android','Video-android','some_url','2025-11-25');

-- Q1. Write a Sql query that will fetch all upcoming courses.
select *from courses where start_date > current_date();

-- Q2. Write a Sql query that will fetch all the registered students along with course name
select s.reg_no,s.name,s.email,s.mobile_no ,c.course_id ,c.course_name from students s inner join 
courses c on s.course_id=c.course_id;

-- Q3. Write an SQL query to fetch the complete details of a student (based on their email) along with the details
-- of the course they are enrolled in
DELIMITER $$
create procedure find_details(IN email varchar(20))
begin
  select s.reg_no,s.name,s.email,s.mobile_no ,c.course_id ,c.course_name ,c.description,c.fees,c.start_date,c.end_date ,c.video_expire_days from students s inner join 
courses c on s.course_id=c.course_id where s.email=email;
end$$
DELIMITER ;

call find_details('s1');

-- Q4. Write an SQL query to retrieve the course details and the list of non-expired videos for a specific student
-- using their email address. A video is considered active (not expired) if its added_at date plus the course’s
-- video_expire_days has not yet passed compared to the current date.
-- Example: A video added on 2025-01-01 with 30 video_expire_days remains active until 2025-01-31


select c.course_id,c.course_name, c.start_date,c.end_date,c.video_expire_days,v.video_id,v.title,v.added_at from courses c inner join videos v on
c.course_id=v.course_id where v.added_at > current_date() and c.video_expire_days > v.added_at -current_date();
