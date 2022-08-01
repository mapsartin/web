Alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco',28804641000118),
    ('Vale', 07960206000102),
    ('Petrobras', 56947121000108);


select * from empresas;
select * from cidades;

desc empresas;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);


    select * from empresas_unidades;