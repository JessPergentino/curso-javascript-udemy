create table galeria
(
    id_galeria serial not null,
    titulo varchar(255) null,
    caminho text null,

    constraint pk_galeria
primary key (id_galeria)
)