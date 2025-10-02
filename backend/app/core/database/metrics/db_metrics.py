from prometheus_client import Counter, Histogram

DB_QUERY_COUNT = Counter(
    "db_queries_total",
    "Total DB queries"
)

DB_QUERY_TIME = Histogram(
    "db_query_duration_seconds",
    "DB query execution time"
)