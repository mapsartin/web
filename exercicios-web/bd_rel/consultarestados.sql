select * from estados

select nome as 'Nome dos Estados', sigla as 'UF' from estados
where regiao = 'Sul'


select nome, regiao, populacao from `estados` 
WHERE populacao >= 4
order by populacao desc