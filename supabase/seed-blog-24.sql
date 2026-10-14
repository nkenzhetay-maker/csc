-- CSC blog yazıları (herkese açık içerik)
select setval(pg_get_serial_sequence('public.blog_yazilari','id'), (select max(id) from public.blog_yazilari)); select count(*) as blog from public.blog_yazilari;
