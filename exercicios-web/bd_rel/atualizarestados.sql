update estados
set nome = 'Maranhão'
where sigla = 'MA'


select nome, sigla from `estados`
where sigla = 'MA'

select nome, sigla, populacao from `estados`
where sigla = 'PR'


update `estados`
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'