import acceso_datos as dt


def obtener_sets():
    sql = "select * from set"
    datos = dt.consulta(sql, "")
    return datos


def obtener_cartas_sets(id):
    sql = f"PREPARE consulta (TEXT) AS select * from card c where c.set_id = $1 order by name"
    datos = dt.consulta(sql, id)
    return datos


def obtener_carta(id):
    sql = (f"PREPARE consulta (TEXT) AS select * from market m "
           f"join image i on m.id = i.id  "
           f"	where m.card_id =  $1")
    datos = dt.consulta(sql, id)
    print(datos)
    return datos

