import psycopg2 as psg
import os

def connect():
    conn = psg.connect(os.environ['DATABASE_URL'] )
    return conn

def disconnect(conn):
    conn.close()

def consulta(sql, param):
    resultado = None
    try:
        conn = connect()
        cur = conn.cursor()
        cur.execute(sql)
        if param != "":
            cur.execute(f"EXECUTE consulta ('{param}')")
        resultado = cur.fetchall()  # Obtiene todas las filas
        cur.close()
        disconnect(conn)
    except Exception as e:
        print(f"Error de base de dados: {e}")
        raise
    return resultado
