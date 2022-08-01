--use wm
select * from estados e, cidades c
where e.id = c.estado_id;


--não mostrou a coluna cidade, no workbench mostra
select e.nome, c.nome, regiao from estados e, cidades c
where e.id = c.estado_id;


-- Bug consertado
select 
    e.nome as Estados,
    c.nome as Cidades, 
    regiao as Região 
from estados e, cidades c
where e.id = c.estado_id;


select
    c.nome as Cidades,
    e.nome as Estados,    
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id