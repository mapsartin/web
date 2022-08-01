SELECT * FROM cidades;

insert into prefeitos
    (nome, cidade_id)
values
    ('Lula', 1),
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);

SELECT * FROM prefeitos;

insert into prefeitos
    (nome, cidade_id)
    values
    ('Rafael Greca', null)

--erro
insert into prefeitos
    (nome, cidade_id)
    values
    ('Rodrigo Pinheiro', 3)